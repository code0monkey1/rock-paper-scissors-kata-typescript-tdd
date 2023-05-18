import createRockPaperScissors, { Tool } from "../src/rock-paper-scissors";

describe("play", () => {

 it("should return `Player Wins` when , player=paper & opponent=rock",()=>{
   
    //Arrange
    const sut =createRockPaperScissors()
   
    //Act
     const received=sut.play(Tool.Paper,Tool.Rock)
     const expected="Player Wins";
   
     //Assert
       expect(received).toEqual(expected)
  })
})
  
 

