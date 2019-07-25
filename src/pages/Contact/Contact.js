import React, { Component } from 'react'
import Iframe from 'react-iframe'
import {Wrapper, Form, StyledButton} from './Contact.Style'
import TextField from '@material-ui/core/TextField';
import { fade, withStyles, makeStyles, createMuiTheme } from '@material-ui/core/styles';

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'white',
      },
      '& .MuiOutlinedInput-notchedOutline:after': {
        borderBottomColor: 'white',
      },
      '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
          borderColor: 'white',
        },
      },
    },
  })(TextField);


export class Contact extends Component {
    render() {
        return (
              <Wrapper>
                        <Iframe url= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.9386261319432!2d44.50912451534859!3d40.18817927939229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd1c2c3b05df%3A0xad9e49499f3a38d!2s28+Moskovyan+Street%2C+Yerevan%2C+Armenia!5e0!3m2!1sen!2s!4v1563111867339!5m2!1sen!2s"   
                  width= " 100% "
                  height="700px"
                  id="myId"
                  className="myClassname"
                  display="initial"
                />
                <div className ="tenanq ">
                <Form>
                    <div className ="porc">
                    <p>LEAVE FEEDBACK</p>
                    <CssTextField
                        className = "input_style"
                        label="Email"
                        variant="outlined"
                        id="custom-css-outlined-input"
                    />
                    <CssTextField
                        className = "input_style"
                        label="Subject"
                        variant="outlined"
                        id="custom-css-outlined-input"
                    />
                    <CssTextField
                        className = "input_style array"
                        label="Type here"
                        variant="outlined"
                        id="custom-css-outlined-input"
                    />
                    {/* <TextArea placeholder= "Type here" className = "area" rows={16} /> */}
                    <StyledButton>SEND</StyledButton>
                    </div>
                </Form>
                </div>
            </Wrapper>
        )
    }
}

export default Contact
