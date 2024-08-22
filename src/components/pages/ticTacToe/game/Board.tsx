import { useState } from "react";
import styled from "styled-components";

export default function Board() {
    const [board, setBoard] = useState(Array(9).fill(null));  
    const [player, setPlayer] = useState(false); 

    const handleClick = (index: number) => {
    
        if (board[index]) return;

        const newBoard = [...board];
        newBoard[index] = player ? "O" : "X";  
        setBoard(newBoard);
        setPlayer(!player);  
        if(board[index]){}
    }
    return (
        <BoardStyle>
          {board.map((value, index) => (
            <button key={index} className="board" onClick={() => handleClick(index)}>
              {value}
            </button>
          ))}
        </BoardStyle>
    );
}

const BoardStyle = styled.div`
  width: 480px;
  border: 5px solid;
  border-radius: 15px;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  row-gap: 10px;
  margin-right: 150px;

  button {
    width: 150px;
    height: 150px;
    background: #c8d8a1;
    border: 3px solid;
    cursor: pointer;
    font-size: 2rem;
  }
`;
