import styled from "styled-components";

export default function Explication() {
  return (
    <ExplicationStyled>
      <h1>Tic Tac Toe</h1>
      <p>
        Un jeu de stratégie classique où deux joueurs s'affrontent pour aligner
        trois symboles identiques (X ou O) sur une grille de 3x3. Simple à
        jouer, mais complexe à maîtriser !
      </p>
    </ExplicationStyled>
  );
}
const ExplicationStyled = styled.div`
  h1 {
    font-size: 40px;
    font-family: "Amatic SC";
    color: #4a7c59;
    text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.1);
  }
  p {
    margin-bottom: 30px;
    font-size: 1.2rem;
    color: #4a4a4a;
  }
`;
