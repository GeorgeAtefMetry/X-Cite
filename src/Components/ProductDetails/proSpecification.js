import React from "react";
import { useTranslation } from "react-i18next";

const ProSpecification = ({Product, attributes, attributesAR}) => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <table className="data-table col-md-10" id="product-attribute-specs-table1">
                <tbody> 
                    {
                        attributes.map((attribute)=>(
                                <tr key={attribute}>
                                    <th >
                                       {t(attribute)}                               
                                    </th>
                                    <td >
                                        {Product[i18n.language=="en"?attribute:attribute+'AR']+''}                                    
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