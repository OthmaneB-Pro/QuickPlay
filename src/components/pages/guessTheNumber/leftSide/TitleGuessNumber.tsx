import styled from "styled-components";

export default function TitleGuessNumber() {
  return (
    <TitleGuessNumberStyled>
      <h1>Devine le Nombre</h1>
      <p>
        Devine le nombre caché généré par l'ordinateur. Avec chaque tentative,
        reçois un indice pour savoir si ton nombre est trop haut ou trop bas,
        jusqu'à ce que tu trouves la bonne réponse.
      </p>
    </TitleGuessNumberStyled>
  );
}

const TitleGuessNumberStyled = styled.div`
  h1 {
    font-size: 36px;
    font-family: "Amatic SC";
  }
  p {
    margin-bottom: 30px;
  }
`;
