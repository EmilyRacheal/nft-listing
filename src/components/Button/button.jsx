import React from "react";
import { ButtonBox } from "./button.styles";

const Button = ({ width, height, bgColor, text, onClick, disabled }) => {
  return (
    <ButtonBox
      width={width}
      height={height}
      bgColor={bgColor}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </ButtonBox>
  );
};

export default Button;
