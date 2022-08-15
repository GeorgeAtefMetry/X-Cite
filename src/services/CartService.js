export const AddToCart = async (pId, Amount, cookies, setCookies, dispatch, cartAction, setCokyChange)=>{
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
            setCokyChange(true);
        }
    }
    else
    {
        await setCookies('Cart', [{id:pId, amount: Amount}], {
            path:'/',
            expires: date,
        })
        dispatch(cartAction(1));
        setCokyChange(true);
    }
    // setCokyChange(true);
}

export const AddToUserCart = async (proId, amount, usr, db, doc, getDoc, updateDoc, dispatch, cartAction)=>{

    const usrdoc = doc(db, `users/${usr.uid}`);
    getDoc(usrdoc).then((res)=>{
        let data = res.data();
        data.cart.push({pId:proId, amount: parseInt(amount)})

        updateDoc(usrdoc,data)
        .then((res)=>{
            console.log(res)
            dispatch(cartAction(data.cart.length));
        })
    }).catch((err)=>{
            console.log(err);
        })
}

export const AddOrder = (newOrder)=>{
    let item = localStorage.getItem('Orders')
    if(item)
    {
        console.log(item);
        console.log(JSON.stringify([...JSON.parse(item), newOrder]));
        localStorage.setItem("Orders", JSON.stringify([...JSON.parse(item), newOrder]));
    }
    else
    {
        console.log(JSON.stringify([newOrder]));
        localStorage.setItem("Orders", JSON.stringify([newOrder]));
    }
}