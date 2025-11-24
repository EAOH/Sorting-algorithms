/**
 * Ordena un arreglo utilizando una variación de QuickSort con tres particiones:
 * menores, iguales y mayores al pivote. Puede ordenar tanto números como objetos
 * si se especifica una clave.
 *
 * @param {Array<number|Object|string>} [arr=[]] - Arreglo de números u objetos a ordenar.
 * @param {string} [key=""] - Clave opcional para ordenar objetos por una propiedad.
 * @returns {Array<number|Object|string>} - Arreglo ordenado de menor a mayor.
 *
 * @example
 * sort([5, 3, 8, 3, 9]); // Devuelve [3, 3, 5, 8, 9]
 *
 * @example
 * const personas = [
 *   { nombre: "Ana", edad: 25 },
 *   { nombre: "Luis", edad: 20 },
 *   { nombre: "Pedro", edad: 30 }
 * ];
 * sort(personas, "edad");
 * // Devuelve [{nombre:"Luis",edad:20}, {nombre:"Ana",edad:25}, {nombre:"Pedro",edad:30}]
 */

function QuickSort(arr=[],key=""){
    if (arr.length<=1) return arr;
    else if (arr.length===2 && key)return arr[0][key]<=arr[1][key]? [arr[0],arr[1]]:[arr[1],arr[0]];
    else if (arr.length===2) return arr[0]<=arr[1]? [arr[0],arr[1]]:[arr[1],arr[0]];
    const mitad = Math.floor(arr.length / 2);
    const {Min,Max,Equals}= DistribuirArrays(mitad, arr,key);    

    return [...QuickSort(Min,key), ...Equals, ...QuickSort(Max,key)];
}

/**
 * Divide un arreglo en tres grupos según un pivote:
 * menores, iguales y mayores. Funciona con números u objetos.
 *
 * @param {number} pivot - Índice del pivote dentro del arreglo.
 * @param {Array<number|Object|string>} [arr=[]] - Arreglo de números u objetos a dividir.
 * @param {string} [key=""] - Clave opcional para ordenar objetos por una propiedad.
 * @returns {{Min: Array<number|Object|string>, Max: Array<number|Object|string>, Equals: Array<number|Object|string>}}
 * Objeto con tres propiedades:
 * - Min: elementos menores al pivote
 * - Max: elementos mayores al pivote
 * - Equals: elementos iguales al pivote
 *
 * @example
 * DistribuirArrays(2, [5, 3, 8, 3, 9]);
 * // Devuelve { Min: [5,3,3], Max: [9], Equals: [8] }
 */

function DistribuirArrays (pivot,arr=[],key){
    let Indices = {Min:[], Max:[], Equals:[]}
    for(let i =0; i<arr.length;i++){
        if (key?arr[i][key]<arr[pivot][key]:arr[i]<arr[pivot]) Indices.Min.push(arr[i]);
        else if (key?arr[i][key]>arr[pivot][key]:arr[i]>arr[pivot]) Indices.Max.push(arr[i]);
        else Indices.Equals.push(arr[i]);
    }
    return Indices
}

export default  QuickSort ;