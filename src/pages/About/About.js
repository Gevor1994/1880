import React, { Component } from "react";
import {
  Container,
  WrappAll,
  FirstBox,
  SecondBox,
  ColumnLeft,
  ColumnRight,
  MiddleBar,
  Wrapper,
  TopBar,
  BottomBar
} from "./About.Style";
import { Icon } from "antd";
import flex1 from "../../images/flex1.png";
import flex2 from "../../images/flex2.png";
import flex3 from "../../images/flex3.png";
import flex4 from "../../images/flex4.png";
import flex5 from "../../images/flex5.png";

class About extends Component {
  render() {
    return (
      <Wrapper>
        <div className='wrappp'>
          <TopBar>
            <div className='text'>WHO ARE WE</div>
            <p className='style_p'>SCROLL DOWN</p>
            <a href='#cake'>
              <div className='icon_style'>
                <Icon type='down' />
              </div>
            </a>
          </TopBar>
        </div>

        <MiddleBar>
          <div id='cake' className='middle'>
            <p className='high_shript'>ABOUT 1880</p>
            <p className='small_shrift'>
              We embrace Life’s simple pleasure over morning coffee, delicious
              food or evening drinks with a friendly smile and welcoming
              ambience. <br />
              Accurately implemented interior design elements highlight Martiros
              Saryan’s selected works, transforming mosaic reproduction of “My
              Yard” into alive canvas.
              <br />
              Classic bar interior design in the scheme of the '60s with wooden
              armchairs, quite atmosphere, and good music will make you linger
              and have one more.
            </p>
          </div>
        </MiddleBar>
        <BottomBar />

        <WrappAll>
          <Container>
            <FirstBox>
              <ColumnLeft>
                <div className='combainer'>
                  <img className='img_style1' src={flex1} />
                  <img className='img_style2' src={flex2} />
                </div>
                <p>
                  The menu highlights the best to offer from a fusion cuisine
                  with an artistic dish serving and innovative menu items.
                  Special offers by our chef are guaranteed!
                </p>
              </ColumnLeft>

              <ColumnRight>
                <h1>OUR TEAM</h1>
                <p>
                  Our bartenders may offer you time-honored classics along with
                  an original cocktail menu launched by our master mixologists
                  in unique glassware you ever laid your eyes on.
                </p>
                <img className='img_style3' src={flex3} />
              </ColumnRight>
            </FirstBox>

            <SecondBox>
              <div className='general'>
                <div className='img_wrap'>
                  <img src={flex4} />
                </div>

                <div className='wrapper'>
                  <img src={flex5} />
                  <p>
                    Plan your evening with friends or family or visit us by a
                    spontaneous decision as you take a stroll in the city
                    center. We welcome you warmly to explore what makes us ...
                  </p>
                </div>
              </div>
            </SecondBox>

          </Container>
        </WrappAll>
      </Wrapper>
    );
  }
}

export default About;
