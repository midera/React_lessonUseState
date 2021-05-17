import {useEffect, useState} from "react";
import CharactersType from "./CharactersType";


export default function Characters(props) {
    let {match: {url}} = props;
    let[persons,setCharacters]=useState([]);

    useEffect(()=>{
    fetch('https://api.sampleapis.com/futurama/characters')
        .then(value=>value.json())
        .then(value=>{
            setCharacters([...value])
        })
    },[])

    return (
        <div className={"wrap"}>
          <div className={"person-box"}> {
                persons.map((value,i)=> <CharactersType
                    key={i}
                    item={value}
                    url={url}

                   />)
            }
          </div>
        </div>
    );
}