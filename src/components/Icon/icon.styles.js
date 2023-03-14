import styled from "styled-components";

export const IconWrapper = styled.div`
  width: ${({ border }) => (border ? "38px" : "")};
  height: ${({ border }) => (border ? "38px" : "")};
  border: ${({ border }) => (border ? "0.5px solid var(--borderColor)" : "")};
  border-radius: ${({ border }) => (border ? "50%" : "")};
  display: ${({ border }) => (border ? "flex" : "")};
  justify-content: ${({ border }) => (border ? "center" : "")};
  align-items: ${({ border }) => (border ? "center" : "")};

  :hover {
    background-color: var(--alutraPrimary);
    transition: all 0.5s;
  }
`;
