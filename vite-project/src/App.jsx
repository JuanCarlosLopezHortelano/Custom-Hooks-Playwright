import { useEffect, useState } from "react"
import './App.css'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = `https://cataas.com/`;


export function App () { 

    const [fact, setFact] = useState ()
    const [imageURL, setImageUrl] = useState ()
    const [factError, setFactError] = useState ()
    //UN efecto -- react 1 efecto => 1 responsabilidad
    useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(res => 
        
        res.json())
    .then(data => {
        const {fact} = data
        setFact(fact)
    })
    }, [])

    //para recuperar la imgagen

    useEffect(() =>{
        if (!fact) return

        const threeFirstWords = fact.split(' ').slice(0, 3).join(' ')
        console.log(threeFirstWords)

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { _id } = response
        const url = `/cat/${_id}/says/${threeFirstWords}`
        setImageUrl(url)
      })

  }, [fact])

    //useEffect(()=>{},[])

    return (
        <main >
        <h1>App de gatos</h1>
        <section>
            
        {fact &&  <p>{fact}</p>}
        {imageURL &&  <img src={`${CAT_PREFIX_IMAGE_URL}${imageURL}`} />}
        </section>
        </main>

)
}