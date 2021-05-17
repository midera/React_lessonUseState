import {Link} from "react-router-dom";
export default function InventoryType({info, url}) {
    return (
        <div>
            {info.id} - {info.title}
          <button> <Link to={`${url}/${info.id}`}>Inventory details</Link></button>
        </div>
    );
}