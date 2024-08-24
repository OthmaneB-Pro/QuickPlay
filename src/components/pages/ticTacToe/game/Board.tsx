import { useState } from "react";
import styled from "styled-components";

export default function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(false);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleClick = (index: number) => {
    if (board[index]) return;

    const newBoard = [...board];
    newBoard[index] = player ? "O" : "X";
    setBoard(newBoard);
    setPlayer(!player);

    const winner = checkWinner(newBoard);
    if (winner) {
      alert(`${winner} a gagné !`);
      setBoard(Array(9).fill(null));
      setPlayer(false);
    }
  };

  const checkWinner = (board: any) => {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  return (
    <BoardStyle>
      {board.map((value, index) => (
        <button
          key={index}
          className="board"
          onClick={() => handleClick(index)}
        >
          {value}
        </button>
      ))}
    </BoardStyle>
  );
}

const BoardStyle = styled.div`
  width: 480px;
  border: 5px solid #4a7c59;
  border-radius: 20px;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  margin-right: 50px;
  background-color: #f0f8ec;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);

  button {
    width: 140px;
    height: 140px;
    background: #c8d8a1;
    border: 3px solid #8fb996;
    cursor: pointer;
    font-size: 2rem;
    color: #4a7c59;
    border-radius: 10px;
    transition: transform 0.3s ease, background-color 0.3s ease;
  }

  button:hover {
    transform: scale(1.05);
    background-color: #b8cbb1;
  }
`;
