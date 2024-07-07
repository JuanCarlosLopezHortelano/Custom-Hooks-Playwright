import { useEffect, useState } from "react"
import './App.css'
import {useCatImage} from './hooks/useCatImage.js'
import {useCatFact} from './hooks/useCatFact.js'
import {Otro} from './Components/Otro.jsx'




export function App () { 

    const {fact, refreshFact} = useCatFact()
    const {imageURL} = useCatImage( {fact} )


    const handleClick = async() => {
    refreshFact()
    }

  

    //para recuperar la imgagen



    //useEffect(()=>{},[])

    return (
        <main >
        <h1>App de gatos</h1>
        <button onClick={handleClick}>NUEVO FACT</button> 
        
        {fact &&  <p>{fact}</p>}
        {imageURL &&  <img src={imageURL} />}
        <Otro />
        
        </main>

)
}