/* eslin-disable */
import { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';
import api from 'requests';
import { GetDrinksAction, Drink } from 'actions/drinks/interface';
import { DrinksActions } from './redux';

export function* getDrinks(action: GetDrinksAction) {
	const { data } = action;
	const response: AxiosResponse<Drink[] | any> = yield call(api.getDrinks, data);
	const drinkDerty: any = response.data.drinks;
	
	const drinkClean: Drink[] = drinkDerty.map((drinkItem: any) => {
		const ingredientKeys = Object.keys(drinkItem).filter((key) => key.startsWith('strIngredient'));
		const ingredientWithValues = ingredientKeys.filter((key) => drinkItem[key]);
		const ingredient = ingredientWithValues.map((key) => drinkItem[key]);
		const drink: Drink = {
			idDrink: drinkItem.idDrink,
			strDrink: drinkItem.strDrink,
			strCategory: drinkItem.strCategory,
			ingredient,
			dateModified: drinkItem.dateModified,
			strDrinkThumb: drinkItem.strDrinkThumb,
			strGlass: drinkItem.strGlass,
			strInstructions: drinkItem.strInstructions,
			strTags: drinkItem.strTags,
		};
		return drink;
	});
	yield put(DrinksActions.setDrinks(drinkClean));
}
