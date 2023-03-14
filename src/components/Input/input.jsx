import React from "react";
import { InputBox, InputWrapper, IconWrapper } from "./input.styles.";

const Input = ({ placeholder, type, onChange, children }) => {
  return (
    <InputWrapper>
      <InputBox placeholder={placeholder} type={type} onChange={onChange} />
      <IconWrapper>{children}</IconWrapper>
    </InputWrapper>
  );
};

export default Input;
