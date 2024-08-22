import styled from "styled-components";
import { VscDebugRestart } from "react-icons/vsc";
import Board from "./game/Board";

export default function TicTacToePage() {
  return (
    <TicTacToeStyled>
      <div className="container">
        <div className="text">
          <h1>Tic Tac Toe</h1>
          <p>
            Un jeu de stratégie classique où deux joueurs s'affrontent pour
            aligner trois symboles identiques (X ou O) sur une grille de 3x3.
            Simple à jouer, mais complexe à maîtriser !
          </p>
          <button>Revenir à l'accueil</button>
          <button onClick={() => window.location.reload()}>
            <VscDebugRestart />
          </button>
        </div>
        <Board />
      </div>
    </TicTacToeStyled>
  );
}

const TicTacToeStyled = styled.div`
  background: #e7d803;
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

  h1 {
    font-size: 40px;
  }
  p {
    margin-bottom: 30px;
  }
  .text {
    margin-left: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    text-align: justify;

    button {
      color: white;
      border: 3px solid black;
      background-color: #e7d803;
      padding: 10px;
      border-radius: 5px;
      font-size: 16px;
      cursor: pointer;
      margin-bottom: 20px;
    }
  }
`;
