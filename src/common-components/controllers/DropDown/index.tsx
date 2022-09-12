import { MenuItem, TextField } from '@mui/material';
import { DrinksActions } from 'actions/drinks';
import * as React from 'react';
import { withLocalize, LocalizeContextProps } from 'react-localize-redux';
import { useDispatch } from 'react-redux';

export interface Props {
	label: string;
	Names: string[];
}

const dropDown: React.FC<Props & LocalizeContextProps> = (props: Props) => {
	const { label, Names } = props;
	const [display, setDisplay] = React.useState('');
	const dispatch = useDispatch();
	const handleChange = (value: string) => {
		setDisplay(value);
		if (value === 'Name') dispatch(DrinksActions.sortBYName());
		if (value === 'Date') dispatch(DrinksActions.sortBYDate());
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

export default withLocalize<Props & LocalizeContextProps >(dropDown);
