import styled from "styled-components";

export default function HomePage() {
  return (
    <HomePageStyled>
      <div className="container">
        <h1>QuickPlay</h1>
        <div className="image-container">
          <div>
          <a href="/"><img src="/img/tictactoe.PNG" alt="TicTacToe" /></a> 
          </div>
          <div>
            <a href="/"><img src="/img/memory.webp" alt="Memory" /></a> 
          </div>
          <div>
           <a href="/"><img src="/img/PierrePapierCiseaux.jpg" alt="PierrePapierCiseaux" /></a> 
          </div>
          <div>
           <a href="/"><img src="/img/guessTheNumber.webp" alt="GuessTheNumber" /></a> 
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
    border-radius: 15px;
    border: 2px solid;
    background-color: white;

    h1{
        font-size: 40px;
        display: flex;
        justify-content: center;
    }

    .image-container {
      width: 650px;
      margin-left: 280px;
      margin-top: 80px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      row-gap: 20px;
    }
    img {
      width: 300px;
      height: 180px;
      border-radius: 15px;
    }
    p {
      text-align: justify;
    }
  }
`;
