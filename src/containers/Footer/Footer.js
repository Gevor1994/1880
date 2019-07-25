import React, { PureComponent,  lazy } from 'react';


const ViewMiddle = lazy(() => import('./ViewMiddle/ViewMiddle'));

class Footer extends PureComponent {

  render() {
    return (
					<ViewMiddle />
    )
  };
}

export default Footer;
