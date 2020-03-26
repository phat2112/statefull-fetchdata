import {all} from 'redux-saga/effects'
import UserSagas from '../Users/Sagas'

export default function* rootSaga(){
	yield all([
		UserSagas(),
	])
}
