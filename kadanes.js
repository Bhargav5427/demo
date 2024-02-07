// time complexity = O(n)

// let array = [-2, -3, 4, -1, -2, 1, 5, -3];
// let sum = 0;
// let max = array[0];

// for (let i = 0; i < array.length; i++) {
//    sum += array[i];
//     if (sum<0) {
//       sum = 0;
//     }
//     if (sum>max) {
//       max = sum;
//     }
// }
// console.log(max);


// 2 time complexity = O(n2)
// let array = [-2, -3, 4, -1, -2, 1, 5, -3];
// let max = array[0];

// for (let i = 0; i < array.length; i++) {
//     let sum = 0;
//     for (let j = i; j < array.length; j++) {
//         sum += array[j];
//         if (sum > max) {
//             max = sum;
//         }
//     }
// }
// console.log(max);

// 3 time complexity = O(n3)

// let array = [-2, -3, 4, -1, -2, 1, 5, -3];
// let max = array[0];

// for (let i = 0; i < array.length; i++) {
//    for (let j = i; j < array.length; j++) {
//       let sum = 0;
//       for (let k = i; k < j; k++) {
//          sum += array[k];
//       }
//       if (sum > max) {
//          max = sum;
//       }
//    }
// }
// console.log(max);