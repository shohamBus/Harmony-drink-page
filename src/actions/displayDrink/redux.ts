import { createDraft, Draft } from 'immer';
import { createReducerCase } from '@base/features/base-decorator';
import { createReducer, createActions } from 'reduxsauce';
import {
	TypesNames, ActionCreator, Display, GetDisplayDrinkAction,
} from './interface';

// TODO: Do not for get add your reducer to index file

/* ------------- Types and Action Creators ------------- */

const { Creators } = createActions<TypesNames, ActionCreator>({
	getDisplayDrink: ['drinkArr'], // handle by saga
	getRandomDrink: ['drinkArr'] // handle by saga
});

export const DisplayDrinkTypes = TypesNames;
export const DisplayDrinkActions = Creators;

/* ------------- Initial State ------------- */

const INITIAL_STATE = createDraft<Display>({
	display: {
		idDrink: '',
		strDrink: '',
		strCategory: '',
		ingredient: [],
		dateModified: '',
		strGlass: '',
		strInstructions: '',
		strDrinkThumb: '',
		strTags: '',
	}
});

/* ------------- Selectors ------------- */

export const displayDrinkSelector = {
	getDisplayDrink: (state: Display) => state.display
};

/* ------------- Reducers ------------- */

const getDisplayDrinkReducer = (draft: Draft<Display>, action: GetDisplayDrinkAction) => {
	const { drinkArr } = action;
	draft.display = drinkArr;
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
	[TypesNames.GET_DISPLAY_DRINK]: createReducerCase(getDisplayDrinkReducer)
});
