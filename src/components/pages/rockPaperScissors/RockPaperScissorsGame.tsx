import styled from "styled-components";
import { ButtonValue } from "./buttonImageValue";
import ButtonImage from "../../reusable-ui/ButtonImage";
import { useState } from "react";

export default function RockPaperScissorsGame() {
    const [image, setImage] = useState("")
    function getRandomInt(max : number) {
        return Math.floor(Math.random() * max);
      }

    const handleClick = (index : number) => {
        const Random = getRandomInt(3)
        if(Random === 0){setImage("/img/paper.PNG")}
        if(Random === 1){setImage("/img/scissors.PNG")}
        if(Random === 2){setImage("/img/rock.PNG")}
        
        if(Random === index){alert('egalite')}
        if(Random > index){alert('defaite')}
        if(Random < index){alert('Victoire')}

    }

  return (
    <div>
        <img src={image ? image : "/img/paper.PNG"} alt="Choix de l'adversaire" />
        <hr/>
    <RockPaperStyled>
      {ButtonValue.map(( img, index) => (
        <ButtonImage key={index} onClick={() => handleClick(index)} {...img} />
      ))}
    </RockPaperStyled>
    </div>
  );
}

const RockPaperStyled = styled.div`
  width: 370px;
  height: 70px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  margin-right: 150px;
  position: relative;
  top: 80px;
  right: 100px;
  img {
    width: 100%;
    cursor: pointer;
  }
  button {
    border: 1px solid black;
    background: none;
  }
`;
