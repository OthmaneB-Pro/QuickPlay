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
    font-size: 40px;
    font-family: "Amatic SC";
    color: #285f6b;
    text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.1);
  }
  p {
    margin-bottom: 30px;
    font-size: 1.2rem;
    color: #4a4a4a;
  }
`;
