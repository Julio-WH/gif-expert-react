// 1-. Importaciones de React

// 2-. Importaciones de Tercero
import PropTypes from 'prop-types';

// 3-. Importacion de nuestro codigo

export const GifItem =( { title , url } ) => {
    return (
        <div className="card">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
   
}

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default GifItem