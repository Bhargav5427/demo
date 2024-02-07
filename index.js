

// minimum
// let arr = [1, 2, 3, 4, 5, 6]
// let max = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if (max > arr[i]) {
//         max = arr[i];
//     }
// }
// console.log(max);


// maximum
// let arr = [1, 2, 3, 4, 5, 6]
// let max = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i];
//     }
// }
// console.log(max);

// let array = [5, 2, 11, 8, 4];

// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length - i - 1; j++) {
//         if (array[j] > array[j + 1]) {
//             let temp = array[j];
//             array[j] = array[j + 1];
//             array[j + 1] = temp;
//         }
//     }
// }
// console.log(array);
let array = [2, 3, 4, 58, 6, 8];

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}
