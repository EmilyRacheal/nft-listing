import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: calc(100vh - 180px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .herobox {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 900px) {
      flex-direction: column-reverse;

      .content {
        width: 100%;
        margin-top: 50px;
      }

      .bg-img {
        width: 100%;
      }
    }
  }

  .content {
    width: 50%;

    .head-text {
      width: 80%;
      font-size: 60px;
      color: var(--alturaTextColorOne);
    }

    .sub-text {
      width: 75%;
      color: var(--alturaTextColorTwo);
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      margin-top: 30px;
    }

    .action-btn {
      display: flex;
      margin-top: 30px;

      .btn {
        width: 170px;
      }

      .btn1 {
        width: 170px;
        margin-left: 20px;
      }
    }

    @media screen and (max-width: 900px) {
      .head-text {
        width: 100%;
      }
    }

    @media screen and (max-width: 600px) {
      .head-text {
        width: 100%;
        font-size: 35px;
      }

      .sub-text{
        width: 95%;
        font-size: 18px;
        line-height: 22px;
      }
    }
  }

  .bg-img {
    width: 40%;
    /* height: auto; */

    img {
      width: 100%;
      height: auto;
    }
  }
`;
