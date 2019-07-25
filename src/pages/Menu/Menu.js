import React, { Component } from "react";
import { Container, TopPic, MenuList, Single } from "./Menu.Style";

import burger from "../../images/burger.png";

export class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    };
  }
  handleClick = () => {
    this.setState({
      isShow: !this.state.isShow
    });
  };
  render() {
    return (
      <Container>
        <TopPic>
          <p>ORDER ORGANIC</p>
        </TopPic>

        <div className='menu'>
          <div>MAGNIFICENT MENU</div>
          <p>
            Have a nice evening with us. Choose event you like weather it is
            loud night feaver or smooth jazz evening. Hurry up to book a table
            on evening when your favorite artist is performing.
          </p>
        </div>

        <MenuList>
          <Single className='APPETIZERS' onClick={this.handleClick}>
            APPETIZERS
          </Single>
          {this.state.isShow && (
            <div className='tenanq'>
              <div className='show'>
                <h1>TASTE THAT</h1>
                <p>
                  Real groundbreaking taste of sandwich and burgers. Meatlovers
                  will feel delicious taste of healthy meat.
                </p>
                <div className='list'>
                  <div className='prod'>
                    <img src={burger} />
                    <div>Big Beef Burger</div>
                  </div>
                  <div className='prod'>
                    <img src={burger} />
                    <div>Big Beef Burger</div>
                  </div>
                  <div className='prod'>
                    <img src={burger} />
                    <div>Big Beef Burger</div>
                  </div>
                  <div className='prod'>
                    <img src={burger} />
                    <div>Big Beef Burger</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <Single>SALADS</Single>
          <Single>SOUPS</Single>
          <Single>HOT DISHES</Single>
          <Single>GARNISH</Single>
          <Single>SANDWICHES & BURGERS</Single>
          <Single>DESSERTS</Single>
          <Single>COCKTAILS</Single>
          <Single>BAR</Single>
          <Single>WINE LIST</Single>
        </MenuList>
      </Container>
    );
  }
}

export default Menu;
