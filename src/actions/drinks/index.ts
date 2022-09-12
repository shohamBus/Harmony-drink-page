import { all, fork, takeLatest } from 'redux-saga/effects';
import { createSaga } from '@base/features/base-decorator';
import * as Sagas from 'actions/drinks/sagas';
import { DrinksTypes } from 'actions/drinks';

/* ------------- Export Redux ------------- */
export * from 'actions/drinks/redux';

/* ------------- Export Sagas ------------- */
function* watchMySaga() {
	yield takeLatest(DrinksTypes.GET_DRINKS, createSaga(Sagas.getDrinks));
}

// TODO: Do Not Forget to Add your new saga to index file
export function* drinksSaga() {
	yield all([
		fork(watchMySaga)
	]);
}
