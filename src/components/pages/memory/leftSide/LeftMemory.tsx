import { VscDebugRestart } from "react-icons/vsc";
import Button from "../../../reusable-ui/Button";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TitleMemory from "./TitleMemory";

export default function LeftMemory() {
  const navigate = useNavigate();

  return (
    <LeftMemoryStyled>
      <TitleMemory />
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
    </LeftMemoryStyled>
  );
}


const LeftMemoryStyled = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  text-align: justify;

  .button {
    margin-top: 20px;
    background-color: #5bc3e2;
    color: white;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: 1rem;
    transition: background-color 0.3s ease;
  }

  .button:hover {
    background-color: #4aa6c1;
  }
`;