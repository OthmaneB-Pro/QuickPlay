import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../reusable-ui/Button";
import InputValue from "../../reusable-ui/InputValue";
import { getRandomInt } from "../../../utils/GameFunction";

export default function GameGuessNumber() {
  const [guessNumber, setGuessNumber] = useState(0);
  const [valueNumber, setValueNumber] = useState(0);
  const [messageResult, setMessageResult] = useState("");

  useEffect(() => {
    const randomNumber = getRandomInt(1000);
    setGuessNumber(randomNumber);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (valueNumber > guessNumber) {
      setMessageResult("Le nombre est plus petit");
    } else if (valueNumber < guessNumber) {
      setMessageResult("Le nombre est plus grand");
    } else {
      setMessageResult("Victoire ! Vous avez trouvé le bon nombre");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setValueNumber(value);
  };

  return (
    <GameStyled>
      <h1>{messageResult}</h1>
      <form onSubmit={handleSubmit}>
        <InputValue
          name="valuenumber"
          type="number"
          value={valueNumber}
          onChange={handleChange}
          placeholder="Trouve le nombre"
        />
        <Button className="submit-button" label="Valider" type="submit" />
      </form>
    </GameStyled>
  );
}

const GameStyled = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;

  h1 {
    margin-bottom: 20px;
    font-size: 1.5rem;
    color: #773c35;
  }

  .submit-button {
    width: 100%;
    background: #ca9288;
    color: white;
    font-size: 1rem;
    border-radius: 10px;
    margin-top: 10px;
    padding: 10px 0;
    transition: background-color 0.3s ease;
  }

  .submit-button:hover {
    background-color: #b08177;
  }
`;
