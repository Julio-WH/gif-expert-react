// 1-. Importaciones de React



// 2-. Importaciones de Tercero
import { fireEvent, render, screen } from "@testing-library/react";

// 3-. Importacion de nuestro codigo
import { AddCategory } from "../../src/components";


describe('Pruebas en < AddCategory />', () => {
    test('debe de cambiar el valor de la caja de texto', () => {
        render( < AddCategory onNewCategory={ () => {} } /> );
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Saitama'}});
        expect( input.value ).toBe('Saitama');

    });

    test('debe de llamar OnNewCategor y si el input tiene un valor', () => {
        
        const inputValue = 'Saitama'
        const onNewCategory = jest.fn();

        render( < AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form')
        fireEvent.input(input, { target: { value: inputValue}});
        fireEvent.submit( form );

        expect( input.value ).toBe('');

        expect ( onNewCategory ).toHaveBeenCalled(); // Que la funcion haya sido llamada
        expect ( onNewCategory ).toHaveBeenCalledTimes(1); // Que la funcion haya sido llamada solo una vez
        expect ( onNewCategory ).toHaveBeenCalledWith( inputValue ) // Que la funcion haya sido llamada con nuestro valor inputValue

    });

    test('no debe de llamar el onNewCategory si el input esta vacio', () => {
        const onNewCategory = jest.fn();
        render( < AddCategory onNewCategory={ onNewCategory } /> );

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect ( onNewCategory ).toHaveBeenCalledTimes(0); // Forma 1
        expect ( onNewCategory ).not.toHaveBeenCalled(); // Forma 2

    });
})