import React, { PureComponent } from 'react';
import  {Wrapper, Divahar, Cover} from './ViewMiddle.style'
import clock from '../../../images/clock.png'
import {Icon} from 'antd'

import IntlMessage from '../../../components/utils/intlMessage'


const lang = {
  copy: <IntlMessage id="footer.copyright" />,
};

class ViewMiddle extends PureComponent {

  render() {
    return (
		<Cover>
			<Wrapper> 
				<div>
					<div className= "category">OPENING HOURS</div>
					<div className = "inline" ><img src = {clock} /> 11:00 - 01:00</div>
				</div>
				
				<div>
					<div className= "category">CONTACTS</div>
					<div className = "inline"> <Icon className = "icon_style" type="environment" /> Moskovyan 28 </div>
					<div className = "phone"><Icon className = "icon_style" type="phone" /> +374 43 180 080</div>
				</div>
				
				<div>
					<div className= "category">FOLLOW US</div>
					<Icon className = "icon_style" type="facebook" />
					<Icon className = "icon_style" type="instagram"/>
				</div>
				
			</Wrapper>
			<Divahar >
				<hr className = "hr"></hr>
				<div className = "all">1880 Bar & More |ALL RIGHTS RESERVED 2018</div>
			</Divahar>
		</Cover>
    )
  };
}

export default ViewMiddle;