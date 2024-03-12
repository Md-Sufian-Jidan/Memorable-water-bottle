const getStoredCart =() => {
    const storedCardString = localStorage.getItem('cart');
    if(storedCardString){
        return JSON.parse(storedCardString)
    }
    return [];
}

const savedCartToLs = (cart) => {
    const cartStringField = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringField);
}

const addToLs = (id) => {
    const cart = getStoredCart();
    cart.push(id);
    // save to local storage
    savedCartToLs(cart)
}

export {addToLs , getStoredCart}