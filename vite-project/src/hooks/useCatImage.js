import { useEffect, useState } from "react"


const CAT_PREFIX_IMAGE_URL = `https://cataas.com/`;

export function useCatImage ({fact}){
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
