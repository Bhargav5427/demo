let array1 = [1, 4, 2];
let array2 = [6, 1, 5];
let mergedArray = [];

for (let i = 0; i < array1.length; i++) {
    mergedArray[i] = array1[i];
}
for (let j = 0; j < array2.length; j++) {
    mergedArray[j + array1.length] = array2[j];
}
for (let k = 0; k < mergedArray.length; k++) {
    for (let l = k + 1; l < mergedArray.length; l++) {
        if (mergedArray[k] > mergedArray[l]) {
            let temp = mergedArray[k];
            mergedArray[k] = mergedArray[l];
            mergedArray[l] = temp;
        }
    }
}
console.log(mergedArray);