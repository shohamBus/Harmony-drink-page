import { createDraft, Draft } from 'immer';
import { createReducerCase } from '@base/features/base-decorator';
import { createReducer, createActions } from 'reduxsauce';
import {
	DrinksState, TypesNames, ActionCreator, SetDrinksAction, SetFilterByIngredientAction, SetSortBYNameAction, SetSortBYDateAction
} from './interface';

/* ------------- Types and Action Creators ------------- */

const { Creators } = createActions<TypesNames, ActionCreator>({
	getDrinks: ['inputStrName'], // handle by saga
	setDrinks: ['drinksList'],
	filterByIngredient: ['inputStrIngredient', 'drinkArr'], // handle by saga
	setFilterByIngredient: ['drinksList'],
	sortBYName: ['filterDrinkArr'], // handle by saga
	setSortBYName: ['filterDrinkArr'],
	sortBYDate: ['filterDrinkArr'], // handle by saga
	setSortBYDate: ['filterDrinkArr'],
});

export const DrinksTypes = TypesNames;
export const DrinksActions = Creators;

/* ------------- Initial State ------------- */
const INITIAL_STATE = createDraft<DrinksState>({
	drinksArr: [],
	filterArr: []
});
/* ------------- Selectors ------------- */

export const drinksSelector = {
	getDrinksArr: (state: DrinksState) => state.drinksArr
};
export const FilterArrSelector = {
	getFilterArr: (state: DrinksState) => state.filterArr
};

/* ------------- Reducers ------------- */
const setDrinksReducer = (draft: Draft<DrinksState>, action: SetDrinksAction) => {
	const { drinksList } = action;
	draft.filterArr = drinksList;
	draft.drinksArr = drinksList;
};

const setFilterByIngredientReducer = (draft: Draft<DrinksState>, action: SetFilterByIngredientAction) => {
	const { drinksList } = action;
	draft.filterArr = drinksList;
};

const setSortBYNameReducer = (draft: Draft<DrinksState>, action: SetSortBYNameAction) => {
	const { filterDrinkArr } = action;
	draft.filterArr = filterDrinkArr;
};
  
const setSortBYDateReducer = (draft: Draft<DrinksState>, action: SetSortBYDateAction) => {
	const { filterDrinkArr } = action;
	draft.filterArr = filterDrinkArr;
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
	[TypesNames.SET_DRINKS]: createReducerCase(setDrinksReducer),
	[TypesNames.SET_FILTER_BY_INGREDIENT]: createReducerCase(setFilterByIngredientReducer),
	[TypesNames.SET_SORT_BY_NAME]: createReducerCase(setSortBYNameReducer),
	[TypesNames.SET_SORT_BY_DATE]: createReducerCase(setSortBYDateReducer),
});

