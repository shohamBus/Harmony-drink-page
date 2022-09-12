import { Action } from 'redux';

/* ------------- Define Actions and State ------------- */
export interface Display{
	display: Drink;
}

export enum TypesNames {
	GET_DISPLAY_DRINK = 'GET_DISPLAY_DRINK',
	GET_RANDOM_DRINK = 'GET_RANDOM_DRINK',
}

export declare function GetDisplayDrinkFunction(idDrink: Drink): GetDisplayDrinkAction;
export declare function GetRandomDrinkFunction(): GetRandomDrinkAction;

export interface ActionCreator {
	getDisplayDrink: typeof GetDisplayDrinkFunction;// handle by saga
	getRandomDrink: typeof GetRandomDrinkFunction;// handle by saga 

}

export interface GetDisplayDrinkAction extends Action<TypesNames.GET_DISPLAY_DRINK> {
	data: Drink;
}
export interface GetRandomDrinkAction extends Action<TypesNames.GET_RANDOM_DRINK> {
	data: Drink;
}

/* ------------- Define Any Interfaces ------------- */
export interface Drink {
	idDrink: string;
	strDrink: string;
	strCategory: string;
	ingredient: string[];
	dateModified: string;
	strGlass: string;
	strInstructions: string;
	strDrinkThumb: string;
	strTags: string;
}
