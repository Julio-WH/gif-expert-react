// 1-. Importaciones de React

// 2-. Importaciones de Tercero

// 3-. Importacion de nuestro codigo

export const GifItem =( { title , url } ) => {
    return (
        <div className="card">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
   
}

export default GifItem