import styled from "styled-components";

export const FooterBox = styled.footer`
  width: 100%;

  .footer-parent {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 750px) {
      flex-wrap: wrap;
    }
  }

  .footer-item {
    width: 23%;

    .item-1 {
      margin-top: 20px;
    }

    .item1-text {
      width: 90%;
      font-size: 17px;
      line-height: 24px;
      color: var(--alturaTextColorTwo);
    }

    .item-title {
      font-size: 24px;
      color: var(--alturaTextColorOne);
    }

    .item-list {
      display: flex;
      flex-direction: column;

      .list {
        color: var(--alturaTextColorTwo);
        margin-top: 20px;
        list-style: none;

        :hover {
          text-decoration: underline;
          text-decoration-color: var(--alutraPrimary);
          transition: all 0.5s;
        }
      }

      .sold-box {
        display: flex;
        align-items: center;
        margin-top: 22px;

        .sold-img {
          height: 60px;
          width: 60px;
          border-radius: 50%;

          @media screen and (max-width: 350px) {
            width: 35px;
            height: 35px;
          }
        }

        .sold-content {
          margin-left: 15px;

          .name {
            color: var(--alturaTextColorOne);
            font-size: 16px;
            font-weight: 600;
          }

          .bid {
            color: var(--alturaTextColorTwo);
            font-size: 15px;
            margin: 10px 0px;
          }

          .price {
            color: var(--alutraPrimary);
            font-size: 16px;
            font-weight: 600;
            margin-top: 7px;
          }

          @media screen and (max-width: 550px) {
            .name {
              font-size: 15px;
            }

            .price{
              font-size: 15px;
            }
          }
        }
      }
    }

    @media screen and (max-width: 750px) {
      width: 48%;
      margin-top: 25px;
    }

    @media screen and (max-width: 600px) {
      .list {
        font-size: 15px;
        margin-top: 14px !important;
      }
    }
  }

  .footer-cc {
    display: flex;
    padding-top: 30px;
    margin-top: 50px;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid var(--borderColor);

    .cc-text-box {
      display: flex;
    }
    .cc-text {
      color: var(--alturaTextColorTwo);
      padding-right: 20px;
      border-right: 1px solid var(--borderColor);
    }

    .cc-menu {
      padding-left: 15px;
      color: var(--alturaTextColorTwo);
    }

    .cc-menu-box {
      display: flex;
    }

    @media screen and (max-width: 750px) {
      flex-direction: column-reverse;

      .cc-text-box {
        margin-top: 20px;
      }
    }

    @media screen and (max-width: 550px) {
      .cc-text-box {
        flex-direction: column-reverse;
      }

      .cc-menu-box {
        margin: 0px 0px 20px 0px;
        justify-content: center;
      }

      .cc-text {
        padding-right: 0px;
        border: none;
        text-align: center;
      }
    }
  }

  .footer-socials {
    display: flex;

    .social {
      margin: 0px 10px;
    }
  }
`;
