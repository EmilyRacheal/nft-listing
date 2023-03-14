import styled from "styled-components";

export const NewestBox = styled.div`
  width: 100%;
  margin-bottom: 50px;

  .newest-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header-text {
      font-size: 32px;
      font-weight: 600;
      color: var(--alturaTextColorOne);
    }

    .header-btn {
      width: 120px;
    }

    @media screen and (max-width: 600px) {
      .header-text {
        font-size: 25px;
      }
    }
  }

  .newest-card-box {
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
