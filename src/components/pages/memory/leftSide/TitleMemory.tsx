import styled from "styled-components";

export default function TitleMemory() {
  return (
    <TitleMemoryStyled>
      <h1>Memory</h1>
      <p>
        Teste ta mémoire en retrouvant les paires de cartes identiques dans un
        tableau. Le jeu devient de plus en plus difficile à mesure que le nombre
        de cartes augmente.
      </p>
    </TitleMemoryStyled>
  );
}

const TitleMemoryStyled = styled.div`
  h1 {
    font-size: 36px;
    font-family: "Amatic SC";
  }
  p {
    margin-bottom: 30px;
  }
`;
