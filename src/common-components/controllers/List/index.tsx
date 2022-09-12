import { baseConnect } from '@base/features/base-redux-react-connect';
import {
	List, ListItem, ListItemButton, ListItemText, Paper
} from '@mui/material';
import { ApplicationState } from 'actions';
import { DisplayDrinkActions } from 'actions/displayDrink';
import { drinksSelector, FilterArrSelector } from 'actions/drinks';
import * as React from 'react';
import { LocalizeContextProps } from 'react-localize-redux';
import { useDispatch } from 'react-redux';

interface Drink{
	idDrink: string;
	strDrink: string;
	strCategory: string;
	ingredient: string[];
	dateModified: string;
	strDrinkThumb: string;
	strGlass: string;
	strInstructions: string;
	strTags: string;
}

export type Props = {
	headLine: string;
	filterArr: Drink[];
};

const list: React.FC<Props & LocalizeContextProps> = (props: Props& LocalizeContextProps) => {
	const { headLine, filterArr } = props;
	const loading = false;
	const dispatch = useDispatch();
	
	function renderRow(drink: Drink) {
		const { idDrink, strDrink, strCategory } = drink;
		return (
			<ListItem key={idDrink} component="div" disablePadding>
				<ListItemButton
					onClick={() => dispatch(DisplayDrinkActions.getDisplayDrink(drink))}
				>
					<ListItemText
						sx={{ color: 'error.main', fontFamily: 'Def', m: 0.5 }}
						primary={`${strDrink}`}
						secondary={`Category:${strCategory}`}
					/>
				</ListItemButton>
			</ListItem>
		);
	}
	return (
		<div className="drink-list">
			<h1 style={{ textDecoration: 'underline', fontFamily: 'Light' }}>
				{headLine}
			</h1>
			{loading ? (
				<h5>loading...</h5>
			) : (
				<Paper style={{ maxHeight: 750, overflow: 'auto', width: '100%' }}>
					<List>
						{filterArr?.map((drink) => renderRow(drink))}
					</List>
				</Paper>
			)}
		</div>
	);
};
const mapStateToProps = (state: ApplicationState) => ({
	drinks: drinksSelector.getDrinksArr(state.drinks),
	filterArr: FilterArrSelector.getFilterArr(state.drinks)
});
export default baseConnect(
	list,
	mapStateToProps,
	// (dispatch: Dispatch) => ({
	// // getDrinks: () => dispatch(DrinksActions.getDrinks()),
	// })
);
