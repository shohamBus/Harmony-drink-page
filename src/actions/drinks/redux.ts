import { createDraft, Draft } from 'immer';
import { createReducerCase } from '@base/features/base-decorator';
import { createReducer, createActions } from 'reduxsauce';
import {
	DrinksState, TypesNames, ActionCreator, SetDrinksAction, FilterByIngredientAction, Drink
} from './interface';

/* ------------- Types and Action Creators ------------- */

const { Creators } = createActions<TypesNames, ActionCreator>({
	getDrinks: ['data'], // handle by saga
	setDrinks: ['data'],
	filterByIngredient: ['data'],
	sortBYName: ['data'],
	sortBYDate: ['data'],
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
	const { data } = action;
	draft.filterArr = data;
	draft.drinksArr = data;
};

const filterByIngredientReducer = (draft: Draft<DrinksState>, action: FilterByIngredientAction) => {
	const { data } = action;
	
	const inp = data.toLowerCase();
	draft.filterArr = [...draft.drinksArr].filter((drink) => {
		return (
			drink.ingredient.find((item) => item.toLowerCase().startsWith(inp))
		);
	});
};

const sortBYNameReducer = (draft: Draft<DrinksState>) => {
	draft.filterArr = draft.filterArr.sort((a: Drink, b: Drink) => {
		if (a.strDrink > b.strDrink) {
			return 1;
		}
		if (b.strDrink > a.strDrink) {
			return -1;
		}
		return 0;
	});
};
  
const sortBYDateReducer = (draft: Draft<DrinksState>) => {
	draft.filterArr = draft.filterArr.sort(
		(a, b) => Date.parse(b.dateModified) - Date.parse(a.dateModified)
	);
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
	[TypesNames.SET_DRINKS]: createReducerCase(setDrinksReducer),
	[TypesNames.FILTER_BY_INGREDIENT]: createReducerCase(filterByIngredientReducer),
	[TypesNames.SORT_BY_NAME]: createReducerCase(sortBYNameReducer),
	[TypesNames.SORT_BY_DATE]: createReducerCase(sortBYDateReducer),
});

