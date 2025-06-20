import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
    test('no debe agregarse a la categoria si ya existe', () => {
        const inputValue = 'Pinguinos'
        render( <GifExpertApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form')
        fireEvent.input(input, { target: { value: inputValue}});
        fireEvent.submit( form );

        // Aquí validamos que no haya más de una categoría (solo 'Pinguinos')
        const items = screen.getAllByText('Pinguinos');
        expect(items.length).toBe(1); // Solo debería haber una vez 'Pinguinos'
    });

    test('debe agregarse si es una categoría nueva', () => {
    const inputValue = 'Carro';

    render(<GifExpertApp />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    // Debe aparecer 'Carro' en el DOM
    expect(screen.getByText(inputValue)).toBeTruthy();

    // Opcionalmente: validar que ahora haya dos categorías
    const headings = screen.getAllByRole('heading', { level: 3 }); // suponiendo que GifGrid usa <h3>
    screen.debug();
    expect(headings.length).toBe(2);
});

});