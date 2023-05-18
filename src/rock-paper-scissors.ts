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
  play:(player:Tool,opponent:Tool)=>void;
}

const createRockPaperScissors=():PropTypes=>{

  return{
    play:(player:Tool,opponent:Tool)=>{
       if(opponent===Tool.Scissors){
        return  Outcome.PlayerLoses;
       }
       return Outcome.PlayerWins
    }

    }
  }


export default createRockPaperScissors;