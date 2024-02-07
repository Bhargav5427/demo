class findodd{
    constructor(){
        this.numbers = [8, 19, 5, 6, 14, 9, 13,7]
    }
    isOdd(){
        for (let i = 0; i < this.numbers.length; i++) {
          if (this.numbers[i] % 2 === 1) {
            console.log("odd numbers = ", this.numbers[i]);
          }         
        }
    }
}

let data = new findodd();
data.isOdd();