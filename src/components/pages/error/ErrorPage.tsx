import { useNavigate } from "react-router";
import styled from "styled-components";
import Button from "../../reusable-ui/Button";
import SpanError from "./SpanError";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <BackgroundStyled>
      <div className="quickPlay">QuickPlay</div>
      <ErrorStyled>
        <SpanError />
        <Button label={"Retourner à l'accueil"} onClick={() => navigate("/")} />
      </ErrorStyled>
    </BackgroundStyled>
  );
}

const ErrorStyled = styled.div`
  width: 800px;
  padding: 50px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid black;
  font-size: 24px;
  margin-bottom: 85px;
  position: absolute;
  left: 27%;
  top: 40%;
  @media (max-width: 1600px) {
    left: 20%;
  }
`;

const BackgroundStyled = styled.div`
  background: #528a177e;
  height: 100vh;
  background-size: cover;

  .quickPlay {
    font-size: 80px;
    color: white;
    display: flex;
    justify-content: center;
    font-family: "Arial AC";
    text-decoration: underline;
    position: relative;
    top: 150px;
  }
`;
