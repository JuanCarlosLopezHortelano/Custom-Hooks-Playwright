import { useEffect, useState } from "react"
import './App.css'
import {getRandomFact} from './services/facts.js'

const CAT_PREFIX_IMAGE_URL = `https://cataas.com/`;

function useCatImage ({fact}){
    const [imageURL, setImageUrl] = useState ()
  // para recuperar la imagen cada vez que tenemos una cita nueva
    useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
    .then(res => res.json())
    .then(response => {
        const { _id } = response
        const url = `/cat/${_id}/says/${threeFirstWords}`
        setImageUrl(url)
    })
}, [fact])

return { imageURL: `${CAT_PREFIX_IMAGE_URL}${imageURL}` }
}


export function App () { 

    const [fact, setFact] = useState ()

    const {imageURL} = useCatImage( {fact} )
    const [factError, setFactError] = useState ()
    const handleClick = async() => {
    const newFact = await getRandomFact()
    setFact(newFact)
    }

    //UN efecto -- react 1 efecto => 1 responsabilidad
    useEffect(()=>{
        getRandomFact().then(newFact => setFact(newFact))
    }
    , [])

    //para recuperar la imgagen



    //useEffect(()=>{},[])

    return (
        <main >
        <h1>App de gatos</h1>
        <section>
        <button onClick={handleClick}>NUEVO FACT</button> 
        
        {fact &&  <p>{fact}</p>}
        {imageURL &&  <img src={imageURL} />}
        </section>
        </main>

)
}