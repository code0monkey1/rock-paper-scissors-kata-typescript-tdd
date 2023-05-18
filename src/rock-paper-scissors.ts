export enum Tool{
  Rock="rock",
  Paper="paper",
  Scissors="scissors"
}

export interface PropTypes{
  play:(player_1:Tool,player_2:Tool)=>void;
}

const createRockPaperScissors=():PropTypes=>{

  return{
    play:(player_1:Tool,player_2:Tool)=>{

       return "Player Wins"
    }

    }
  }


export default createRockPaperScissors;