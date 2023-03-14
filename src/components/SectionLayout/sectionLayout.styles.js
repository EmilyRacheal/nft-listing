import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 50px 0px;
  border-top: ${({ border }) => (border ? "1px solid var(--borderColor)" : "")};
  background-color: ${({ bgColor }) => bgColor || "transparent"};

  .section-parent {
    width: 90%;
    max-width: 1500px;
  }
`;
