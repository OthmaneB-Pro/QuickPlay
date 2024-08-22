import styled from "styled-components";
import RockPaperScissorsText from "./leftSide/RockPaperScissorsText";
import RockPaperScissorsGame from "./RockPaperScissorsGame";

export default function TicTacToePage() {
  return (
    <TicTacToeStyled>
      <div className="container">
        <RockPaperScissorsText/>
        <RockPaperScissorsGame/>
             </div>
    </TicTacToeStyled>
  );
}

const TicTacToeStyled = styled.div`
  background: #d8c2a1;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 1200px;
    height: 600px;
    border-radius: 15px;
    border: 2px solid;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
