import {put, call, takeLatest} from 'redux-saga/effects';
import {UserServices} from '../../Services/UserServices';
import {USER_CONSTANTS} from './constants';
import {UserActions} from './Actions';

function* getUser({page}){
    try{
        const resp = yield call(UserServices.getUserList, page)
        yield put(UserActions.setUser(resp))
    } catch( err ){
        yield put(UserActions.getUserError(err))
    }
}
export default function* watcher() {
    yield takeLatest(USER_CONSTANTS.GET_USER_LIST, getUser)
}