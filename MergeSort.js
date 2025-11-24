/**
 * Fusiona dos subarreglos ordenados de números en un único arreglo ordenado.
 *
 * @param {number[]|string[]} left - Subarreglo izquierdo ya ordenado.
 * @param {number[]|string[]} right - Subarreglo derecho ya ordenado.
 * @returns {number[]|string[]} Nuevo arreglo con todos los elementos de `left` y `right` en orden ascendente.
 *
 * @example
 * Merge([1, 3, 5], [2, 4, 6]); // [1, 2, 3, 4, 5, 6]
 */
const Merge = (left = [], right = []) => {
    const resultado = [];
    let i = 0,j = 0;
    while (i < left.length && j < right.length) {
        resultado.push(left[i] <= right[j]? left[i++] : right[j++]);

    }
    return resultado.concat(left.slice(i)).concat(right.slice(j));
}

/**
 * Fusiona dos subarreglos ordenados de objetos en un único arreglo ordenado,
 * comparando por una propiedad específica.
 *
 * @param {Object[]} left - Subarreglo izquierdo de objetos ya ordenado.
 * @param {Object[]} right - Subarreglo derecho de objetos ya ordenado.
 * @param {string} key - Propiedad del objeto por la cual se ordenará.
 * @returns {Object[]} Nuevo arreglo con todos los objetos de `left` y `right` en orden ascendente según `key`.
 *
 * @example
 * MergeObject([{edad: 20}, {edad: 25}], [{edad: 22}, {edad: 30}], "edad");
 * // [{edad: 20}, {edad: 22}, {edad: 25}, {edad: 30}]
 */

const MergeObject = (left = [], right = [], key) => {
    const resultado = [];
    let i = 0,j = 0;
    while (i < left.length && j < right.length) {
        resultado.push(left[i][key] <= right[j][key]? left[i++] : right[j++]);
    }
    return resultado.concat(left.slice(i)).concat(right.slice(j));
}

/**
 * Ordena un arreglo utilizando el algoritmo Merge Sort.
 * Puede ordenar tanto números como objetos (por una propiedad específica).
 *
 * @param {(number[]|Object[]|string[])} arr - Arreglo de números,strings u objetos a ordenar.
 * @param {string} [key] - Propiedad del objeto por la cual se ordenará (solo si `arr` contiene objetos).
 * @returns {(number[]|Object[]|string[])} Nuevo arreglo ordenado en orden ascendente.
 *
 * @example
 * MergeSort([38, 27, 43, 3, 9]); 
 * // [3, 9, 27, 38, 43]
 *
 * @example
 * MergeSort([{nombre: "Ana", edad: 25}, {nombre: "Luis", edad: 20}], "edad");
 * // [{nombre: "Luis", edad: 20}, {nombre: "Ana", edad: 25}]
 */

const MergeSort = (arr = [],key="") => {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = MergeSort(arr.slice(0, mid));
    const right = MergeSort(arr.slice(mid));

    return typeof(arr[0])==="object" && key ? MergeObject(left, right,key) : Merge(left, right);
}

export default MergeSort;