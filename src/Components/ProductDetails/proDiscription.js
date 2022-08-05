import React from "react";
import { useEffect, useState } from "react";
import classes from './ProductDetailes.module.css';
import DigitalDescription from './discriptions/digitalDescription';
import MobsDescription from './discriptions/mobsDescription';
import TvsDescription from './discriptions/tvsDescription';
import LabsDescription from './discriptions/labsDescription';
import TabsDescription from './discriptions/tabsDescription';

const ProDiscription = ({Product,category}) => {
    // console.log(category, Product);

    return (
        <>
            {
                category=='digital cards'?
                    <DigitalDescription Product={Product} category={category}/>
                :(
                    category == 'Mobile Phones'?
                        <MobsDescription Product={Product} category={category}/>
                    :(
                        category == 'tvs'?
                            <TvsDescription Product={Product} category={category}/>
                        :(
                            category == 'labtops'?
                                <LabsDescription Product={Product} category={category}/>
                            :(
                                category == 'tablets'?
                                    <TabsDescription Product={Product} category={category}/>
                                :''
                            )
                        )
                    )
                )
            }
        </>
    )
}
export default ProDiscription;