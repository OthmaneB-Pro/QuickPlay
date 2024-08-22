import styled from "styled-components";

type ButtonType = {
  onClick: () => void;
  label: string;
  Icon?: JSX.Element;
  className? : string;
};

export default function Button({ onClick, label, Icon, className }: ButtonType) {
  return (
    <ButtonStyled className={className} onClick={onClick}>
      {label}
      {Icon && Icon}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  color: white;
  background-color: #c8d8a1;
  border: none;
  padding: 15px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
`;
