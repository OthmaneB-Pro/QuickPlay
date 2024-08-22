import styled from "styled-components";

export default function TitleHome() {
  return <TitleHomeStyled>QuickPlay</TitleHomeStyled>;
}

const TitleHomeStyled = styled.h1`
  font-size: 40px;
  display: flex;
  justify-content: center;
  font-family: "Amatic SC";
`;
