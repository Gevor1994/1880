import styled from "styled-components";
import HomeDesktop from "../../images/HomeDesktop.png";
import menuback from "../../images/menuback.png";
import { Button } from 'antd'

export const Desktop = styled.div`
  width: 100%;
  height: 840px;
  background-image: url(${HomeDesktop});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

.btn:hover{
  color: black ;
  background: white;
}


  .hope {
    text-decoration: none;
    color: white;
  }
  .pic {
    margin: auto;
    width: 212px;
    height: 109px;
    margin-bottom: 32px;
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
`;

export const StyleButton = styled(Button)`
  width: 196px;
  height: 32px;
  color: white;
  background: cover;
  margin: auto;
  margin-top: 0px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  background-color: Transparent;
  margin-bottom: 256px;

`;

export const MiddleBar = styled.div`
  width: 100%;
  height: 328px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;

  .high_shript {
    font-family: Bellefair;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 55px;
    text-align: center;
    letter-spacing: 0.15em;
    color: #d5c07c;
  }

  .small_shrift {
    font-family: Bellefair;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.15em;
    color: #124e3a;
  }
  img {
    width: 40%;
    height: auto;
    margin-top: 0px;
    background-color: Transparent;
  }
`;

export const Events = styled.div`
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(34, 34, 34, 0.4);
  margin: auto;
  p {
    font-family: Bellefair;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    text-align: center;
    letter-spacing: 0.15em;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .eventdate {
    font-family: Bellefair;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.15em;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  div {
    font-family: Bellefair;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    letter-spacing: 0.15em;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
export const Wrapper = styled.div`
 width: 100%;
  .alice-carousel__wrapper {
    max-width: 100%;
  }

  .hoppa {
    width: 100%;
    height: 500px;
  }

  .hoppa img {
    width: 100%;
    height: 500px;
  }

  .alice-carousel__prev-btn [data-area]::after {
    display: block;
    content: "";
    width: 32px;
    height: 32px;
    background-size: cover;
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg version='1.1' fill='rgba(255, 255, 255, .8)' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 129 129' xmlns:xlink='http://www.w3.org/1999/xlink' enable-background='new 0 0 129 129'%3E%3Cg%3E%3Cpath d='m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z'/%3E%3C/g%3E%3C/svg%3E%0A");
    border: 1px solid red;
  }

  .alice-carousel__prev-btn,
  .alice-carousel__next-btn {
    padding: 0;
    position: absolute;
    width: auto;
    top: 50%;
    transform: translateY(-50%);
  }

  .alice-carousel {
    display: flex;
    flex-direction: row;
  }

  .yours-custom-class {
    max-width: 100%;
    height: 720px;
  }

  alice-carousel__stage-item __active {
    max-width: 100%;
  }

  .alice-carousel__prev-btn {
    left: 15px;
  }

  .alice-carousel__next-btn {
    right: 15px;
  }
`;

export const AboutEvent = styled.div`
  max-width: 100%;
  height: 304px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 96px;
  padding-bottom: 64px;
  margin: auto;

  .div_style {
    max-width: 60%;
    font-family: Bellefair;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    letter-spacing: 0.15em;
    color: #d5c07c;
    margin-bottom: 29px;
  }
  p {
    max-width: 60%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 0.15em;
    color: #124e3a;
  }
`;


export const Wrap2 = styled.div`
.each-slide div{
  height: 500px;
}

.indicators div{
  display: none;
  height: 0px;
  margin:0 ;
  padding 0;
}

.each-slide img{
    width: 100%;
}
`;


export const Back = (styled.div`
background-image: url(${menuback});
background-repeat: no-repeat;
background-size: cover;
width: 100%;
height: auto;
display: flex;
flex-direction: column;
padding: 80px 0 250px;
align-items: flex-end;
margin-top: -2%;



.wrap1{
  width: 65%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
}

.wrap1 img{
  width: 200px;
  height: 100px;
}

.wrap1 h1{
  max-width: 300px;
  font-family: Bellefair;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 41px;
text-align: center;
letter-spacing: 0.15em;
margin-right: 20%;

color: #FFFFFF;
}

.wrap2{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.wrap2 img{
  width: 14% ;
  margin-left: 5%;
}

.wrap3{
  width: 100%;
  display: flex;
  justify-content: flex-start;
}

.wrap3 img{
  margin-left: 25%;
  margin-top: -5%;
}

.wrap4{
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-around;
  align-items: end;
}

.img2{
  width: 27%;
  margin-left: 30%;
}

.wrap5{
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}

.wrap5 img{
  width: 30%;
  margin-top: -5%;
}

.img_5{
  margin-left: 15% !important;
}

.wrap6{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.wrap6 img{
  margin-left: 5%;

}

.img_8{
  margin-right: 20%;

}

.wrap7{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: end;
}

.wrap8{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.img_12{
  width: 17%;
  height: 0%;
  margin-left: 8%;
  margin-top: 5%;
}

.img_11{
  width: 21%;
  height: 10%;
  margin-left: 15%;
  margin-top: -5%;
}

.img_13{
  margin-right: 5%;
}

.wrap9{
  width: 100%;
  display: flex;
  flex-doirection: row;
  align-items: center;
  justify-content: space-between;
}

.img_14{
  margin-left: 10%;
  margin-top: -3%;

}

.wrap10{
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.wrap10 img{
  margin-left: 50%;
}
`)


export const BannerWrap = (styled.div`
    width: 100vw;
    height: 38vw;
    padding: 0;
    overflow: hidden;
    display: block;

`);