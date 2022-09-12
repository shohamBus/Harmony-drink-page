import { TextField } from '@mui/material';
import { DrinksActions } from 'actions/drinks';
import React, { useState } from 'react';
import { withLocalize, LocalizeContextProps } from 'react-localize-redux';
import { useDispatch } from 'react-redux';

export type Props = {

};

const inpSearch: React.FC<Props & LocalizeContextProps> = () => {
	const [display, setDisplay] = useState('');
	const dispatch = useDispatch();

	// send to reducer-filter &&  the display
	const handleChange = (event: any) => {
		const inp = event.target.value;
		setDisplay(inp);
		dispatch(DrinksActions.filterByIngredient(inp));
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

export default withLocalize<Props & LocalizeContextProps>(inpSearch);
