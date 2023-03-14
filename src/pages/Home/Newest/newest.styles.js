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

      @media screen and (max-width: 600px) {
        width: 90px;
      }
    }

    @media screen and (max-width: 600px) {
      .header-text {
        font-size: 1.5rem;
      }
    }
  }

  .newest-card-box {
    margin: 30px 0px;
    grid-gap: 15px;
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-items: center;
    

    @media screen and (max-width: 1200px) {
      grid-template-columns: auto auto auto;
    }

    @media screen and (max-width: 800px) {
      grid-template-columns: auto auto;
    }

    @media screen and (max-width: 500px) {
      grid-template-columns: auto;
    }

  }
`;
