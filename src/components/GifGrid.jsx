// 1-. Importaciones de React

// 2-. Importaciones de Tercero
import PropTypes from 'prop-types';

// 3-. Importacion de nuestro codigo
import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/userFetchGifs";

export const GifGrid =({ category }) => {
                
    const { images, isLoading } = useFetchGifs( category );

    /* Se convertio a customHook

        const [images, setImages] = useState([]);

        // forma 2
        const getImages = async() => {
            const newImages = await getGifs( category );
            setImages( newImages );
        }

        useEffect ( () => {
            // getGifs().then(newImages => setImages(newImages)) forma 1
            getImages(); // forma 2
        }, [])
    */

    return (
        <>
            <h3>{ category }</h3>

            {
                isLoading && ( <h2>Cargando ...</h2> )
            }

            <div className="card-grid">
                
                {images.map( (image) => (
                    <GifItem 
                        key={ image.id }
                        { ...image } // esparcimos todo las props de image
                    />
                    
                ))}
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}

export default GifGrid
