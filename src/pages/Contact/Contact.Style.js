import styled from 'styled-components';
import contacts from '../../images/contacts.png'
import { Button } from 'antd'

export const Wrapper = (styled.div`
    width: 100%;
.tenanq{
    display: flex;
    flex-direction: column;
    align-items: flex-start
} 
`)

export const Form = (styled.div`
    width: 100%;
    height: 740px;
    background-image: url(${contacts});
    display: flex;
    flex-direction: column;
    background-repeat: no-repeat;
    background-size: cover;
    align-items: center;

.porc{
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
}

   fieldset{
       border-color: #E2E2E2 !important;
   }

   .input_style{
       margin-bottom: 32px;
   }
    div{
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: Transparent;

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
    
   

    p{
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
    }
    
    .div input{
        width: 464px;
        height: 48px;
        box-sizing: border-box;
        transform: matrix(1, 0, 0, -1, 0, 0);
    }

    .array > 
    .MuiInputBase-root{
        height: 218px !important;
    }
   
`)



export const StyledButton = (styled(Button)`
    width: 100%;
    height: 48px;
    background: #FFFFFF;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.15em;
    color: #000000;
    margin-bottom: 32px;
    border: none;
`)