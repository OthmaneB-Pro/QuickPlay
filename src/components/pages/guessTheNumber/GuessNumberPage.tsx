import styled from "styled-components";
import LeftGuessNumber from "./leftSide/LeftGuessNumber";
import GameGuessNumber from "./GameGuessNumber";

export default function GuessNumberPage() {
  return (
    <GuessNumberStyled>
      <div className="container">
        <LeftGuessNumber />
        <GameGuessNumber/>
      </div>
    </GuessNumberStyled>
  );
}

const GuessNumberStyled = styled.div`
  background: #ca9288;
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
