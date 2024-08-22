import styled from "styled-components";
import TitleHome from "./TitleHome";
import ImageContainer from "./imageContainer/ImageContainer";

export default function HomePage() {
  return (
    <HomePageStyled>
      <div className="container">
        <TitleHome />
        <ImageContainer />
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.div`
  background: #e7d803;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 1200px;
    height: 600px;
    border-radius: 15px;
    border: 2px solid;
    background-color: white;
  }
`;
