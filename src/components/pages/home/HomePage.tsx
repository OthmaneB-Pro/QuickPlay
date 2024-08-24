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
  background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 800px;
    height: 550px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    backdrop-filter: blur(10px);
    padding: 30px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .container:hover {
    transform: scale(1.02);
    box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.3);
  }
`;
