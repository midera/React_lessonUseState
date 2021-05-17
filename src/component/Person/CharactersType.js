import {Link} from 'react-router-dom'
export default function CharactersType({item,url}) {
    return (
        <div>
            {item.id}-{item.name && item.name.last }<Link to={url+'/'+item.id} ><button>person   details</button></Link>

        </div>
    );
}