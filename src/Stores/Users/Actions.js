import {USER_CONSTANTS} from './constants';

const getUser = page => ({
    type: USER_CONSTANTS.GET_USER_LIST,
    page
})
const setUser = userList => ({
    type: USER_CONSTANTS.SET_USER_LIST,
    userList,
})
const getUserError = err => ({
    type: USER_CONSTANTS.GET_USER_LIST_ERROR,
    err
})
export const UserActions = {
    getUser,
    setUser,
    getUserError,
}
