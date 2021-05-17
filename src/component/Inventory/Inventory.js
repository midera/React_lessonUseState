import {Route, Switch} from "react-router-dom";
import IventorDetails from "./IventorDetails";
import InventoryType from "./InventoryType";
import {useEffect, useState} from "react";
import {getInventory} from "../Service/api";

export default function Inventory({match:{url}}) {
    let [inventory, setInventory] = useState([]);

    useEffect(() => {
        getInventory().then(val => setInventory([...val.data]));
    }, []);

    return (
        <div >
            <div>
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