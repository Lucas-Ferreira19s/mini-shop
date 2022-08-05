import styled from "styled-components";

export const container = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  padding: 60px 40px;
  @media (max-width: 770px) {
    display: block;
    padding: 0;
    padding-top: 70px;
  }
`;

export const right = styled.section`
  .product {
    padding: 0 30px;
    @media (max-width: 770px) {
      padding: 0;
    }
    img {
      width: 100%;
      border-radius: 20px;
    }
    .slide {
      display: flex;
      align-items: center;
      position: relative;
      z-index: 0;
    }
    .pass {
      width: 40px;
      height: 40px;
      padding: 8px;
      position: absolute;
      background-color: white;
      cursor: pointer;
      display: none;
      @media (max-width: 770px){
        display: block;
      }
      &:first-child{
        right: 0;
      }
    }
  }
  .small {
    display: grid;
    grid-column-gap: 25px;
    padding: 10px 30px;
    grid-template-columns: repeat(4, 1fr);
    @media (max-width: 770px) {
      display: none;
    }
    img {
      width: 80px;
      height: 85px;
      border-radius: 10px;
      cursor: pointer;
      &:hover {
        border: 3px solid hsl(26, 100%, 55%);
      }
    }
  }
`;

export const left = styled.section`
  padding: 40px 0;
  @media (max-width: 770px) {
    padding: 0 30px;
    padding-top: 50px;
  }
  div {
    padding-bottom: 20px;
  }
  h5 {
    font-size: 16px;
    color: hsl(26, 100%, 55%);
  }
  h1 {
    font-size: 40px;
    padding: 20px 0;
  }
  p {
    font-size: 16px;
    color: hsl(219, 9%, 45%);
  }
  .price {
    font-weight: 700;
    color: hsl(220, 13%, 13%);
    font-size: 24px;
    span {
      background-color: hsl(26, 100%, 55%, 0.3);
      color: hsl(26, 100%, 55%);
      font-weight: 700;
      font-size: 15px;
      border-radius: 7px;
      padding: 2px 3px;
    }
  }
  .priceAgo {
    text-decoration: line-through;
  }
  .qtPrice {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    padding: 20px;
    @media (max-width: 770px) {
      grid-template-rows: 1fr 1fr;
      gap: 20px;
      grid-template-columns: none;
      padding: 0;
    }
    .controlPrice {
      padding: 0;
      @media (max-width: 770px) {
        width: 100%;
      }
    }
    span {
      background-color: hsl(223, 64%, 98%);
      color: hsl(26, 100%, 55%);
      padding: 15px 20px;
      font-weight: 700;
      cursor: pointer;
      user-select: none;
    }
    .quatidade {
      color: hsl(220, 13%, 13%);
      cursor: text;
    }
    button {
      background-color: hsl(26, 100%, 55%);
      color: hsl(223, 64%, 98%);
      font-weight: 400;
      font-size: 16px;
      border: none;
      border-radius: 7px;
      padding: 15px 20px;
      cursor: pointer;
      i {
        font-size: 15px;
        margin-right: 5px;
        font-weight: 400;
      }
    }
  }
`;
