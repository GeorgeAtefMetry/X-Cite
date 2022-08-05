export const AddToCart = async (pId, Amount, cookies, setCookies, dispatch, cartAction)=>{
    let date = new Date();
    date.setDate(date.getDate()+3)
    console.log(cookies.Cart)
    if(cookies.Cart)
    {
        // console.log('in cart', cookies.Cart.find((pro)=>pro.id==45))
        if(!cookies.Cart.find((pro)=>pro.id==pId))
        {
            (cookies.Cart).push({id:pId, amount: Amount});
            await setCookies('Cart', cookies.Cart, {
                path:'/',
                expires: date,
            })
            dispatch(cartAction(cookies.Cart.length));
        }
    }
    else
    {
        await setCookies('Cart', [{id:pId, amount: Amount}], {
            path:'/',
            expires: date,
        })
        dispatch(cartAction(1));
    }
}