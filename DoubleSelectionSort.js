/**
 * Intercambia dos elementos de un arreglo si son diferentes.
 * @param {Array} arr - El arreglo a modificar.
 * @param {number} i - Índice del primer elemento.
 * @param {number} j - Índice del segundo elemento.
 */
const Swaps = (arr = [], i, j) => {
    if (arr[i] !== arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
/**
 * Ordena un arreglo de valores primitivos usando Double Selection Sort.
 * @param {Array} arr - Arreglo de números o strings.
 * @param {boolean} [orderAsc=true] - Si es true, ordena ascendente; si no, descendente.
 * @returns {Array} - Nuevo arreglo ordenado.
 */
const ArraySort = (arr = [], orderAsc = true) => {
    let min_index, max_index, i = 0, k = 0
    while (i < arr.length - k) {
        min_index = i
        max_index = i
        // Buscar mínimo y máximo en el rango actual
        for (let j = i; j < arr.length - k; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j
            }
            if (arr[j] > arr[max_index]) {
                max_index = j
            }
        }
        // Intercambiar el mínimo al inicio
        Swaps(arr, i, min_index)
        // Evitar colisión entre extremos
        if (i !== arr.length - (2 + k)) {
            max_index = min_index === arr.length - (1 + k) ? min_index : max_index
            Swaps(arr, arr.length - (1 + k), max_index)
            k++
        }
        i++

    }
    return orderAsc ? arr : arr.reverse();
}


/**
 * Ordena un arreglo de objetos por una clave específica usando Double Selection Sort.
 * @param {Array<Object>} arr - Arreglo de objetos.
 * @param {string} key - Clave por la cual ordenar (ej. "precio").
 * @param {boolean} [orderAsc=true] - Si es true, ordena ascendente; si no, descendente.
 * @returns {Array<Object>} - Nuevo arreglo ordenado.
 */
const ObjectSort = (arr = [], key = "", orderAsc = true) => {

    let min_index, max_index, i = 0, k = 0
    while (i < arr.length - k) {

        min_index = i
        max_index = i
        // Buscar mínimo y máximo según la clave
        for (let j = i; j < arr.length - k; j++) {
            if (arr[j][key] < arr[min_index][key]) {
                min_index = j
            }
            if (arr[j][key] > arr[max_index][key]) {
                max_index = j
            }


        }
        // Intercambiar el mínimo al inicio
        Swaps(arr, i, min_index)
        // Evitar colisión entre extremos
        if (i !== arr.length - (2 + k)) {
            max_index = min_index === arr.length - (1 + k) ? min_index : max_index
            Swaps(arr, arr.length - (1 + k), max_index)
            k++
        }
        i++

    }
    return orderAsc ? arr : arr.reverse();

}
/**
 * Función unificada para ordenar arreglos de primitivos u objetos.
 * @param {Array} arr - Arreglo a ordenar.
 * @param {string} [key=""] - Clave si se trata de un arreglo de objetos.
 * @param {boolean} [orderAsc=true] - Si es true, ordena ascendente; si no, descendente.
 * @returns {Array} - Nuevo arreglo ordenado.
 */
const DoubleSelectionSort = (arr = [], key = "", orderAsc = true) => {
    let sortedArr = [];
    // Detectar si es arreglo de objetos con clave
    if (key && typeof (arr[0]) === "object") {
        sortedArr = ObjectSort([...arr], key, orderAsc)
    } else {
        sortedArr = ArraySort([...arr], orderAsc)
    }

    return sortedArr;


}

export default  DoubleSelectionSort