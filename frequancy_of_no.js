
// let arr = [1, 2, 3, 2, 3, 4, 5, 5, 6, 1, 1, 4, 5, 7, 8, 8];

// const count ={};

// for (let i = 0; i < arr.length; i++) {
// 	let element = arr[i];
// 	if (count[element]) {
// 		count[element] += 1;
// 	} else {
// 		count[element] = 1;
// 	}
// }
// console.log(count);

class fr {
	constructor() {
		this.arr = [1,1,1,1,2,3,4,4,4,4,5,5,6,7,7,7];
		this.count = {};
	}
	findfrequancy() {
		for (let i = 0; i < this.arr.length; i++) {
			let element = this.arr[i];
			if (this.count[element]) {
				this.count[element] += 1;
			} else {
				this.count[element] = 1;
			}
		}
		console.log(this.count);
	}
}

let data = new fr();
data.findfrequancy()