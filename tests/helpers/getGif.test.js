// 1-. Importaciones de React

// 2-. Importaciones de Tercero

// 3-. Importacion de nuestro codigo
import getGifs from "../../src/helpers/getGifs";


describe('Pruebas en getGifs()', ()=> {
    test('debe de retornar un arreglo de gifs', async() => {
        const gifs = await getGifs('pinguinos')
        expect( gifs.length ).toBeGreaterThan( 0 );

        // Validamos que gifs  tenga estos en su dict
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String )
        });
    });

});