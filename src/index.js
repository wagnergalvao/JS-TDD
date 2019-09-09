/**
 * import
 */
 import * as R from 'ramda';

/**
 * [arr1 Sequência de valores]
 * @type {Array}
 */
const arr1 = [1, 1, 1, 2, 2, 3, 4, 5, 6, 7, 8];
/**
 * [arr2 Sequência de valores]
 * @type {Array}
 */
const arr2 = [5, 5, 5, 6, 6, 6, 7, 8, 8, 9, 9, 1];
/**
 * [arr3 array com elementos únicos extraídos da união de arr1 e arr2]
 * @type {[type]}
 */
const arr3 = R.union(arr1, arr2);
/**
 * [arr4 array com elementos únicos extraídos de arr1]
 * @type {[type]}
 */
const arr4 = R.uniq(arr1);

console.log(arr3);

console.log(arr4);
