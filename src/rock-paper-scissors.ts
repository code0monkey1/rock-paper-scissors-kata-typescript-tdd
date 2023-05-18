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

const createRockPaperScissors=():PropTypes=>{

  return{
    play:(playerMove:Tool,opponentMove:Tool):Outcome=>{

      const scenario:Scenario|undefined =scenarios
      .find(s=> s.playerMove===playerMove && s.opponentMove===opponentMove);

       return scenario?scenario.outcome:Outcome.Tie;
    }

    }
  }


export default createRockPaperScissors;