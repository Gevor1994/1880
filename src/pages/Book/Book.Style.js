import styled from "styled-components";
import bookback from "../../images/bookback.png";
import { Button } from 'antd'

export const Wrapper = styled.div`
  width: 100%;
`;

export const Form = styled.div`
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${bookback});
    display: flex;
    background-repeat: no-repeat;
    background-size: cover;
    
.inline{
    margin-top: 32px;
    width: 100%;
    height: 48px;
    display: flex;
    flex-direction: row;
    justify-content: space-between:
}

.inline div{
    margin-top: 13px;
    width: 34%;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.15em;
    text-align: center;
    vertical-align: middle;
    color: #FFFFFF;
    &:after{
        background: yellow;
    }

}

 option{ 
    color: black;
}

option:after{
    background: black;
}
.select{
    width: 33%;
    height: auto;
    background: transparent;
    font-family: Roboto;
    font-style: normal;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.15em;
    color: #E2E2E2;
    padding-left: 28px;
    text-align: right
    border-radius: 4px;
}
select:after{
    border-color: white;
}


.form{
    width: 33%;
    display: flex;
    flex-direction: column;
}

fieldset{
    border-color: #E2E2E2 !important;
}

.input_style{
     margin-top: 32px;
}
    
    div > input {
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.15em;
        color: #E2E2E2;
        
    }

    div > label{
        background-color: Transparent;
        color: #FFFFFF;
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.15em;
        color: #E2E2E2;
        padding-left: 10px;
    }
    
    .MuiFormHelperText-root{
            color: white;
    }
   

    .book{
        font-family: Bellefair;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.15em;
        color: #DFD09D;
        background-color: Transparent;
        margin-top: 100px;
        margin-bottom: 39px
    }

    .styling {
        width: 100% !important;
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 16px !important;
        letter-spacing: 0.15em !important;
        color: #FFFFFF;
        margin-bottom: 32px;
        margin-top: 20px;
    }

   
`;

export const StyledButton = styled(Button)`
  width: 100%;
  height: 48px;
  background: #ffffff;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.15em;
  color: #000000;
  margin-bottom: 64px;
  border: none;
`;
