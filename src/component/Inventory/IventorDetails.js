import {useEffect, useState} from "react";
import {getInventoryDetails} from "../Service/api";



export default function IventorDetails({match:{params:{InventId}}}) {
    let [inventoryDetails, setInventoryDetails] = useState(null);

    useEffect(() => {
        getInventoryDetails(InventId).then(val => setInventoryDetails({...val.data}));
    }, []);
    console.log(inventoryDetails)

    return (
        <div>
             <hr/>
            <h3>{inventoryDetails?.title ? inventoryDetails.title : 'no title'} - {inventoryDetails?.id ? inventoryDetails.id : 'no id'}</h3>
            <span>{inventoryDetails?.category ? inventoryDetails?.category : 'no category'}</span>
            <p>{inventoryDetails?.description ? inventoryDetails?.description : 'no description'}</p>



        </div>
    );
}