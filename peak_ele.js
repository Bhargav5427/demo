class peakele {
    constructor() {
        this.array = [2, 3, 4, 5, 6, 7, 8, 11, 10, 40, 21, 50, 30]
    }
    findmax() {
        let max = this.array[0];
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] > max)
                max = this.array[i];
        }
        console.log(max);
    }
}
let data = new peakele();
data.findmax()