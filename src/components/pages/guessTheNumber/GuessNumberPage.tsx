import styled from "styled-components";
import LeftGuessNumber from "./leftSide/LeftGuessNumber";
import GameGuessNumber from "./GameGuessNumber";

export default function GuessNumberPage() {
  return (
    <GuessNumberStyled>
      <div className="container">
        <LeftGuessNumber />
        <GameGuessNumber />
      </div>
    </GuessNumberStyled>
  );
}

const GuessNumberStyled = styled.div`
  background: linear-gradient(135deg, #ca9288, #eac0b5);
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
