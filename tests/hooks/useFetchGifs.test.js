// 1-. Importaciones de React

// 2-. Importaciones de Tercero
import { renderHook, waitFor } from "@testing-library/react";

// 3-. Importacion de nuestro codigo
import { useFetchGifs } from "../../src/hooks/userFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => {
    test('debe de regresar el estado inicial', () => {
        const { result } = renderHook( () => useFetchGifs('Goku'));
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

    });

    test('debe de retornar un arreglo de imagenes y isLoading en false', async() => {
        const { result } = renderHook( () => useFetchGifs('Goku'));
        
        // Hace la peticion
        await waitFor( 
            () => expect( result.current.images.length ).toBeGreaterThan(0) // que sea mayor a 0
        );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

    });
});