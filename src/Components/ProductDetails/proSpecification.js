import React from "react";

const ProSpecification = ({Product, attributes}) => {
    return (
        <>
            <table className="data-table col-md-10" id="product-attribute-specs-table1">
                <tbody> 
                    {
                        attributes.map((attribute)=>(
                                <tr key={attribute}>
                                    <th >
                                       {attribute}                               
                                    </th>
                                    <td >
                                        {Product[attribute]+''}                                    
                                    </td>
                                </tr>
                        ))
                    }                                                    
                </tbody>
            </table>
        </>
    )
}
export default ProSpecification;