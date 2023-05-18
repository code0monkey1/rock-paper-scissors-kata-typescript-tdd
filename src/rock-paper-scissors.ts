export enum Tool{
  Rock="rock",
  Paper="paper",
  Scissors="scissors"
}

export interface PropTypes{
  play:(player:Tool,opponent:Tool)=>void;
}

const createRockPaperScissors=():PropTypes=>{

  return{
    play:(player:Tool,opponent:Tool)=>{
       if(opponent===Tool.Scissors){
        return "Player Loses"
       }
       return "Player Wins"
    }

    }
  }


export default createRockPaperScissors;