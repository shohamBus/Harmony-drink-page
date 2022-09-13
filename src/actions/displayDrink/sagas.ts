/* eslin-disable */
import { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';
import api from 'requests';
import { DisplayDrinkActions } from './redux';

export function* getRandomDrinks() {
	const response: AxiosResponse<any> = yield call(api.getRandom);
	const drinkDerty: any = response.data.drinks[0];
	
	const ingredient: string[] = [];
	// eslint-disable-next-line no-restricted-syntax
	for (const key in drinkDerty) {
		if (key.startsWith('strIngredient') && drinkDerty[key]) {
			ingredient.push(drinkDerty[key]);
		}
	}
	const drinkClean: any = {
		idDrink: drinkDerty?.idDrink,
		strDrink: drinkDerty?.strDrink,
		strCategory: drinkDerty?.strCategory,
		ingredient,
		dateModified: drinkDerty?.dateModified,
		strDrinkThumb: drinkDerty?.strDrinkThumb,
		strGlass: drinkDerty?.strGlass,
		strInstructions: drinkDerty?.strInstructions,
		strTags: drinkDerty?.strTags,
	};
	yield put(DisplayDrinkActions.getDisplayDrink(drinkClean));
}
	
