import {
    createStore
} from "redux";
import cartReducer from "./cart/cartReducer";
// creating a store from the reducer
export const store = createStore(
    cartReducer,
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
);
store.subscribe(() => {
    localStorage.setItem("cartItems", JSON.stringify(store.getState().addedItems));
    // seting "total"  to local storage for cart  persistent
    localStorage.setItem("total", JSON.stringify(store.getState().total));
});
export default store;