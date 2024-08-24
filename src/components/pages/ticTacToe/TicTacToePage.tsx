import styled from "styled-components";
import Board from "./game/Board";
import TextLeftSide from "./leftSide/TextLeftSide";

export default function TicTacToePage() {
  return (
    <TicTacToeStyled>
      <div className="container">
        <TextLeftSide />
        <Board />
      </div>
    </TicTacToeStyled>
  );
}

const TicTacToeStyled = styled.div`
  background: linear-gradient(135deg, #c8d8a1, #e7f0c3);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 1000px;
    height: 600px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }
`;
