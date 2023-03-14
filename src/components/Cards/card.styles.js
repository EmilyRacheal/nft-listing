import styled from "styled-components";

export const CardBox = styled.div`
  padding: 7px;
  background-color: var(--alturaSecondary);
  width: 18%;
  max-width: 300px;
  min-width: 270px;
  border-radius: 12px;
  margin-top: 20px;

  .card-img {
    width: 100%;
    height: 250px;

    .img {
      width: 100%;
      border-radius: 12px;
      height: 100%;
    }
  }

  .bid-list {
    display: flex;
    justify-content: space-around;
    margin-top: 25px;
    position: relative;
    left: 10px;
    /* margin-bottom: 15px; */

    .bid-img-box {
      display: flex;
      align-items: center;
    }

    .bid-text {
      margin-left: 50px;
      font-size: 13px;
      color: var(--alturaTextColorTwo);
    }
  }

  .card-content {
    padding: 13px;

    .name {
      color: var(--alturaTextColorOne);
      font-size: 18px;
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
      font-size: 16px;
      font-weight: 600;
    }
  }

  @media screen and (max-width: 550px){
    max-width: 100%;
    width: 99%;
    min-width: 90%;
  }
`;

export const BidderImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: absolute;
  left: ${({ left }) => left || "20px"};
`;
