import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home               = lazy(() => import('../pages/Home'));
const Menu               = lazy(() => import('../pages/Menu'));
const About              = lazy(() => import('../pages/About'));
const Book               = lazy(() => import('../pages/Book'));
const Contact            = lazy(() => import('../pages/Contact'));

class AppRouter extends Component {
	render() {
		return (
		  <Suspense fallback={<div />}>
          <Route exact path="/:locale/" render={props => <Home {...props} />} />
          <Route exact path="/:locale/menu" render={props => <Menu {...props} />} />
          <Route exact path="/:locale/book" render={props => <Book {...props} />} />
          <Route exact path="/:locale/about" render={props => <About {...props} />} />
          <Route exact path="/:locale/contact" render={props => <Contact {...props} />} />
      </Suspense>
		);
	}
}

export default AppRouter;