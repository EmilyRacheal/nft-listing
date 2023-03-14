import styled from "styled-components";

export const MobileMenuBox = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #13131d70;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;

  .menu-body {
    border-radius: 0.25rem;
    height: 400px;
    padding: 15px;
    width: 92%;
    margin-top: 15px;
    background-color: var(--modalBg);
  }

  .close-btn {
    display: flex;
    justify-content: flex-end;
  }

  .menu-list {
    display: flex;
    flex-direction: column;
  }

  .menu {
    color: var(--alturaTextColorTwo);
    margin-top: 15px;
    list-style: none;
    font-weight: 500px;
  }

  .input-pack {
    margin-top: 15px;
    width: 100%;
    /* max-width: 300px; */
  }

  .connect-btn {
    width: 99%;
    margin-top: 15px;
  }

  .icon-pack {
    display: flex;
    grid-column-gap: 10px;
    margin-top: 15px;
  }
`;
