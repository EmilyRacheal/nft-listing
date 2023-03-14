import styled from "styled-components";

export const SModalOverlay = styled.div`
  background-color: #13131d;
  height: 100vh;
  left: 0;
  opacity: 0.9;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 500;
`;

export const SModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  left: 0;
  outline: 0;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 10%;
  width: 100%;
  z-index: 1000;

  @media screen and (max-width: 600px) {
    top: 15%;
  }
`;

export const SModal = styled.div`
  border-radius: 0.25rem;
  margin: 1.875rem;
  width: 600px;
  position: relative;
  z-index: 100;
  background-color: var(--modalBg);
  overflow-y: scroll;
  height: 600px;

  .header-title {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--borderColor);
    padding: 15px;
  }

  .title {
    color: var(--alturaTextColorOne);
    font-size: 19px;
    width: calc(100% - 80px);
    font-weight: 600;
  }

  .icon {
    cursor: pointer;
  }

  .modal-content {
    padding: 15px 20px;
  }

  .modal-img {
    width: 100%;
    height: 450px;
  }

  .bid-list {
    display: flex;
    justify-content: space-around;
    margin-top: 25px;
    position: relative;
    /* margin-bottom: 15px; */

    .bid-img-box {
      display: flex;
      align-items: center;
    }

    .bid-text {
      margin-left: -135%;
      font-size: 15px;
      color: var(--alturaTextColorTwo);
    }
  }

  .card-content {
    padding: 15px 0px;
    .name {
      color: var(--alturaTextColorOne);
      font-size: 20px;
      font-weight: 600;
      margin-top: 20px;
    }

    .bid {
      color: var(--alturaTextColorTwo);
      font-size: 16px;
      margin: 10px 0px;
    }

    .price-box {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-content: center;
    }

    .price {
      color: var(--alutraPrimary);
      font-size: 18px;
      font-weight: 600;
    }

    @media screen and (max-width: 600px) {
      .bid {
        word-wrap: break-word;
      }
    }
  }

  .description {
    color: var(--alturaTextColorTwo);
    font-size: 16px;
    margin-top: 10px;
    line-height: 20px;
    font-weight: 400;
  }

  .modal-footer {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    border-top: 1px solid var(--borderColor);
    padding: 15px;
    margin-top: 10px;
  }

  @media screen and (max-width: 600px) {
    width: 95%;
    margin: 0px;
    height: 550px;

    .modal-img{
      height: 300px;
    }
  }
`;

export const BidderImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  position: absolute;
  left: ${({ left }) => left || "20px"};
`;
