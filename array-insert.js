// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let position = 2;
// let element = 25;

// for (let j = arr.length; j >= position; j--) {
//     arr[j] = arr[j - 1];

// }
// arr[position - 1] = element;

// for (let i = 0; i < arr.length; i++) {
//     console.log(i +" index = " + arr[i]+" element");
// }


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let position = 2;
let element = 25;

for (let j = arr.length; j >= position; j--) {
    arr[j] = arr[j - 1];
}
arr[position - 1] = element;

console.log(arr);