/**
 * Realiza una búsqueda binaria iterativa sobre un arreglo ordenado.
 * 
 * Permite buscar tanto en arreglos de valores primitivos (números, strings)
 * como en arreglos de objetos, especificando una propiedad clave (`key`).
 *
 * @function BinarySearch
 * @param {Array<*>} arr - Arreglo ordenado en el que se buscará el valor.
 *   - Si es un arreglo de objetos, debe estar ordenado por la propiedad indicada en `key`.
 *   - Si es un arreglo de valores primitivos, debe estar ordenado directamente.
 * @param {*} target - Valor que se desea encontrar dentro del arreglo.
 * @param {string} [key=""] - Nombre de la propiedad en caso de que el arreglo contenga objetos.
 *   Si se deja vacío, la búsqueda se realiza directamente sobre los valores.
 * @returns {{key: number, value: *} | null} 
 * Devuelve un objeto con la posición (`key`) y el valor (`value`) encontrado.
 * Si el valor no existe en el arreglo, retorna `null`.
 *
 * @example
 * // Ejemplo con arreglo de números
 * const orden = [1, 3, 5, 7, 9];
 * const result = BinarySearch(orden, 7);
 * // result = { key: 3, value: 7 }
 *
 * @example
 * // Ejemplo con arreglo de objetos
 * const usuarios = [
 *   { id: 1, nombre: "Ana" },
 *   { id: 2, nombre: "Luis" },
 *   { id: 3, nombre: "Elio" }
 * ];
 * const result = BinarySearch(usuarios, 2, "id");
 * // result = { key: 1, value: { id: 2, nombre: "Luis" } }
 */
export default function BinarySearch(arr = [], target,key="") {

    let low =0;
    let high = arr.length - 1;

    while(low <= high) {
    
        const med=Math.floor((low + high) / 2);
        
        if (key?arr[med][key]===target:arr[med]===target){
        
            return {key: med, value: arr[med]}

        }
        else if (key?arr[med][key] < target:arr[med] < target){
            low = med + 1;
        }
        else {
            high = med - 1;
        }
    }
    
    return null;

}