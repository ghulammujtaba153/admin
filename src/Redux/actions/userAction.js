import axios from "axios"
import { FETCH_USERS } from "./types"

const URL='http://localhost:3001'

export const gettingUsers=async()=>{
    try {
        console.log('sss')
        const res=await axios.get(`${URL}/users`)
        return res.data;
        //dispatch({type:FETCH_USERS, payload: res.data})
    } catch (error) {
        console.log(error.message)
    }
}