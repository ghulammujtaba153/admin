import axios from "axios";

const URL='http://localhost:3001'

export const getDeliveryProducts = async () => {
    try {
        const res = await axios.get(`${URL}/delivery`);
        return res.data;
        
    } catch (error) {
        console.log(error)
    }
}

export const getOrderedProducts = async () => {
    try {
        const res = await axios.get(`${URL}/orders`);
        return res.data;
        
    } catch (error) {
        console.log(error)
    }
}

export const getOrderedProductDetail = async (id) => {
    try {
        
        const res = await axios.get(`${URL}/orders/${id}`);
        return res.data;
        
    } catch (error) {
        console.log(error)
    }
}


export const fetchBasicStats = async () => {
    try {
        const res = await axios.get(`${URL}/stats`);
        return res.data;
        
    } catch (error) {
        console.log(error)
    }
}