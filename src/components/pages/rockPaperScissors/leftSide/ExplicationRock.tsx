import styled from "styled-components";

export default function ExplicationRock() {
  return (
    <ExplicationRockStyled>
      <h1>Pierre Papier Ciseaux</h1>
      <p>
        Un jeu de hasard rapide et amusant où tu choisis entre Pierre, Papier ou
        Ciseaux pour battre ton adversaire. Pierre bat Ciseaux, Ciseaux battent
        Papier, et Papier bat Pierre !
      </p>
    </ExplicationRockStyled>
  );
}

const ExplicationRockStyled = styled.div`
  h1 {
    font-size: 36px;
    font-family: "Amatic SC", cursive;
    color: #fda085;
    text-align: center;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 30px;
    font-size: 18px;
    line-height: 1.6;
    color: #4a4a4a;
    text-align: center;
  }
`;
