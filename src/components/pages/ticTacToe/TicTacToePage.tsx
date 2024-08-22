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
  background: #c8d8a1;
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
