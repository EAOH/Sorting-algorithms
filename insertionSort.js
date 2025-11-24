/**
 * Ordena un arreglo utilizando el algoritmo Insertion Sort.
 * 
 * Este algoritmo recorre la lista y va insertando cada elemento
 * en la posición correcta dentro de un arreglo auxiliar ya ordenado.
 * Soporta tanto números como objetos, permitiendo especificar una clave (`key`)
 * para ordenar por una propiedad en particular.
 *
 * @param {Array<number|Object|string>} lista - Arreglo de números u objetos a ordenar.
 * @param {string} [key] - Clave opcional para ordenar objetos por una propiedad.
 * @returns {Array<number|Object|string>} - Arreglo ordenado de menor a mayor.
 *
 * @example
 * // Ordenar números
 * InsertionSort([5, 3, 8, 1, 2]);
 * // Devuelve [1, 2, 3, 5, 8]
 *
 * @example
 * // Ordenar objetos por una propiedad
 * const personas = [
 *   { nombre: "Ana", edad: 25 },
 *   { nombre: "Luis", edad: 20 },
 *   { nombre: "Pedro", edad: 30 }
 * ];
 * InsertionSort(personas, "edad");
 * // Devuelve [
 * //   { nombre: "Luis", edad: 20 },
 * //   { nombre: "Ana", edad: 25 },
 * //   { nombre: "Pedro", edad: 30 }
 * // ]
 */

export default function InsertionSort(lista, key) {
    let Insertion = []


    for (let i = 0; i < lista.length; i++) {
        // Inserta el elemento actual en el arreglo auxiliar
        Insertion.push(lista[i]);
        // Recorre el arreglo auxiliar para ubicar el nuevo elemento
        for (let j = 0; j < Insertion.length; j++) {

            // Comparación: si hay clave, compara por propiedad; si no, compara directamente
            if (j > 0 && key ? Insertion[j][key] < Insertion[j - 1][key] : Insertion[j] < Insertion[j - 1]) {
                 // Intercambia elementos (swap)
                let temp = Insertion[j - 1];
                Insertion[j - 1] = Insertion[j];
                Insertion[j] = temp;
                // Retrocede dos posiciones para seguir verificando hacia atrás
                j -= 2;
            }

        }
    }
    return Insertion;
}