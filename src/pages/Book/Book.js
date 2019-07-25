import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import FormHelperText from '@material-ui/core/FormHelperText';
import { Wrapper, Form, StyledButton, DateList } from "./Book.Style";
import TextField from "@material-ui/core/TextField";
import Tables from "../../containers/Tables";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white"
    },
    "& .MuiOutlinedInput-notchedOutline:after": {
      borderBottomColor: "white"
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "white"
      }
    }
  }
})(TextField);

export class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounth: 0,
      show: false,
      name: '',
      phoneNumber: '',
      peopleNumber: '',
      email: '',
      isNameValid: true,
      isPhoneNumberValid: true,
      isPeopleNumberValid: true,
      isEmailValid: true,
      redirectToThanks: false
    };
  }

  handleChange(event, type) {
    this.setState({
      [type]: event.target.value
    })
  }

  bookClick = () => {

    //mail Validation
    let mailValitadion = false;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
      mailValitadion = true;
    }
    this.setState({
      isEmailValid: mailValitadion
    });

    //name Validation
    if (/^[a-zA-Z]+$/.test(this.state.name)) {
      this.setState({ isNameValid: true });
    } else {
      this.setState({ isNameValid: false });
    }

    //phone Validation
    let regExp = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
    let phone = this.state.phoneNumber.match(regExp);
    if (phone) {
      this.setState({ isPhoneNumberValid: true })
    }
    this.setState({ isPhoneNumberValid: false })

    //count of people Validation
    let numberValid = /^\+?[0-9]+$/.test(this.state.peopleNumber)
    if (numberValid) {
      this.setState({ isPeopleNumberValid: true })
    }
    this.setState({ isPeopleNumberValid: false })

    //redirect to  thanks page
    if (this.state.isEmailValid && this.state.isNameValid && this.state.isPeopleNumberValid && this.state.isPhoneNumberValid) {
      this.setState({
        redirectToThanks: true
      })
    }

  }

  handleClick = () => {
    this.setState({
      show: !this.state.show
    });
  };


  componentDidMount() {
    let noal = "0";
    let today = new Date();
    let currentDate = today.getMonth() + 1;
    if (currentDate < 10) {
      currentDate = noal + currentDate;
      parseInt(currentDate);
    }
    this.setState({
      mounth: currentDate
    });
  }

  render() {
    const { name, phoneNumber, peopleNumber, email, isNameValid, isPhoneNumberValid, isPeopleNumberValid, isEmailValid, formValidation
    } = this.state;
    const isAllDone =
      email.length > 0 &&
      name.length > 0 &&
      peopleNumber.length > 0 &&
      phoneNumber.length > 0;
    return (
      <Wrapper>
        <Form>
          <div className='form'>
            <p className="book">BOOK A TABLE</p>

            <CssTextField
              className='input_style'
              label='Name'
              variant='outlined'
              id='custom-css-outlined-input'
              onChange={(event) => this.handleChange(event, 'name')}
              value={name}
            />
            {(!isNameValid) ? <FormHelperText id="component-error-text"> Please feel without symboles </FormHelperText> : <div></div>}

            <CssTextField
              className='input_style'
              label='Phone number'
              variant='outlined'
              id='custom-css-outlined-input'
              onChange={(event) => this.handleChange(event, 'phoneNumber')}
              value={phoneNumber}
            />
            {(!isPhoneNumberValid) ? <FormHelperText id="component-error-text">Please feel correct numbers  </FormHelperText> : <div></div>}

            <CssTextField
              className='input_style'
              label='Number of people'
              variant='outlined'
              id='custom-css-outlined-input'
              onChange={(event) => this.handleChange(event, 'peopleNumber')}
              value={peopleNumber}
            />
            {(!isPeopleNumberValid) ? <FormHelperText id="component-error-text"> Please feel only numbers </FormHelperText> : <div></div>}

            <CssTextField
              className='input_style'
              label='Email'
              variant='outlined'
              id='custom-css-outlined-input'
              onChange={(event) => this.handleChange(event, 'email')}
              value={email}
            />
            {(!isEmailValid) ? <FormHelperText id="component-error-text">Please feel correctly email </FormHelperText> : <div></div>}

            {this.state.show && <Tables open={this.state.show} />}
            <div className='inline'>
              <select className='select'>
                <option value='01'>01/{this.state.mounth}</option>
                <option value='02'>02/{this.state.mounth}</option>
                <option value='03'>03/{this.state.mounth}</option>
                <option value='04'>04/{this.state.mounth}</option>
                <option value='05'>05/{this.state.mounth}</option>
                <option value='06'>06/{this.state.mounth}</option>
                <option value='07'>07/{this.state.mounth}</option>
                <option value='08'>08/{this.state.mounth}</option>
                <option value='09'>09/{this.state.mounth}</option>
                <option value='10'>10/{this.state.mounth}</option>
                <option value='11'>11/{this.state.mounth}</option>
                <option value='12'>12/{this.state.mounth}</option>
                <option value='13'>13/{this.state.mounth}</option>
                <option value='14'>14/{this.state.mounth}</option>
                <option value='15'>15/{this.state.mounth}</option>
                <option value='16'>16/{this.state.mounth}</option>
                <option value='17'>17/{this.state.mounth}</option>
                <option value='18'>18/{this.state.mounth}</option>
                <option value='19'>19/{this.state.mounth}</option>
                <option value='20'>20/{this.state.mounth}</option>
                <option value='21'>21/{this.state.mounth}</option>
                <option value='22'>22/{this.state.mounth}</option>
                <option value='23'>23/{this.state.mounth}</option>
                <option value='24'>24/{this.state.mounth}</option>
                <option value='25'>25/{this.state.mounth}</option>
                <option value='26'>26/{this.state.mounth}</option>
                <option value='27'>27/{this.state.mounth}</option>
                <option value='28'>28/{this.state.mounth}</option>
                <option value='29'>29/{this.state.mounth}</option>
                <option value='30'>30/{this.state.mounth}</option>
                <option value='31'>31/{this.state.mounth}</option>
                <option selected value='t4'>
                  Date
                </option>
              </select>
              <div> at </div>
              <select className='select'>
                <option value='11:00'>11:00</option>
                <option value='11:30'>11:30</option>
                <option value='12:00'>12:00</option>
                <option value='12:30'>12:30</option>
                <option value='13:00'>13:00</option>
                <option value='13:30'>13:30</option>
                <option value='14:00'>14:00</option>
                <option value='14:30'>14:30</option>
                <option value='15:00'>15:00</option>
                <option value='15:30'>15:30</option>
                <option value='16:00'>16:00</option>
                <option value='16:30'>16:30</option>
                <option value='17:00'>17:00</option>
                <option value='17:30'>17:30</option>
                <option value='18:00'>18:00</option>
                <option value='18:30'>18:30</option>
                <option value='19:00'>19:00</option>
                <option value='19:30'>19:30</option>
                <option value='20:00'>20:00</option>
                <option value='20:30'>20:30</option>
                <option value='21:00'>21:00</option>
                <option value='21:30'>21:30</option>
                <option value='22:00'>22:00</option>
                <option value='22:30'>22:30</option>
                <option value='23:00'>23:00</option>
                <option value='23:30'>23:30</option>
                <option value='00:00'>00:00</option>
                <option value='00:30'>00:30</option>
                <option value='01:00'>01:00</option>
                <option selected value='t4'>
                  Time
                </option>
              </select>
            </div>

            <div className='styling' onClick={this.handleClick}>
              Choose a table (optional) >>
            </div>
            <StyledButton disabled={!isAllDone} onClick={this.bookClick}>BOOK</StyledButton>
          </div>
        </Form>
      </Wrapper>
    );
  }
}

export default Book;
