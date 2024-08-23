import { VscDebugRestart } from "react-icons/vsc";
import Button from "../../../reusable-ui/Button";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TitleMemory from "./TitleMemory";

export default function LeftMemory() {
  const navigate = useNavigate();

  return (
    <LeftMemoryStyled>
        <TitleMemory/>
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
  margin-left: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  text-align: justify;

  .button {
    background-color: #5bc3e2;
  }
`;
