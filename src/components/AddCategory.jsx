import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChanged = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log('inputValue', inputValue);
        if ( inputValue.trim().length <= 1) return;
        // setCategories(categories =>[inputValue, ...categories]);
        setInputValue('');
        onNewCategory( inputValue.trim() );
        
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifss"
                value={ inputValue }
                onChange={ onInputChanged }
            />
        </form>
        
    )
}

export default AddCategory
