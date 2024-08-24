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
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  text-align: justify;

  .button {
    margin-top: 20px;
    background-color: #ca9288;
    color: white;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: 1rem;
    transition: background-color 0.3s ease;
  }

  .button:hover {
    background-color: #b08177;
  }
`;
