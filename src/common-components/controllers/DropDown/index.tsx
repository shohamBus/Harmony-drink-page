import { baseConnect } from '@base/features/base-redux-react-connect';
import { MenuItem, TextField } from '@mui/material';
import { ApplicationState } from 'actions';
import { DrinksActions, FilterArrSelector } from 'actions/drinks';
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

export interface Props {
	label: string;
	Names: string[];
	filterArr: Drink[];

}

const dropDown: React.FC<Props & LocalizeContextProps> = (props: Props) => {
	const { label, Names, filterArr } = props;
	
	const [display, setDisplay] = React.useState('');
	const dispatch = useDispatch();
	const handleChange = (value: string) => {
		setDisplay(value);
		if (value === 'Name') dispatch(DrinksActions.sortBYName(filterArr));
		if (value === 'Date') dispatch(DrinksActions.sortBYDate(filterArr));
	};
	return (
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
			label={label}
			value={display}
			onChange={(e) => handleChange(e.target.value)}
			select
			InputProps={{
				style: { fontSize: 20 },
			}}
		>
			{Names.map((value) => {
				return (
					<MenuItem key={value} value={value}>
						Sort by {value}
					</MenuItem>
				);
			})};
		</TextField>
	);
};

const mapStateToProps = (state: ApplicationState) => ({
	filterArr: FilterArrSelector.getFilterArr(state.drinks)
});
export default baseConnect(
	dropDown,
	mapStateToProps,
	
);
