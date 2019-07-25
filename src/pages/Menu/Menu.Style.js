import styled from "styled-components";
import menudesk from "../../images/menudesk.png";
import stack from "../../images/stack.png";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .menu {
    width: 100%;
    margin-left: 18%;
    height: 330px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    div {
      max-width: 50%;
      font-family: Bellefair;
      font-style: normal;
      font-weight: normal;
      font-size: 48px;
      line-height: 55px;
      letter-spacing: 0.15em;
      color: #d5c07c;
    }

    p {
      max-width: 40%;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 30px;
      letter-spacing: 0.15em;
      color: #124e3a;
    }
  }
`;

export const TopPic = styled.div`
  width: 100%;
  background-image: url(${menudesk});
  height: 490px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  p {
    width: 20%;
    font-family: Bellefair;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 55px;
    text-align: center;
    letter-spacing: 0.15em;
    align-items: center;
    color: #d5c07c;
    margin-left: 16%;
  }
`;

export const Single = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 180px;
  border-top: 1px solid #d2d2d2;
  border-bottom: 1px solid #d2d2d2;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  color: #124e3a;
`;

export const MenuList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .APPETIZERS:hover {
    background-image: url(${stack});
    background-repeat: no-repeat;
    background-size: cover;
    color: white
  }

  .show {
    width: 66%;
  }
  .tenanq {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 560px;
  }

  .tenanq h1 {
    font-family: Bellefair;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 55px;
    letter-spacing: 0.15em;
    color: #d5c07c;
    margin-bottom: 24px;
  }

  .tenanq p {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 0.15em;
    color: #124e3a;
    max-width: 70%;
    margin-bottom: 30px;
  }

  .list {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  .prod {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    width: 24%;
  }

  .prod div {
    background: #363636;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */
    height: auto;
    text-align: center;
    width: 76%;
    height: 56px;

    color: #ffffff;
  }
`;
