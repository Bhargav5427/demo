class peakele {
    constructor() {
        this.array = [2, 3, 4, 5, 6, 7, 8, 11, 10, 40, 21, 50, 30]
    }
    findmin() {
        let min = this.array[0];
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] < min)
                min = this.array[i];
        }
        console.log(min);
    }
}
let data = new peakele();
data.findmin()