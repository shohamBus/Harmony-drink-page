import { Action } from 'redux';

/* ------------- Define Actions and State ------------- */

export interface DrinksState {
	drinksArr: Drink[];
	filterArr: Drink[];
}

export enum TypesNames {
	GET_DRINKS = 'GET_DRINKS',
	SET_DRINKS = 'SET_DRINKS',
	FILTER_BY_INGREDIENT = 'FILTER_BY_INGREDIENT',
	SORT_BY_NAME= 'SORT_BY_NAME',
	SORT_BY_DATE= 'SORT_BY_DATE',

}

export declare function GetDrinksFunction(data: string): GetDrinksAction;
export declare function SetDrinksFunction(data: Drink[]): SetDrinksAction;
export declare function FilterByIngredientFunction(data: string): FilterByIngredientAction;
export declare function SortBYNameFunction(): SortBYNameAction;
export declare function SortBYDateFunction(): SortBYDateAction;

export interface ActionCreator {
	getDrinks: typeof GetDrinksFunction;
	setDrinks: typeof SetDrinksFunction;
	filterByIngredient: typeof FilterByIngredientFunction;
	sortBYName: typeof SortBYNameFunction;
	sortBYDate: typeof SortBYDateFunction;

}

export interface GetDrinksAction extends Action<TypesNames.GET_DRINKS> {
	data: string;
}
export interface SetDrinksAction extends Action<TypesNames.SET_DRINKS> {
	data: Drink[];
}
export interface FilterByIngredientAction extends Action<TypesNames.FILTER_BY_INGREDIENT> {
	data: string;
}

export interface SortBYNameAction extends Action<TypesNames.SORT_BY_NAME> {
	data: Drink[];
}
export interface SortBYDateAction extends Action<TypesNames.SORT_BY_DATE> {
	data: Drink[];
}

/* ------------- Define Any Interfaces ------------- */

export interface Drink{
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

export interface FilterInp{
	mainSearch: string;
	ingredient: string;
}

