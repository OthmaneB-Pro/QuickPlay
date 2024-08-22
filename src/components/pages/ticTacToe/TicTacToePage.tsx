import styled from "styled-components";

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
          <button>Recommencer</button>
        </div>

        <div className="container-board">
          <button className="board"></button>
          <button className="board"></button>
          <button className="board"></button>
          <button className="board"></button>
          <button className="board"></button>
          <button className="board"></button>
          <button className="board"></button>
          <button className="board"></button>
          <button className="board"></button>
        </div>
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
  .text{
    margin-left: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    text-align: justify;
  }
  .container-board {
    width: 480px;
    border: 5px solid;
    border-radius: 15px;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    row-gap: 10px;
    margin-right: 150px;

    .board {
      width: 150px;
      height: 150px;
      background: blue;
      border: 3px solid;
    }
  }
`;
