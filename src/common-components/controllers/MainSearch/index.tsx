import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { withLocalize, LocalizeContextProps } from 'react-localize-redux';
import { GetDrinksFunction } from 'actions/drinks/interface';
import './style.scss';
import { DrinksActions } from 'actions/drinks';
import { useDispatch } from 'react-redux';
import Chip from '../Chip';

export type Props = {
	lable: string;
	buttonText?: string;
	withButton: boolean;
	getDrinks?: typeof GetDrinksFunction;

};

export interface ChipData{
	key: string;
	value: string;
}

const mainSearch: React.FC<Props & LocalizeContextProps> = (props: Props& LocalizeContextProps) => {
	const [currentSearch, setCurrentSearch] = React.useState('');
	const {
		lable, buttonText, withButton
	} = props;
	const dispatch = useDispatch();
	const [prevSearch, setPrevSearch] = useState<ChipData[]>([]);
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	
	function generateString(length: number) {
		let result = ' ';
		const charactersLength = characters.length;
		// eslint-disable-next-line no-plusplus
		for (let i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}

	// send to reducer
	const searchApply = (str: string) => {
		if (prevSearch.length === 5) prevSearch.shift();
		prevSearch.push({ key: generateString(5), value: str });
		setCurrentSearch(' ');
	};
	
	const SearchButton = () => (
		<Button
			sx={{ bgcolor: 'text.secondary' }}
			size="large"
			variant="contained"
			onClick={() => { dispatch(DrinksActions.getDrinks(currentSearch)); searchApply(currentSearch); }}
		>
			{' '}
			{buttonText}
		</Button>
	);
	return (
		<>
			<div className="search-bar">
				<TextField
					label={lable}
					value={currentSearch}
					sx={{
						width: '100%',
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
					variant="outlined"
					onChange={(e) => {
						setCurrentSearch(e.target.value);
					}}
					InputProps={{
						endAdornment: (
							<Box>
								{withButton && <SearchButton />}
							</Box>
						),
						style: { fontSize: 20 },
					}}
				/>
			</div>
			<div>
				<Chip search={prevSearch} setPrevSearch={setPrevSearch} />
			</div>
		</>
	);
};

export default withLocalize<Props & LocalizeContextProps>(mainSearch);
