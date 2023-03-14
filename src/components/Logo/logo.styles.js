import styled from "styled-components";

export const LogoBox = styled.div`
  display: flex;
  align-items: center;

  .logo-box {
    width: 40px;
    height: 40px;
    border-radius: 6px;
    background-color: var(--logoColor);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 27px;
    color: var(--alturaTextColorOne);
    font-weight: 600;
  }

  .logo-text {
    color: var(--alturaTextColorOne);
    font-size: 26px;
    font-weight: 600;
    margin-left: 10px;
  }
`;
