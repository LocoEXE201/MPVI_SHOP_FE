import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, Product } from '../../../interfaces';
import { RootState } from "../store";


 export const loadCartItems = (): CartItem[] => {
    const data = typeof window !== "undefined" ? localStorage.getItem("cartItems") : null;
    return data ? JSON.parse(data) : [];
  };
  
  const saveCartItems = (cartItems: CartItem[]) => {
    if(typeof window !== "undefined")
    {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  };

export interface CartState {
    cartItems: CartItem[];
}

const initialState: CartState = {
    cartItems: loadCartItems(),
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{

        increment: (state, action: PayloadAction<Product>) => {
            const item = state.cartItems.find((el) => el.product.categoryId === action.payload.categoryId);
      
            if (item) {
              item.quantity += 1;
            } else {
              state.cartItems.push({
                product: action.payload,
                quantity: 1,
              });
            }
            saveCartItems(state.cartItems);
          },
   

    decrement: (state, action:PayloadAction<Product>) =>{
        const item = state.cartItems.find((el) => el.product.categoryId === action.payload.categoryId);
        if(item) {
            item.quantity--;
            if(item.quantity === 0) {
                state.cartItems = state.cartItems.filter(
                    (el) => el.product.categoryId !== action.payload.categoryId
                );
            }
            saveCartItems(state.cartItems)
            }
        },

    clear: (state, action:PayloadAction<Product>) =>{
      const item = state.cartItems.find((el) => el.product.categoryId === action.payload.categoryId);
      if(item){
        item.quantity = 0;
        state.cartItems = state.cartItems.filter(
          (el) => el.product.categoryId !== action.payload.categoryId
      );
      }
      saveCartItems(state.cartItems)
    }   
    },

});


const cartItems = (state:RootState) => state.cart.cartItems;

export const totalCartItemSelector = createSelector([cartItems], (cartItems)=>
    cartItems.reduce((total:number, curr:CartItem) => (total += curr.quantity), 0)
);


export const totalPriceSelector = createSelector([cartItems], (cartItems)=>
cartItems.reduce((total:number, curr:CartItem)=> (total += curr.quantity * curr.product.priceSold), 0),
);

export const productQtySelector = createSelector(
    [cartItems, (cartItems, categoryId: number)=> categoryId ], 
    (cartItems, categoryId) => 
        cartItems.find((el) => el.product.categoryId === categoryId)?.quantity

);

export const {increment, decrement, clear} = cartSlice.actions;
export default cartSlice.reducer