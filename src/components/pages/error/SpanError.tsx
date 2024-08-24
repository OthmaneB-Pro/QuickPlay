import styled from "styled-components";

export default function SpanError() {
  return (
    <SpanErrorStyled>
      <span>404 Erreur</span>
      <span> La page que vous recherchez est indisponible...</span>
    </SpanErrorStyled>
  );
}

const SpanErrorStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  span {
    margin-bottom: 20px;
  }
`;
