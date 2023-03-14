import styled from "styled-components";

export const NavbarBox = styled.nav`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 17px 0px;
  position: sticky;
  top: 0;
  z-index: 999;
  width: 100%;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--borderColor);
  transition: 0.5s;

  .nav-parent {
    width: 90%;
    max-width: 1500px;
    display: flex;
    justify-content: space-between;
  }

  .nav-menu {
    display: flex;
    align-items: center;

    .logo {
      padding-right: 25px;
      border-right: 1px solid var(--borderColor);
    }

    .menu-list {
      display: flex;
    }

    .menu {
      color: var(--alturaTextColorTwo);
      margin-left: 15px;
      list-style: none;
      font-weight: 500px;
    }

    @media screen and (max-width: 800px) {
      .menu-list {
        display: none;
      }
    }
  }

  .search {
    display: flex;
    align-items: center;

    .input-box {
      /* width: 30%; */
      /* max-width: 300px; */
    }

    .connect-btn {
      width: 150px;
      margin-left: 15px;
    }

    .icon-box {
      margin-left: 15px;
    }
  }

  .menu-icon {
    display: none;
  }

  @media screen and (max-width: 1000px) {
    .input-box {
      display: none;
    }
  }

  @media screen and (max-width: 800px) {
    .search {
      display: none;
    }

    .menu-list {
      display: none;
    }

    .menu-icon {
      display: flex;
    }
  }
`;
