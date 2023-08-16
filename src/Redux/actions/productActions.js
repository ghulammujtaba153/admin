import axios from 'axios'
import { ADD_PRODUCTS, DELETE_Product, FETCH_PRODUCTS } from './types';
const URL='http://localhost:3001'

export const addProduct = (product) => async (dispatch) => {
    try {
        
        const res = await axios.post(`${URL}/admin/product`, product);
        dispatch({type: ADD_PRODUCTS, payload:res.data})
        
        
    } catch (error) {
        console.log(error)
    }
}

//admin

export const getProduct = () => async (dispatch) => {
    try {
        const res = await axios.get(`${URL}/products`);
        dispatch({type: FETCH_PRODUCTS, payload:res.data})
        
    } catch (error) {
        console.log(error)
    }
}

export const deleteProduct = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${URL}/products/${id}`);
        dispatch({type: DELETE_Product, payload:res.data})
        
    } catch (error) {
        console.log(error)
    }
}





