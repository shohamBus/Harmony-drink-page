import * as React from 'react';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { ApplicationState } from 'actions';
// import RoutesPath from 'routes/RoutesPath';
import { Grid, Box } from '@mui/material';
import { Header } from 'common-components/business';
import {
	Display, DropDown, List, MainSearch
} from 'common-components/controllers';
import { drinksSelector, FilterArrSelector } from 'actions/drinks';
import InpSearch from 'common-components/controllers/InpSearch';

export class MainPage extends React.Component<any> {
	// 

	componentDidMount(): void {
		// const { cartItems, history } = this.props;

		// if (!cartItems || !cartItems.length) {
		// history.push(RoutesPath.ROOT);
		// }
	}

	render() {
		// const { cartItems, translate } = this.props;

		return (
			<>
				<Box sx={{ flexGrow: 1, m: 2 }}>
					<Grid container spacing={2} p={2}>
						<Grid item xs={12} justifyContent="center" alignItems="center">
							<Header ImageAlt="Coctails" ImageSrc="src\public\Buskilas.png" />
						</Grid>
						<Grid
							container
							justifyContent="space-between"
							alignItems="flex-start"
							py={4}
							mb={2}
							spacing={1}
						>
							<Grid item md={4} xs={11} m="0 auto">
								<InpSearch />
							</Grid>
							<Grid item md={4} xs={12} justifyContent="center" alignItems="center">
								<MainSearch lable="Main search.." buttonText="SEARCH" withButton />
							</Grid>
							<Grid item md={4} xs={12} justifyContent="center" alignItems="center">
								<DropDown label="Sort by..." Names={['Name', 'Date']} />
							</Grid>
						</Grid>
						<Grid container justifyContent="center" border="1px solid black">
							<Grid item md={4} xs={12} borderRight="1px solid black">
								<List headLine="Drinks" />
							</Grid>
							<Grid item md={8} sm={12}>
								<Display headLine="Drink Details" />
							</Grid>
						</Grid>
					</Grid>
				</Box>
			</>
		);
	}
}

export default baseConnect(
	MainPage,
	(state: ApplicationState) => ({
		drinks: drinksSelector.getDrinksArr(state.drinks),
		filterArr: FilterArrSelector.getFilterArr(state.drinks)
	}),
	() => ({})
);
