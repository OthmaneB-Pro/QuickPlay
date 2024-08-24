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
      <div className="button-group">
        <Button
          className="button"
          onClick={() => navigate("/")}
          label="Revenir à l'accueil"
        />
        <Button
          className="button reload-button"
          onClick={() => window.location.reload()}
          label=""
          Icon={<VscDebugRestart />}
        />
      </div>
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

  .button-group {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }

  .button {
    background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    color: white;
    font-weight: bold;
    font-size: 16px;
    transition: transform 0.2s, box-shadow 0.2s;
    cursor: pointer;
  }

  .button:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  }

  .reload-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    padding: 0;
  }
`;
