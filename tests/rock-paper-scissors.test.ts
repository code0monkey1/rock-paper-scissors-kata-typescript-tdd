import createRockPaperScissors, { Outcome, Tool } from "../src/rock-paper-scissors";

describe("createRockPaperScissors", () => {

  describe("play", () => {
        
    describe(" when player=paper", () => {
      it("should return `Player Wins` when opponent=rock",()=>{
          
            //Arrange
            const sut =createRockPaperScissors()
          
            //Act
            const received=sut.play(Tool.Paper,Tool.Rock)
            const expected=Outcome.PlayerWins
          
            //Assert
              expect(received).toEqual(expected)
          })
      it("should return `Player Loses` when opponent=scissors",()=>{
            
            //Arrange
            const sut = createRockPaperScissors()

            //Act 
            const received = sut.play(Tool.Paper,Tool.Scissors)
            const expected= Outcome.PlayerLoses

            //Assert
            expect(received).toEqual(expected)

          })

      it("should return `Tie` when opponent=paper ",()=>{
            
            //Arrange
            const sut = createRockPaperScissors()

            //Act 
            const received = sut.play(Tool.Paper,Tool.Paper)
            const expected= Outcome.Tie

            //Assert
            expect(received).toEqual(expected)

          })
            
        
        })
        
  describe(' when player=rock', () => {  
    it("should return `Player Wins`  when opponent=paper",()=>{
                
        //Arrange
        const sut = createRockPaperScissors()

        //Act 
        const received = sut.play(Tool.Rock,Tool.Paper)
        const expected= Outcome.PlayerLoses

        //Assert
        expect(received).toEqual(expected)

        })


    it("should return `Player Loses`  when opponent=scissors",()=>{
                
              //Arrange
              const sut = createRockPaperScissors()
              //Act 
              const received = sut.play(Tool.Rock,Tool.Scissors)
              const expected= Outcome.PlayerWins
              //Assert
              expect(received).toEqual(expected)
          
              })

        it("should return `Tie` when opponent=Rock ",()=>{
                      
              //Arrange
              const sut = createRockPaperScissors()

              //Act 
              const received = sut.play(Tool.Rock,Tool.Rock)
              const expected= Outcome.Tie

              //Assert
              expect(received).toEqual(expected)

              })

        })

      describe(' when player=scissors', () => {  
                 
        it("should return `Player Wins`  when opponent=paper",()=>{
                    
                  
            //Arrange
            const sut = createRockPaperScissors()
            const playerMove=Tool.Scissors
            const opponentMove = Tool.Paper

            //Act 
            const received = sut.play(playerMove,opponentMove)
            const expected= Outcome.PlayerWins

            //Assert
            expect(received).toEqual(expected)

            
            })

        it("should return `Player Loses`  when opponent=rock",()=>{
                    
                    
                 //Arrange
                 const sut = createRockPaperScissors()                 //Act 
                 const received = sut.play(Tool.Scissors,Tool.Rock)
                 const expected= Outcome.PlayerLoses                 //Assert
                 expect(received).toEqual(expected)           
            })

                 it("should return `Tie`  when opponent=rock",()=>{
                    
                    
                      //Arrange
                      const sut = createRockPaperScissors()

                      //Act 
                      const received = sut.play(Tool.Scissors,Tool.Scissors)
                      const expected= Outcome.Tie

                      //Assert
                      expect(received).toEqual(expected)

            
            })


          
             })

              
          
            

      })
})
 

