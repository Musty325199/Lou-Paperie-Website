import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    products: [],
    totalPrice: 0,
    totalQuantity: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers : {
        addToCart(state, action) {
            const newItem = action.payload;
            const itemIndex = state.products.find((item) => item.id === newItem.id);

            if(itemIndex) {
                itemIndex.quantity++;
                itemIndex.totalPrice = itemIndex.quantity * newItem.price
            }else {
                state.products.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: parseFloat(newItem.price),
                    quantity: 1,
                    totalPrice: parseFloat(newItem.price),
                    image: newItem.image
                })
            }
            state.totalPrice = state.products.reduce((total, item) => total + item.totalPrice, 0);
            state.totalQuantity = state.products.reduce((total, item) => total + item.quantity, 0);
        },
        removeFromCart(state, action){
           const id = action.payload;
           const findItem = state.products.find((item) => item.id === id);

           if(findItem) {
            state.totalPrice -= findItem.totalPrice
            state.totalQuantity -= findItem.quantity
            state.products = state.products.filter(item => item.id !== id);
           }
        },
        increaseQuantity(state, action){
            const id = action.payload;
            const findItem = state.products.find((item) => item.id === id);

            if(findItem) {
                findItem.quantity++;
                findItem.totalPrice += findItem.price
                state.totalQuantity++;
                state.totalPrice += findItem.price
            }
        },
        decreaseQuantity(state, action) {
            const id = action.payload;
            const findItem = state.products.find((item) => item.id === id);
            
            if(findItem.quantity > 1) {
                if(findItem) {
                    findItem.quantity--;
                    findItem.totalPrice -= findItem.price
                    state.totalQuantity--;
                    state.totalPrice -= findItem.price
                }
            }
        
        }
    }

})


export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions
export default cartSlice.reducer