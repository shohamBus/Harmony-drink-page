import { Chip, ListItem, Paper } from '@mui/material';
import { DrinksActions } from 'actions/drinks';
import * as React from 'react';
import { withLocalize, LocalizeContextProps } from 'react-localize-redux';
import { useDispatch } from 'react-redux';
import './style.scss';

export interface ChipData{
	key: string| number;
	value: string;
}

export interface Props {
	search: ChipData[] ;
	setPrevSearch: any;
}

const chip: React.FC<Props & LocalizeContextProps> = (props: Props& LocalizeContextProps) => {
	const { search, setPrevSearch } = props;
	// const [prevSearch, setPrevSearch] = React.useState<ChipData[]>(search);
	const dispatch = useDispatch();
	const handleDelete = (chipToDelete: ChipData) => () => {
		setPrevSearch((chips: ChipData[]) => chips.filter((chop: ChipData) => chop.key !== chipToDelete.key));
	};
	
	return (
		<Paper
			sx={{
				listStyle: 'none',
				p: 0,
				m: 0,
			}}
			component="ul"
			className="spans"
		>
			{search.length !== 0
					&& search?.map((data: ChipData) => {
						let icon;
						return (
							<ListItem key={data.key} className="chip">
								<Chip
									onClick={(event) => dispatch(DrinksActions.getDrinks(event.target.innerHTML))} // eslint-disable-line no-eval
									// setCurrentSearch('');
									// dispatch(UpdateMainSearch(e.target.innerHTML));
									// dispatch(
									// filterDrinks({
									// mainSearch: e.target.innerHTML,
									// ingredient: filters.ingredient,
									// })
									// );
									icon={icon}
									label={data.value}
									onDelete={handleDelete(data)}
								/>
							</ListItem>
						);
					})}
		</Paper>
	);
};
export default withLocalize<Props & LocalizeContextProps>(chip);
