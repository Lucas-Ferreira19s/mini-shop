import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  background-color: hsl(0, 0%, 100%);
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  border-bottom: 1px solid hsl(220, 14%, 75%);
  padding: 0 10px;
  position: relative;
  z-index: 1;
  
  @media (max-width: 770px) {
    height: 65px;
    position: fixed;
    border: none;
    background-color: hsl(0, 0%, 100%);
  }
  .logoMenu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
`;

export const logoIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 180px;
  .menuMobile {
    width: 16px;
    height: 15px;
    display: none;
    @media (max-width: 770px) {
      display: block;
    }
  }
  .logo {
    width: 150px;
    height: 25px;
  }
`;

export const Menu = styled.nav`
 transition: all ease .3s;
  @media (max-width: 770px) {
    position: fixed;
    height: 100vh;
    width: 55vw;
    top: 0;
    left: ${props => `${props.left}vw`};
    background-color: hsl(223, 64%, 98%);
  }
  
  ul {
    display: flex;
    justify-content: space-around;
    width: 470px;
    list-style: none;
    font-size: 16px;
    color: hsl(219, 9%, 45%);
    font-weight: 400;
    @media (max-width: 770px) {
      flex-direction: column;
      padding: 30px;
      width: 100%;
    }
    li {
      cursor: pointer;
      padding: 38px 0;
      transition: ease all 0.2s;
      &:hover {
        border-bottom: 3px solid hsl(26, 100%, 55%);
      }
      @media (max-width: 770px) {
        padding: 20px 0;
        color: hsl(220, 13%, 13%);
        font-weight: 700;
        width: 30%;
        &:hover {
          border-bottom: none;
        }
      }
    }
  }
`;

export const icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 6rem;
  position: relative;
  img {
    cursor: pointer;
  }
  span {
    font-size: 12px;
    font-weight: 700;
    background-color: hsl(26, 100%, 55%);
    color: hsl(223, 64%, 98%);
    padding: 2px 4px;
    border-radius: 4px;
    position: absolute;
    top: 2px;
    left: 17px;
  }
  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transition: all ease 0.3s;
    &:hover {
      border: 3px solid hsl(26, 100%, 55%);
    }
  }
`;

export const cartMain = styled.div`
  display: grid;
  grid-template-rows: 45px 1fr;
  position: absolute;
  z-index: 1;
  top: 78px;
  right: 10px;
  background-color: hsl(0, 0%, 100%);
  width: 300px;
  height: 200px;
  border-radius: 10px;
  box-shadow: -10px 11px 17px 2px rgba(0, 0, 0, 0.49);
  display: ${props=> props.cart == false && 'none'};
  .cart {
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 700;
    border-bottom: 1px solid hsl(0, 0%, 0%);
  }
  .small {
    img {
      border-radius: 5px;
      width: 50px;
      height: 50px;
    }
  }
  .cartGrid {
    padding: 10px 10px 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
      cursor: pointer;
    }
    p {
      font-size: 15px;
      .price {
        font-weight: 700;
      }
    }
  }
  .empty {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 16px;
      font-weight: 700;
      color: hsl(219, 9%, 45%);
    }
  }
  button {
    cursor: pointer;
    font-size: 15px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    background-color: hsl(26, 100%, 55%);
    color: hsl(25, 100%, 94%);
    padding: 15px;
    margin: 12px;
  }
`;
