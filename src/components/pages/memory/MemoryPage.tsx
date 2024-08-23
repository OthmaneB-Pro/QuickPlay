import styled from "styled-components";
import LeftMemory from "./leftSide/LeftMemory";

export default function MemoryPage() {
  return (
    <MemoryPageStyled>
      <div className="container">
        <LeftMemory/>
      </div>
    </MemoryPageStyled>
  );
}

const MemoryPageStyled = styled.div`
  background: #5bc3e2;
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
