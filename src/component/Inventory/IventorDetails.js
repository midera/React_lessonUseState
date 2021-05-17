import {useEffect, useState} from "react";
import {getInventoryInfo} from "../Service/api";

export default function IventorDetails({match:{params:{InventId}}}) {
    let [inventoryDetails, setInventoryDetails] = useState(null);

    useEffect(() => {
        getInventoryInfo(InventId).then(val => setInventoryDetails({...val.data}));
    }, []);
    return (
        <div>

            {inventoryDetails?.title ? inventoryDetails.title : 'no title'} - {inventoryDetails?.id ? inventoryDetails.id : 'no id'}
            {inventoryDetails?.category ? inventoryDetails?.category : 'no category'}
            {inventoryDetails?.description ? inventoryDetails?.description : 'no description'}


        </div>
    );
}