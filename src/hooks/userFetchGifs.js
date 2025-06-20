//CustomHook
// 1-. Importaciones de React
import { useEffect, useState } from "react";
import getGifs from "../helpers/getGifs";

// 2-. Importaciones de Tercero

// 3-. Importacion de nuestro codigo


export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    // forma 2
    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages( newImages );
        setIsLoading(false);
    }

    useEffect ( () => {
        // getGifs().then(newImages => setImages(newImages)) forma 1
        getImages(); // forma 2
    }, []);

    return {
        images,
        isLoading,

    }
}