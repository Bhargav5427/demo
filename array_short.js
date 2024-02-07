// let arr = [5, 3, 2, 7, 1, 9];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log(arr);

// selection short
// let arr = [5, 3, 2, 7, 1, 9];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] < arr[j]) {
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log(arr);


// find index
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let input = 55;
// let temp = 0, temp_2 = 0;

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (input == arr[i] + arr[j]) {
//             temp = i;
//             temp_2 = j;
//         }
//     }
// }
// console.log(temp, temp_2);

// bubble short
// let arr = [5, 3, 2, 7, 1, 9];
// let swap = false;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] > arr[j+1]) {
//             let temp = arr[j+1];
//             arr[j+1] = arr[j];
//             arr[j] = temp;
//             swap = true;
//         }
//     }
//     if (swap == false) {
//         break;
//     }
// }
// console.log(arr);

// let a = [1, 3, 5];
// let b = [2, 4, 6];
// let merged = [];

// let i = 0;
// let j = 0;
// let k = 0;

// while (i < a.length && j < b.length) {
//     if (a[i] < b[j]) {
//         merged[k] = a[i];
//         i++;
//     } else {
//         merged[k] = b[j];
//         j++;
//     }
//     k++;
// }
// while (i < a.length) {
//     merged[k] = a[i];
//     i++;
//     k++;
// }
// while (j < b.length) {
//     merged[k] = b[j];
//     j++;
//     k++;
// }
// console.log(merged); 