import axios from 'axios';
import {camelizeKeys} from 'humps'

const getUserList = (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`, page)
            .then(res => camelizeKeys(res.data))
}
export const UserServices = {
    getUserList
}