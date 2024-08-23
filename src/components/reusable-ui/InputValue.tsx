import styled from "styled-components";

type InputValueType = {
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type: "button" | "submit" | "reset" | "number";
  placeholder: string;
};

export default function InputValue({
  name,
  type = "button",
  value,
  onChange,
  placeholder,
}: InputValueType) {
  return (
    <InputValueStyled
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

const InputValueStyled = styled.input`
  padding: 10px;
  font-size: 30px;
  border-radius: 15px;
  margin-bottom: 30px;
  margin-top: 30px;
`;
