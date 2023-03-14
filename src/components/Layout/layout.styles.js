import styled from "styled-components";

export const GeneralContainer = styled.div`
  background-color: ${({ bgColor }) => bgColor || "var(--alturaBg)"};
  width: 100%;
`;
