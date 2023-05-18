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
    
  if(player===opponent)
     return Outcome.Tie;

  switch(player){

      case Tool.Rock:
         if(opponent===Tool.Paper)
              return Outcome.PlayerLoses
          if(opponent===Tool.Scissors)
              return Outcome.PlayerWins
  
      case Tool.Paper:
          if(opponent===Tool.Rock)
              return Outcome.PlayerWins
          if(opponent===Tool.Scissors)
              return Outcome.PlayerLoses

      case Tool.Scissors:
           if(opponent===Tool.Paper)
             return Outcome.PlayerWins
            if(opponent===Tool.Rock)
              return Outcome.PlayerLoses            
      
      }

   return Outcome.Tie

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