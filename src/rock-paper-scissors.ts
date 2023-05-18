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
    play:(player:Tool,opponent:Tool):Outcome=>{

      const outcome:Outcome =getOutcome(player,opponent)

      return outcome;
    }

    }
  }


export default createRockPaperScissors;