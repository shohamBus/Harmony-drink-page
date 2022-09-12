import * as React from 'react';
import { Switch } from 'react-router-dom';
import Route from './PageContainer';

/* -------------- Pages --------------- */
import App from '../App';
// import ErrorPage from 'pages/ErrorPage';
import MainPage from 'pages/MainPage';
/* -------------- Routes Paths --------------- */
import RoutesPath from './RoutesPath';

export default (
	<App>
		<Switch>
			<Route exact path={RoutesPath.ROOT} component={MainPage} />
			{/* <Route exact path={RoutesPath.ERROR_PAGE} component={() => <ErrorPage />} /> */}
		</Switch>
	</App>
);
