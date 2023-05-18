import createRockPaperScissors, { Outcome, Tool } from "../src/rock-paper-scissors";

describe("createRockPaperScissors", () => {

  describe("play", () => {

        it("should return `Player Wins` when , player=paper and opponent=rock",()=>{
          
            //Arrange
            const sut =createRockPaperScissors()
          
            //Act
            const received=sut.play(Tool.Paper,Tool.Rock)
            const expected=Outcome.PlayerWins
          
            //Assert
              expect(received).toEqual(expected)
          })
          it("should return `Player Loses` when player=paper and opponent=scissors",()=>{
            
            //Arrange
            const sut = createRockPaperScissors()

            //Act 
            const received = sut.play(Tool.Paper,Tool.Scissors)
            const expected= Outcome.PlayerLoses

            //Assert
            expect(received).toEqual(expected)

          })

      })
})
 

