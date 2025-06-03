// 1-. Importaciones de React
import { useState } from "react";

// 2-. Importaciones de Tercero

// 3-. Importacion de nuestro codigo
import {AddCategory, GifGrid} from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Pinguinos']);

    const onAddCategory = (value) => {
        if ( categories.includes(value) ) return;
        setCategories([value, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
                onNewCategory = { (value) => onAddCategory(value)}
            />
            
            <ol>
                {
                    categories.map(category => (
                    <GifGrid  
                        key={category} 
                        category={category} />
                    ))
                }
            </ol>
        </>
    )
}