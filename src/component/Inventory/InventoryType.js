import {Link} from "react-router-dom";
export default function InventoryType({info, url}) {
    return (
        <div>
            {info.id} - {info.title} => <Link to={`${url}/${info.id}`}>Full info</Link>
        </div>
    );
}