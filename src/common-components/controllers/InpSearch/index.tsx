import { baseConnect } from '@base/features/base-redux-react-connect';
import { TextField } from '@mui/material';
import { ApplicationState } from 'actions';
import { DrinksActions, drinksSelector, FilterArrSelector } from 'actions/drinks';
import React, { useState } from 'react';
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
	drinkArr: Drink[];
};

const inpSearch: React.FC<Props & LocalizeContextProps> = (props: Props) => {
	const [display, setDisplay] = useState('');
	const dispatch = useDispatch();
	const { drinkArr } = props;

	// send to reducer-filter &&  the display
	const handleChange = (event: any) => {
		const inp = event.target.value;
		setDisplay(inp);
		dispatch(DrinksActions.filterByIngredient(inp, drinkArr));
	};

	return (
		<div>
			<TextField
				sx={{
					width: '90%',
					borderRadius: 1,
					'& .MuiOutlinedInput-root.Mui-focused': {
						'& > fieldset': {
							borderColor: '#FF5757',
						},
					},
					'& .MuiOutlinedInput-root': {
						'& > fieldset': { border: '3px solid #FF5757' },
					},
				}}
				label="Filter by ingredient:"
				variant="outlined"
				value={display}
				onChange={(e) => {
					handleChange(e);
				}}
			/>
		</div>
	);
};

const mapStateToProps = (state: ApplicationState) => ({
	filterArr: FilterArrSelector.getFilterArr(state.drinks),
	drinkArr: drinksSelector.getDrinksArr(state.drinks)
});
export default baseConnect(
	inpSearch,
	mapStateToProps,
	
);
