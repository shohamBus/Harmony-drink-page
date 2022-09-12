import { combineReducers, Reducer } from 'redux';
import { fork, all } from 'redux-saga/effects';
import baseReducers, { BaseApplicationState } from '@base/features/base-reducers';

/* ------------- Import States ------------- */
import { DrinksState } from 'actions/drinks/interface';
import { Display } from 'actions/displayDrink/interface';

/* ------------- Import Sagas ------------- */
import { drinksSaga } from 'actions/drinks';
import { displayDrinkSaga } from 'actions/displayDrink';
/* ------------- Define ApplicationState ------------- */
export interface ApplicationState extends BaseApplicationState {
	drinks: DrinksState;
	display: Display;
}

/* ------------- Export Reducers ------------- */
export const rootReducer: Reducer<ApplicationState> = combineReducers<ApplicationState>({
	...baseReducers,
	drinks: require('./drinks').reducer,
	display: require('./displayDrink').reducer,

});

/* ------------- Export Sagas ------------- */
export const rootSaga = function* () {
	yield all([fork(drinksSaga)]);
	yield all([fork(displayDrinkSaga)]);
};
