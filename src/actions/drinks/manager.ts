import { Drink } from './interface';

export function FilterInputIngredient(inputStrIngredient: string, drinkArr: Drink[]) {
	const inp = inputStrIngredient.toLowerCase();
	return [...drinkArr].filter((drink) => {
		return drink.ingredient.find((item) => item.toLowerCase().startsWith(inp));
	});
}

export function sortingByDate(filterDrinkArr: Drink[]) {
	return [...filterDrinkArr]?.sort(
		(a, b) => Date.parse(b.dateModified) - Date.parse(a.dateModified)
	);
}

export function sortingByName(filterDrinkArr: Drink[]) {
	return [...filterDrinkArr]?.sort((a: Drink, b: Drink) => {
		if (a.strDrink > b.strDrink) {
			return 1;
		}
		if (b.strDrink > a.strDrink) {
			return -1;
		}
		return 0;
	});
}
