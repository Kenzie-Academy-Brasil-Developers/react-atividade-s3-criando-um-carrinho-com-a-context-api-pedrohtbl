import { createContext, useContext, useState } from "react";

export const CatalogueContext = createContext([])

export const CatalogueProvider = ({children})=>{
    const [catalogue, setCatalogue] = useState([
        {name: "Book", price:20},
        {name: "T-shirt", price:50},
        {name: "Banana", price:3}
    ])


    const addToCatalogue = (item) =>{
        setCatalogue([...catalogue,item])
    }

    const removeFromCatalogue = (item) =>{
        const newCatalogue = catalogue.filter(
            product => product.name !== item.name
        )
        setCatalogue(newCatalogue)
    }

    return(
        <CatalogueContext.Provider value={{catalogue,addToCatalogue,removeFromCatalogue}}>
            {children}
        </CatalogueContext.Provider>
    )
}

export const useCatalogue = () => useContext(CatalogueContext)