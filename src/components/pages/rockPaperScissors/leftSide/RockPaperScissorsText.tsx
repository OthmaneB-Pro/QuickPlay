import { useNavigate } from "react-router-dom";
import Button from "../../../reusable-ui/Button";
import { VscDebugRestart } from "react-icons/vsc";
import styled from "styled-components";
import ExplicationRock from "./ExplicationRock";

export default function RockPaperScissorsText() {
  const navigate = useNavigate();

  return (
    <TextStyled>
      <ExplicationRock />
      <Button
      className="button" onClick={() => navigate("/")} label="Revenir à l'accueil" />
      <Button
      className="button"
        onClick={() => window.location.reload()}
        label=""
        Icon={<VscDebugRestart />}
      />
    </TextStyled>
  );
}

const TextStyled = styled.div`
  margin-left: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  text-align: justify;

  .button{
    background-color: #d8c2a1;
  }
`;
