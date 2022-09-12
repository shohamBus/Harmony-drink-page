/* eslint-disable react/destructuring-assignment */
import {
	Divider, List, ListItem, ListItemText, Paper
} from '@mui/material';
import React, { useState } from 'react';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { LocalizeContextProps } from 'react-localize-redux';
import { ApplicationState } from 'actions';
// import { Dispatch } from 'redux';
import { displayDrinkSelector } from 'actions/displayDrink/redux';
import './style.scss';
import Modal from '../Modal/index';

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
	headLine: string;
	display: Drink;
}

export const display: React.FC<Props & LocalizeContextProps> = (props: Props& LocalizeContextProps) => {
	const { headLine } = props;
	const {
		idDrink, strDrink, strCategory, ingredient, dateModified, strGlass, strInstructions, strDrinkThumb
	} = props.display;
	const [open, setOpen] = useState(false);
	const modalHandler = () => {
		setOpen(true);
	};
	return (
		<div className="drink-details">
			<h1 style={{ textDecoration: 'underline', fontFamily: 'Light' }}>
				{ headLine }
			</h1>
			<div key={idDrink} className="details">
				<div key={idDrink} className="content">
					<Paper
						sx={{
							width: '100%',
							bgcolor: 'background.paper',
						}}
					>
						<List>
							<ListItem>
								<ListItemText
									sx={{ color: 'success.main' }}
									primary="Name:"
									secondary={strDrink}
								/>
							</ListItem>
							<Divider component="li" />
							<ListItem>
								<ListItemText
									sx={{ color: 'success.main', fontFamily: 'Def' }}
									primary="Category:"
									secondary={strCategory}
								/>
							</ListItem>
							<Divider component="li" />
							<ListItem>
								<ListItemText
									sx={{ color: 'success.main', fontFamily: 'Def' }}
									primary="Glass:"
									secondary={strGlass}
								/>
							</ListItem>
							<Divider component="li" />
							<ListItem>
								<List>
									<ListItemText
										sx={{ color: 'success.main', fontFamily: 'Def' }}
										primary="Ingredients:"
									/>
									{ingredient?.map((value: string) => <ListItemText secondary={value} key={value} />)}
								</List>
							</ListItem>
							<Divider component="li" />
							<ListItem>
								<ListItemText
									sx={{ color: 'success.main', fontFamily: 'Def' }}
									primary="Instructions:"
									secondary={strInstructions}
								/>
							</ListItem>
							<Divider component="li" />
							<ListItem>
								<ListItemText
									sx={{ color: 'success.main', fontFamily: 'Def' }}
									primary="Date:"
									secondary={dateModified}
								/>
							</ListItem>
							<Divider component="li" />
						</List>
					</Paper>
				</div>
				<div
					className="image"
					onClick={modalHandler}
					onKeyDown={modalHandler}
					role="button"
					tabIndex={0}
				>
					<img
						src={strDrinkThumb}
						alt={strDrink}
						width={200}
						height={300}
					/>
				</div>
			</div>
			<Modal imgSrc={strDrinkThumb} open={open} setOpen={setOpen} />
		</div>
	);
};
const mapStateToProps = (state: ApplicationState) => ({
	display: displayDrinkSelector.getDisplayDrink(state.display)
});

// export  withLocalize<Props & LocalizeContextProps>(display);
export default baseConnect(
	display,
	mapStateToProps,
	// (dispatch: Dispatch) => ({
	// // getDrinks: () => dispatch(DrinksActions.getDrinks()),
	// })
);
