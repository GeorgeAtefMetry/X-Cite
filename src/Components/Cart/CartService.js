export const AddToCart = (pId, cookies, fun)=>{
    let date = new Date();
    date.setDate(date.getDate()+3)
    console.log(cookies.Cart)
    if(cookies.Cart)
    {
        (cookies.Cart).push(pId);
        fun('Cart', cookies.Cart, {
            path:'/',
            expires: date,
        })
    }
    else
    {
        fun('Cart', [pId], {
            path:'/',
            expires: date,
        })
    }
}


// export function AddToCart(pId)
// {
//     let date = new Date();
//     date.setDate(date.getDate()+3)
//     const [cookies, setCookies] = useCookies(['Cart']);

//     setCookies('Cart', '[3,6,2,9,5]',{
//         path: '/', expires: date
//       })
    // document.cookie = 'IDs='+pId+';expires='+date;
    // document.cookie = 'IDs='+'[2,8,1,6,90]'+';expires='+date;
// }

// export const getCart=()=>
// {
//     const [cookies, setCookies] = useCookies(['Cart']);
//     return cookies.Cart;
    // var arr = new Array();
    // var arrsplited = document.cookie.split(";");

    // for (let i =0; i<arrsplited.length; i++)
    // {
    //     arr[i] = arrsplited[i].split("=")[1];
    // }
    // return arr;
// }