import { VscDebugRestart } from "react-icons/vsc";
import Button from "../../../reusable-ui/Button";
import TitleGuessNumber from "./TitleGuessNumber";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function LeftGuessNumber() {
  const navigate = useNavigate();

  return (
    <LeftGuessStyled>
      <TitleGuessNumber />
      <Button
        className="button"
        onClick={() => navigate("/")}
        label="Revenir à l'accueil"
      />
      <Button
        className="button"
        onClick={() => window.location.reload()}
        label=""
        Icon={<VscDebugRestart />}
      />
    </LeftGuessStyled>
  );
}
const LeftGuessStyled = styled.div`
  margin-left: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  text-align: justify;

  .button {
    background-color: #ca9288;
  }
`;
