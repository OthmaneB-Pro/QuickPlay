import styled from "styled-components";

export default function TitleHome() {
  return <TitleHomeStyled>QuickPlay</TitleHomeStyled>;
}

const TitleHomeStyled = styled.h1`
  font-size: 50px;
  font-family: "Amatic SC", cursive;
  color: #ff6f61;
  text-align: center;
  margin-bottom: 20px;
  text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
