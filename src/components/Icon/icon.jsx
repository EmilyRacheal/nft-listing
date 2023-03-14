import React from "react";
import { IconWrapper } from "./icon.styles";

const Icon = ({ border, children }) => {
  return <IconWrapper border={border}>{children}</IconWrapper>;
};

export default Icon;
