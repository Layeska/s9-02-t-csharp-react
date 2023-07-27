import { useState } from "react"

export default function useCategory(){
    const [selectId, setSelectId] = useState(null)
    const[selectIdOffer, setSelectIdOffer] = useState(null)

    const handleSelectId = (id: any) => {
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