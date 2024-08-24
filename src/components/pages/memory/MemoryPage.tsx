import styled from "styled-components";
import LeftMemory from "./leftSide/LeftMemory";
import MemoryGame from "./game/MemoryGame";

export default function MemoryPage() {
  return (
    <MemoryPageStyled>
      <div className="container">
        <LeftMemory />
        <MemoryGame />
      </div>
    </MemoryPageStyled>
  );
}

const MemoryPageStyled = styled.div`
  background: linear-gradient(135deg, #5bc3e2, #93e2f4);
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
