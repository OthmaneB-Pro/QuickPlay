import ImageLink from "../../../reusable-ui/ImageLink";
import { ImageValue } from "./imageValue";
import styled from "styled-components";

export default function ImageContainer() {
  return (
    <ImageContainerStyled>
      {ImageValue.map((image, index) => (
        <ImageLink key={index} {...image} />
      ))}
    </ImageContainerStyled>
  );
}

const ImageContainerStyled = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 15px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  img {
    border-radius: 15px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    width: 220px;
    height: 180px;
  }

  img:hover {
    transform: scale(1.05);
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.3);
  }
`;
