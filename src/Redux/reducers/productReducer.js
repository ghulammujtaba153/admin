const initialState = {
    products: null,
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_PRODUCTS':
        return {
          ...state,
          products: [...state.products, action.payload],
        };
      case 'FETCH_PRODUCTS':
        return{
          ...state,
          products: action.payload,
        };

      case 'DELETE_Product':
        return{
            ...state,
            products: state.products.filter((product)=>product._id!== action.payload),
        };
  
      default:
        return state;
    }
  };
  
  export default productReducer;