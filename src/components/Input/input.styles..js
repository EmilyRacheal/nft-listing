import styled from "styled-components";

export const InputBox = styled.input`
  border: none;
  width: calc(100% - 40px);
  background-color: transparent;
  outline: none;
  color: var(--alturaTextColorTwo);

  ::placeholder {
    color: var(--alturaTextColorTwo);
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 0px 10px 10px;
  border: 1px solid var(--borderColor);
  border-radius: 7px;
`;
export const IconWrapper = styled.div`
  width: 40px;
`;
