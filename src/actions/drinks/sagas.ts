import { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';
import api from 'requests';
import {
	GetDrinksAction, Drink, FilterByIngredientAction, SortBYDateAction, SortBYNameAction,
} from 'actions/drinks/interface';
import { DrinksActions } from './redux';
import { FilterInputIngredient, sortingByDate, sortingByName } from './manager';

export function* getDrinks(action: GetDrinksAction) {
	const { inputStrName } = action;
	const response: AxiosResponse<Drink[] | any> = yield call(api.getDrinks, inputStrName);
	const drinkDerty: any = response?.data?.drinks;
	const drinkClean: Drink[] = drinkDerty?.map((drinkItem: any) => {
		const ingredient: string[] = [];
		// eslint-disable-next-line no-restricted-syntax
		for (const key in drinkItem) {
			if (key.startsWith('strIngredient') && drinkItem[key]) {
				ingredient.push(drinkItem[key]);
			}
		}
		const drink: Drink = {
			idDrink: drinkItem?.idDrink,
			strDrink: drinkItem?.strDrink,
			strCategory: drinkItem?.strCategory,
			ingredient,
			dateModified: drinkItem?.dateModified,
			strDrinkThumb: drinkItem?.strDrinkThumb,
			strGlass: drinkItem?.strGlass,
			strInstructions: drinkItem?.strInstructions,
			strTags: drinkItem?.strTags,
		};
		return drink;
	});
	yield put(DrinksActions.setDrinks(drinkClean));
}

export function* filterByIngredient(action: FilterByIngredientAction) {
	const { inputStrIngredient, drinkArr } = action;
	const res = FilterInputIngredient(inputStrIngredient, drinkArr);
	yield put(DrinksActions.setFilterByIngredient(res));
}

export function* sortBYName(action: SortBYNameAction) {
	const { filterDrinkArr } = action;
	const res = sortingByName(filterDrinkArr);
	yield put(DrinksActions.setSortBYName(res));
}

export function* sortBYDate(action: SortBYDateAction) {
	const { filterDrinkArr } = action;
	const res = sortingByDate(filterDrinkArr);
	yield put(DrinksActions.setSortBYDate(res));
}
