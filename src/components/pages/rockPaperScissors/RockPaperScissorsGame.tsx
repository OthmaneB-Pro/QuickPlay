import styled from "styled-components";
import { ButtonValue } from "./buttonImageValue";
import ButtonImage from "../../reusable-ui/ButtonImage";
import { useState } from "react";
import { getRandomInt } from "../../../utils/GameFunction";

export default function RockPaperScissorsGame() {
  const [image, setImage] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (index: number) => {
    const random = getRandomInt(3);
    const opponentImage = ButtonValue[random].src;
    setImage(opponentImage);

    if (random === index) {
      setResult("Égalité");
    } else if (
      (index === 0 && random === 1) ||
      (index === 1 && random === 2) ||
      (index === 2 && random === 0)
    ) {
      setResult("Défaite");
    } else {
      setResult("Victoire");
    }
  };

  return (
    <Wrapper>
      <img
        src={image || "/img/paper.PNG"}
        alt="Choix de l'adversaire"
        className="opponent-choice"
      />
      <h2>{result}</h2>
      <hr />
      <RockPaperStyled>
        {ButtonValue.map((img, index) => (
          <ButtonImage
            key={index}
            onClick={() => handleClick(index)}
            {...img}
          />
        ))}
      </RockPaperStyled>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .opponent-choice {
    width: 120px;
    margin-bottom: 20px;
    transform: rotate(180deg);  
  }
  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  hr {
    width: 100%;
    margin-bottom: 20px;
  }
`;
const RockPaperStyled = styled.div`
  width: 370px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  margin-right: 20px;
  img {
    width: 75%;
    cursor: pointer;
  }
  button {
    border: 1px solid black;
    background: none;
    padding: 0;
  }
`;
