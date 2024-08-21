import styled from "styled-components";

export default function HomePage() {
  return (
    <HomePageStyled>
      <div className="container">
        <h1>QuickPlay</h1>
        <div className="image-container">
          <div className="image">
            <img src="/img/tictactoe.PNG" alt="TicTacToe" />
            <img src="/img/memory.webp" alt="Memory" />
          </div>
          <div className="image">
            <img src="/img/PierrePapierCiseaux.jpg" alt="PierrePapierCiseaux" />
            <img src="/img/guessTheNumber.webp" alt="GuessTheNumber" />
          </div>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.div`
  background: #e7d803;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 1200px;
    height: 600px;
    background-color: white;

    .image-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      row-gap: 20px;
    }
    img {
      width: 250px;
      height: 150px;
    }

    .image {
      grid-area: 2;
      width: 250px;
      padding: 10px;
    }
    p {
      text-align: justify;
    }
  }
`;
