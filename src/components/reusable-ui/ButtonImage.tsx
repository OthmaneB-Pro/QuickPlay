import styled from "styled-components";

type ButtonImageType = {
  onClick: () => void;
  src: string;
  alt: string;
  label: string;
};

export default function ButtonImage({
  onClick,
  src,
  alt,
  label,
}: ButtonImageType) {
  return (
    <ButtonImageStyled onClick={onClick}>
      <img src={src} alt={alt} />
      {label}
    </ButtonImageStyled>
  );
}

const ButtonImageStyled = styled.button``;
