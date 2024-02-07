let array = [1,2,3,4,5,6,7,8,9,10];
let index = 1;

for (let i = index; i < array.length-1; i++) {
    array[i] = array[i + 1];
}
array.length = array.length - 1;
console.log(array);