let arr = [1,7,2,8,3,9];
let si = 0;
let ei = arr.length - 1;

function div(array, si, ei) {

    let mid = parseInt((si + ei) / 2);
    if (array.length < 2) {
        return;
    }


    // leftArr
    let leftArr = [];
    for (let i = si; i <= mid; i++) {
        leftArr.push(array[i]);
    }
    let lsi = 0;
    let lei = leftArr.length - 1;



    // rightArr
    let rightArr = [];
    for (let j = mid + 1; j <= ei; j++) {
        rightArr.push(array[j]);
    }
    let rsi = 0;
    let rei = rightArr.length - 1;



    div(rightArr, rsi, rei);
    div(leftArr, lsi, lei);
    merge(rightArr, leftArr);
}
div(arr, si, ei);


function merge(a, b) {
    let merged = [];

    let i = 0;
    let j = 0;
    let k = 0;

    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            merged[k] = a[i];
            i++;
        } else {
            merged[k] = b[j];
            j++;
        }
        k++;
    }
    while (i < a.length) {
        merged[k] = a[i];
        i++;
        k++;
    }
    while (j < b.length) {
        merged[k] = b[j];
        j++;
        k++;
    }
    console.log(merged);
}

