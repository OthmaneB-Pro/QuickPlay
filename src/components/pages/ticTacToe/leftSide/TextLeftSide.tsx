import { useNavigate } from "react-router-dom";
import Button from "../../../reusable-ui/Button";
import { VscDebugRestart } from "react-icons/vsc";
import styled from "styled-components";
import Explication from "./Explication";

export default function TextLeftSide() {
  const navigate = useNavigate();

  return (
    <TextStyled>
      <Explication />
      <Button onClick={() => navigate("/")} label="Revenir à l'accueil" />
      <Button
        onClick={() => window.location.reload()}
        label=""
        Icon={<VscDebugRestart />}
      />
    </TextStyled>
  );
}

const TextStyled = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  text-align: justify;

  button {
    margin-top: 20px;
    background-color: #8fb996;
    color: white;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: 1rem;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #729d7c;
  }
`;
