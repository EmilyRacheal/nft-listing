import styled from "styled-components";

export const ButtonBox = styled.button`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "40px"};
  border-radius: 7px;
  padding: 0px 10px;
  background: ${({ bgColor }) => bgColor || "var(--alutraPrimary)"};
  border: 1px solid var(--alutraPrimary);
  /* border: none; */
  color: var(--alturaTextColorOne);
  font-weight: 600;
  outline: none;
  cursor: pointer;

  :hover{
    background-color: ${({ hoverBg }) => hoverBg || "transparent"};
    transition: all 0.5s;
  }

  
`;


