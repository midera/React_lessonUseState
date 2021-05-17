import {useEffect, useState} from "react";
import {getCharacterDetail} from "../Service/api";

export default function CharactersDetails({characterId}) {
    let [characterDetail, setCharactersDetails] = useState('');

    useEffect(() => {
        getCharacterDetail(characterId).then(val => setCharactersDetails({...val.data}));
    }, []);

    let infoPerson= characterDetail ? characterDetail : 'No Info';

    return (
        <div >
            <div >
                {infoPerson.name ?
                    <h2>
                        <span>{infoPerson.id}. </span>
                        {infoPerson.name.first} - {infoPerson.name.middle} - {infoPerson.name.last}</h2> :
                    'No Info'}
                <img src={infoPerson.images ? infoPerson.images.main : 'No photo'} alt=""/>
            </div>
            <div >
                <h4>All phrases:</h4>
                <ul>
                    {
                        infoPerson.sayings ? infoPerson.sayings.map((phrase, i) => <li key={i}>{phrase}</li>) : 'No phrases!'
                    }
                </ul>
            </div>
        </div>
    );
}