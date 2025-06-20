// 1-. Importaciones de React

// 2-. Importaciones de Tercero
import { render, screen } from "@testing-library/react";

// 3-. Importacion de nuestro codigo
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/userFetchGifs";

jest.mock('../../src/hooks/userFetchGifs');

describe('Pruebas en < GifGrid />', () => {

    const category = 'One Punch';

    test('debe mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={ category } /> );
        expect( screen.getByText('Cargando ...'));
        expect( screen.getByText( category ));

    });

    test('debe de mostrar items cuando se cargan las imagenes useFetchGif', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={ category } /> );
        expect( screen.getAllByRole('img').length ).toBe(2);

    });

});