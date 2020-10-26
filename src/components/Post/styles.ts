import styled from "styled-components";

export const Container = styled.div`
  > div {
    padding: 40px 0;
    border-bottom: 1px solid #70707070;

    h2 {
      color: #060055;
      font-size: 19px;
      font-weight: bold;
    }
    > div {
      margin-top: 5px;
      color: #838080;
      font-size: 14px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      > div {
        display: flex;
        img {
          margin-right: 5px;
        }
        a {
          color: #838080;
          font-weight: bold;
        }
      }
    }
  }
`;
