import React, {useEffect, useState} from 'react';
import {Gif} from '../components/Gif'
import getGifs from '../services/getGifs';

export default function ListOfGifs ({params}){
    const {keyword} = params
    const [gifs, setGifs] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(function (){
        setLoading(true)
        getGifs({keyword})
        .then(gifs => {
            setGifs(gifs)
            setLoading(false)
        })
    },[keyword]) 

    if(loading) return <i>Loading...</i>

    return <>
        {
            gifs.map(({id, title, url}) =>
            <Gif 
                id ={id} 
                key={id}
                title={title} 
                url={url}
            />
        )
        }
    </>   
}
