import styled from "styled-components";

type ImageLinkType = {
  href: string;
  src: string;
  alt: string;
};

export default function ImageLink({ href, src, alt }: ImageLinkType) {
  return (
    <ImageLinkStyled>
      <a href={href}>
        <img src={src} alt={alt} />
      </a>
    </ImageLinkStyled>
  );
}

const ImageLinkStyled = styled.div`
  img {
    width: 300px;
    height: 180px;
    border-radius: 15px;
  }
`;
