import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartitems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartitemsCount = createSelector(
    [selectCartitems],
    cartItems => 
    cartItems.reduce(
        (accumaltedQuantity, cartItem) =>
        accumaltedQuantity + cartItem.qauntity,
        0
    )
)