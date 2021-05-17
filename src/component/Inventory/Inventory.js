
import {useState, useEffect} from 'react';
import {Route, Switch} from "react-router-dom";
import {getInventory} from "../Service/api";
import InventoryType from "./InventoryType";
import IventorDetails from "./IventorDetails";

export default function Inventory({match:{url}}) {
    let [inventory, setInventory] = useState(null);

    useEffect(() => {
        getInventory().then(val => setInventory([...val.data]));

    }, []);

    return (
        <div className='inventory'>
            <div className='inventory-main'>
                <h1>Inventory</h1>
                {
                    inventory.map(item => <InventoryType key={item.id} info={item} url={url}/>)
                }
            </div>
            <Switch>

                <Route path={`${url}/:InventId`} component={IventorDetails}/>
            </Switch>
        </div>
    );
}