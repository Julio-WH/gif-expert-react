// 1-. Importaciones de React
import { useState } from 'react'

// 2-. Importaciones de Tercero
import PropTypes from 'prop-types';

// 3-. Importacion de nuestro codigo

export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChanged = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        if ( inputValue.trim().length <= 1 ) return;
        // setCategories(categories =>[inputValue, ...categories]);
        
        onNewCategory( inputValue.trim() );
        setInputValue('');
        
    }

    return (
        <form onSubmit={ onSubmit } aria-label='form'>
            <input 
                type="text"
                placeholder="Buscar gifss"
                value={ inputValue }
                onChange={ onInputChanged }
            />
        </form>
        
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}

export default AddCategory
