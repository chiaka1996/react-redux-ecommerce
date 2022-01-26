//add products to cart
export const addToCart = (addedProduct) => {
    return { 
        type : 'ADDTOCART',
        payload : addedProduct
    }
}

export const  AddQuantityToCart = (initialQuantity) => {
    return {
        type : 'INITIALQUANTITY',
        payload : initialQuantity
    }
}

//update Quantity
export const updateQuantity = (index, quantity) => {
    return {
        type : 'UPDATEQUANTITY',
        payload : quantity,
        payload2 : index
    }
}
 
//sidebar and nav toggle
export const sideBarToggleHandler = (booleanCheck) => {
    return {
        type : 'SIDEBARTOGGLE',
        payload : booleanCheck
    }
}

 
//add subtotal to cart
export const cartSubTotal =  (subtotal) => {
    return {
        type : 'CARTSUBTOTAL',
        payload : subtotal
    }
}

//update subtotal when quantity of product increases
export const updateSubTotal = (index, quantity, price) => {
    return {
        type : 'UPDATESUBTOTAL',
        payload : quantity,
        payload2 : index,
        payload3 : price
    }
}

export const deleteProductFromCart = (i) => {
    return {
        type : 'DELETEFROMCART',
        payload : i
    }
}


export const addClothForSale = (addProduct) => {
    return{
        type : 'ADDPRODUCTFORSALE',
        payload : addProduct
    }
}

export const addShoesForSale = (addProduct) => {
    return{
        type : 'ADDSHOESFORSALE',
        payload : addProduct
    }
}


//edit product index
export const editDeleteProductIndex = (index) => {
    return {
        type : 'EDITDELETEPRODUCTINDEX',
        payload : index
    }
}

//set user logged in or not
export const LoginCheck = (check) => {
    return {
        type : 'CHECKIFUSERISLOGGEDIN',
        payload : check
    }
}

//set loginProfile, this is the profile sent to the front end when a user login.
export const LoginProfile = (profile) => {
    return {
        type : 'USERPROFILE',
        payload : profile
    }
}

// toggle the profile and order
export const ToggleProfileOrder = (bool) => {

    return{
        type : 'TOGGLEBETWEENPROFILEANDORDER',
        payload : bool
    }
}

// update the quantity of products in cart
export const updateProductInCartQuantity = (i, qty) => {

    return{
        type : 'UPDATEPRODUCTINCARTQUANTITY',
        payload : i,
        payload2 : qty
    }
}

//remove all products from cart
export const RemoveAllCartProducts = (prod) => {
    return {
        type : 'REMOVEALLPRODUCTSFROMCART',
        payload : prod
    }
}

//edit product name. sets the the edit product to either cloths or shoes in the admin panel
export const EditProductValue = (val) => {
    return {
        type : 'SETEDITPRODUCTVALUE',
        payload : val
    }
}

//check if the admin is logged in or not
export const AdminCheck = (val) => {
    return {
        type : 'CHECKIFTHEADMINISLOGGEDIN',
        payload : val
    }
}