import ImageLink from "../../../reusable-ui/ImageLink";
import { ImageValue } from "./imageValue";
import styled from "styled-components";

export default function ImageContainer() {
  return (
    <ImageContainerStyled>
      {ImageValue.map((image, index) => (
        <ImageLink
          key={index}
          href={image.href}
          src={image.src}
          alt={image.alt}
        />
      ))}
    </ImageContainerStyled>
  );
}

const ImageContainerStyled = styled.div`
  width: 650px;
  margin-left: 280px;
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 20px;
`;
