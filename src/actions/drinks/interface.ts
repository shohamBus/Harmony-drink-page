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
	SET_FILTER_BY_INGREDIENT = 'SET_FILTER_BY_INGREDIENT',
	SORT_BY_NAME= 'SORT_BY_NAME',
	SET_SORT_BY_NAME= 'SET_SORT_BY_NAME',
	SORT_BY_DATE= 'SORT_BY_DATE',
	SET_SORT_BY_DATE= 'SET_SORT_BY_DATE'
}

export declare function GetDrinksFunction(inputStrName: string): GetDrinksAction;
export declare function SetDrinksFunction(drinksList: Drink[]): SetDrinksAction;
export declare function FilterByIngredientFunction(inputStrIngredient: string, drinkArr: Drink[]): FilterByIngredientAction;
export declare function SetFilterByIngredientFunction(drinksList: Drink[]): SetFilterByIngredientAction;
export declare function SortBYNameFunction(filterDrinkArr: Drink[]): SortBYNameAction;
export declare function SetSortBYNameFunction(filterDrinkArr: Drink[]): SetSortBYNameAction;
export declare function SortBYDateFunction(filterDrinkArr: Drink[]): SortBYDateAction;
export declare function SetSortBYDateFunction(filterDrinkArr: Drink[]): SetSortBYDateAction;

export interface ActionCreator {
	getDrinks: typeof GetDrinksFunction;
	setDrinks: typeof SetDrinksFunction;
	filterByIngredient: typeof FilterByIngredientFunction;
	setFilterByIngredient: typeof SetFilterByIngredientFunction;
	sortBYName: typeof SortBYNameFunction;
	setSortBYName: typeof SetSortBYNameFunction;
	sortBYDate: typeof SortBYDateFunction;
	setSortBYDate: typeof SetSortBYDateFunction;

}

export interface GetDrinksAction extends Action<TypesNames.GET_DRINKS> {
	inputStrName: string;
}
export interface SetDrinksAction extends Action<TypesNames.SET_DRINKS> {
	drinksList: Drink[];
}
export interface FilterByIngredientAction extends Action<TypesNames.FILTER_BY_INGREDIENT> {
	inputStrIngredient: string;
	drinkArr: Drink[];
}
export interface SetFilterByIngredientAction extends Action<TypesNames.SET_FILTER_BY_INGREDIENT> {
	drinksList: Drink[];
}

export interface SortBYNameAction extends Action<TypesNames.SORT_BY_NAME> {
	filterDrinkArr: Drink[];
}
export interface SetSortBYNameAction extends Action<TypesNames.SET_SORT_BY_NAME> {
	filterDrinkArr: Drink[];
}
export interface SortBYDateAction extends Action<TypesNames.SORT_BY_DATE> {
	filterDrinkArr: Drink[];
}
export interface SetSortBYDateAction extends Action<TypesNames.SET_SORT_BY_DATE> {
	filterDrinkArr: Drink[];
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

