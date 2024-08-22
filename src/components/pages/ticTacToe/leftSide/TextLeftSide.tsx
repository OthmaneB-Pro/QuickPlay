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
  margin-left: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  text-align: justify;
`;
