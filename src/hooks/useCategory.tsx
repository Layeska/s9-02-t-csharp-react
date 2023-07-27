import { useState } from "react"

export default function useCategory(){
    const [selectId, setSelectId] = useState(null)
    const[selectIdOffer, setSelectIdOffer] = useState(null)

    const handleSelectId = (id) => {
        setSelectId(id)
    }
    const handleSelectOfferId = () => {
        setSelectIdOffer(selectIdOffer)
    }
    return{
        handleSelectId,
        handleSelectOfferId,
        selectId,
        selectIdOffer
    }

    
}