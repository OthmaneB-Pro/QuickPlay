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
    font-size: 30px;
    font-family: "Amatic SC";
  }
  p {
    margin-bottom: 30px;
  }
`;
