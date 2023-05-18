export enum Tool{
  Rock="rock",
  Paper="paper",
  Scissors="scissors"
}

export enum Outcome{
  PlayerWins="Player wins",
  PlayerLoses="Player loses",
  Tie="Tie"
}

export interface PropTypes{
  play:(player:Tool,opponent:Tool)=>Outcome;
}

const getOutcome = (player:Tool,opponent:Tool):Outcome => {
    
  switch(player){
      case Tool.Rock:
          if(opponent===Tool.Scissors)
            return Outcome.PlayerWins
          if(opponent===Tool.Paper)
             return Outcome.PlayerLoses
      case Tool.Paper:
          if(opponent===Tool.Rock)
              return Outcome.PlayerWins
          if(opponent===Tool.Scissors)
              return Outcome.PlayerLoses
      // case Tool.Scissors:
      //      if(opponent===Tool.Rock)
               
             
      default:
           return Outcome.Tie

   }

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