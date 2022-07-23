import { useParams } from "react-router-dom";

const BrandDetailes = ()=>{
    const params = useParams()
    return(
        <>
        <h2>{params.id}</h2>
        </>
    );
}
export default BrandDetailes;