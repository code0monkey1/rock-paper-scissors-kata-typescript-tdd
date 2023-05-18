import rockPaperScissors, { Tool } from "../src/rock-paper-scissors";

describe("rock paper scissors",()=>{
  
  it("should exist as a function",()=>{

    //Arrange
    const sut = rockPaperScissors

    //Act

    //Assert
    expect(sut).toBeInstanceOf(Function)
  })
  
  it("should return `Player Wins` when , player=paper & opponent=rock",()=>{
   
    //Arrange
    const sut =rockPaperScissors
   
    //Act
     const received=sut(Tool.Paper,Tool.Rock)
     const expected="Player Wins";
   
     //Assert
       expect(received).toEqual(expected)
  })

})