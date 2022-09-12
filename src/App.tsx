import * as React from 'react';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { PendingTasks } from '@base/features/base-global-spinner/reducer';
import { ApplicationState } from 'actions';
import { Spinner } from 'common-components/business';
import { Dispatch } from 'redux';
import { DisplayDrinkActions } from 'actions/displayDrink';
import { GetRandomDrinkFunction } from 'actions/displayDrink/interface';

interface Props {
	children: any;
	pendingTasks: PendingTasks;
	getRandomDrink: typeof GetRandomDrinkFunction;
}

class App extends React.Component<Props> {
	componentDidMount(): void {
		const { getRandomDrink } = this.props;
		getRandomDrink();
	}
	render() {
		const { pendingTasks, children } = this.props;
		const loading = pendingTasks?.length;

		return (
			<>
			
				{/* <ErrorHandler /> */}
				{(!!loading) && <Spinner />}
				{/* <MainPage /> */}
				{children}
				{/* <Header ImageAlt="Cocktails" ImageSrc="./Buskilas.png" /> */}
			</>
		);
	}
}

const mapStateToProps = (state: ApplicationState) => ({
	pendingTasks: state.globalSpinner.pendingTasks
});

export default baseConnect(
	App,
	mapStateToProps,
	(dispatch: Dispatch) => ({
		getRandomDrink: () => dispatch(DisplayDrinkActions.getRandomDrink())
	})
);
