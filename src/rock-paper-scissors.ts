export enum Tool{
  Rock="rock",
  Paper="paper",
  Scissors="scissors",
}

export enum Outcome{
  PlayerWins="Player wins",
  PlayerLoses="Player loses",
  Tie="Tie"
}

export interface PropTypes{
  play:(playerMove:Tool,opponentMove:Tool)=>Outcome;
}

interface Scenario{
  playerMove:Tool,
  opponentMove:Tool,
  outcome:Outcome
 }

 const scenarios:Scenario[] = [
  {playerMove: Tool.Rock, opponentMove: Tool.Paper, outcome:Outcome.PlayerLoses},
   {playerMove: Tool.Paper, opponentMove: Tool.Rock, outcome:Outcome.PlayerWins},
  {playerMove: Tool.Scissors, opponentMove: Tool.Paper, outcome:Outcome.PlayerWins},
  {playerMove: Tool.Paper, opponentMove: Tool.Scissors, outcome:Outcome.PlayerLoses},
  {playerMove: Tool.Scissors, opponentMove: Tool.Rock, outcome:Outcome.PlayerLoses},
  {playerMove: Tool.Rock, opponentMove: Tool.Scissors, outcome:Outcome.PlayerWins},
 ]

const getOutcome = (playerMove:Tool,opponentMove:Tool):Outcome => {
    
  if(playerMove===opponentMove)
     return Outcome.Tie;

  switch(playerMove){

      case Tool.Rock:
         if(opponentMove===Tool.Paper)
              return Outcome.PlayerLoses
          if(opponentMove===Tool.Scissors)
              return Outcome.PlayerWins
          break;
  
      case Tool.Paper:
          if(opponentMove===Tool.Rock)
              return Outcome.PlayerWins
          if(opponentMove===Tool.Scissors)
              return Outcome.PlayerLoses
          break;
      case Tool.Scissors:
           if(opponentMove===Tool.Paper)
             return Outcome.PlayerWins
            if(opponentMove===Tool.Rock)
              return Outcome.PlayerLoses 
            break;
       default:
           assertNever(playerMove);
       
      }

      return Outcome.Tie;
}
const createRockPaperScissors=():PropTypes=>{

  return{
    play:(playerMove:Tool,opponentMove:Tool):Outcome=>{

      const scenario:Scenario|undefined =scenarios.find(scenario => {scenario.playerMove===playerMove && scenario.opponentMove===opponentMove});

       return scenario?scenario.outcome:Outcome.Tie;
    }

    }
  }


export default createRockPaperScissors;