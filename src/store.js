import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice'

let cart = createSlice({
    name : 'cart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2,},
        {id : 1, name : 'Grey Yordan', count : 1},
        {id : 2, name : 'Yordan', count : 3},
        {id : 3, name : 'Grey', count : 4},
        {id : 4, name : 'Honey', count : 2}

      ],
    reducers: {
    countIncrease(state, action){
        state[action.payload].count++
    },
    addItem(state, action){
        state.push(action.payload)
    }
}
  })
  
export let {changeName, increase} =  user.actions;
export let {countIncrease, addItem} = cart.actions;

export default configureStore({
  reducer: {
    user : user.reducer,
    cart: cart.reducer
  }
})    