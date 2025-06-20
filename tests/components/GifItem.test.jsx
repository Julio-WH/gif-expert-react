// 1-. Importaciones de React
import { render, screen } from "@testing-library/react";

// 2-. Importaciones de Tercero

// 3-. Importacion de nuestro codigo
import { GifItem } from "../../src/components";

describe('Pruebas en < GifItem />', () => {

    const title = 'Pingui';
    const url = 'https://www.pingui.xd/';
    
    test('debe de hacer match con el snapshot', () => {
        const { container } = render( < GifItem title={ title } url={ url } /> );
        expect( container ).toMatchSnapshot();

    });
    
    test('debe de mostrar la imagen con el URL y el ALT', () => {
        render( < GifItem title={ title } url={ url } /> );
        // screen.debug(); para ver el contenido del componente
        
        /*
            forma 1
            expect(screen.getByRole('img').src).toBe( url );
            expect(screen.getByRole('img').alt).toBe( title );
        */
       // Forma 2 mas limpia
       const { src, alt } = screen.getByRole('img');
       expect( src ).toBe( url );
       expect( alt ).toBe( title );

    });

    test('debe de mostrar el titulo en el componente', () => {
        render( < GifItem title={ title } url={ url } /> );
        expect( screen.getByText( title ) ).toBeTruthy(); // Valida que exista el title en el componente

    });
})