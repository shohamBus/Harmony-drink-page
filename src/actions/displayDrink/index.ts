import { all, fork, takeLatest } from 'redux-saga/effects';
import { createSaga } from '@base/features/base-decorator';
import * as Sagas from 'actions/displayDrink/sagas';
import { DisplayDrinkTypes } from 'actions/displayDrink';

/* ------------- Export Redux ------------- */
export * from 'actions/displayDrink/redux';

/* ------------- Export Sagas ------------- */
function* watchMySaga() {
	yield takeLatest(DisplayDrinkTypes.GET_RANDOM_DRINK, createSaga(Sagas.getRandomDrinks));
}

// TODO: Do Not Forget to Add your new saga to index file
export function* displayDrinkSaga() {
	yield all([
		fork(watchMySaga)
	]);
}
