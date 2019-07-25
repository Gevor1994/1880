import styled from "styled-components";
import staff from "../../images/staff.png";
import staff2 from "../../images/staff2.png";
import staff1 from "../../images/staff1.png";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .wrappp {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  }
`;

export const TopBar = styled.div`
  width: 100%;
  height: 790px;
  background-image: url(${staff});
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  background: cover;
  justify-content: flex-end;
  align-items: center;

  img {
    width: 400px;
  }

  .icon_style {
    animation: slideDown 1s infinite;
  }

  @keyframes slideDown {
    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(6px);
    }
  }
  .text {
    max-width: 300px;
    font-family: Bellefair;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    display: flex;
    align-items: flex-end;
    text-align: center;
    letter-spacing: 0.15em;
    margin-bottom: 53px;
    color: #d5c07c;
  }
  .style_p {
    font-family: Roboto;
    font-size: 10px;
    line-height: 12px;
    text-align: center;
    letter-spacing: 0.15em;
    color: white;
    margin-top: 0px;
  }
  i {
    margin: auto;
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 300%;
    color: white;
  }
`;

export const MiddleBar = styled.div`
  max-width: 100%;
  height: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${staff1}) no-repeat right center;
  background-attachment: fixed;

  .middle {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .high_shript {
    font-family: Bellefair;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    text-align: center;
    letter-spacing: 0.15em;
    color: #d5c07c;
    margin: 0;
  }

  .small_shrift {
    max-width: 700px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 0.15em;
    color: #124e3a;
    margin-right: 100px;
    line-height: 1.5em;
  }
  img {
    width: 35%;
    height: 350px;
    background-color: Transparent;
  }
`;

export const BottomBar = styled.div`
  width: 100%;
  height: 600px;
  background-image: url(${staff2});
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  background: cover;
`;

export const WrappAll = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 47%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 120px;
  padding-bottom: 60px;
`;

export const FirstBox = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 14px;
`;

export const SecondBox = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: row;

  .wrapper {
    width: 48%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }

  .wrapper p {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 0.15em;
    color: #124e3a;
  }

  .wrapper img {
    width: 78%;
    height: 400px;
  }

  .img_wrap {
    width: 50%;
    height: 567px;
  }

  .img_wrap img{
    width: 100%;
    height: 567px;
  }

  .general {
    width: 100%;
    display: flex;
    max-height: 567px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ColumnLeft = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  div {
    width: 100%;
  }

  .combainer {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  p {
    max-width: 90%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 0.15em;
    color: #124e3a;
  }

  .img_style1 {
    width: 100%;
    margin-bottom: 16px;
    height: 480px;
  }

  .img_style2 {
    width: 70%;
    margin-bottom: 16px;
    height: 334px;
  }
`;

export const ColumnRight = styled.div`
    width: 58%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

h1{
    max-width: 70%;
    font-family: Bellefair;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 55px;
    letter-spacing: 0.15em;
    color: #D5C07C;
    margin-top: 80px;
    margin:bottom: 22px;
}

p{
    max-width: 80%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 0.15em;
    color: #124E3A;
    margin-bottom: 80px;
}

.img_style3{
    max-width: 100%;
    max-height: 649px;

}
`;
