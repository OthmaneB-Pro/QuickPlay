import styled from "styled-components";
import RockPaperScissorsText from "./leftSide/RockPaperScissorsText";
import RockPaperScissorsGame from "./RockPaperScissorsGame";

export default function GamePage() {
  return (
    <GameStyled>
      <div className="container">
        <RockPaperScissorsText />
        <RockPaperScissorsGame />
      </div>
    </GameStyled>
  );
}

const GameStyled = styled.div`
  background: linear-gradient(135deg, #fdfcfb, #e2d1c3);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 1200px;
    height: 600px;
    border-radius: 15px;
    border: 2px solid rgba(0, 0, 0, 0.1);
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    backdrop-filter: blur(10px);
    padding: 20px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .container:hover {
    transform: scale(1.02);
  }
`;
