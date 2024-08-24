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
    width: 170px;
    font-size: 40px;
    font-family: "Amatic SC";
    color: #773c35;
    text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.1);
  }
  p {
    margin-bottom: 30px;
    font-size: 1.2rem;
    color: #4a4a4a;
  }
`;
