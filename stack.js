class stack {
    constructor() {
        this.items = [];
        this.size = 5;
    }
    print() {
        if (this.items.length === 0) {
            console.log("stack underflow");
        }
        else {
            console.log(this.items);
        }
    }
    push(element) {
        if (this.items.length == this.size) {
            console.log("stack is overflow");
        }
        
        else {
            this.items[this.items.length] = element;
        }
    }
    pop() {
        if (this.items.length == 1) {
            console.log("one element is required");
        }
        else {
            this.items.length = this.items.length - 1;
        }
    }
    peek(index) {
        if (this.items.length == 1) {
            console.log("one element is required");
        }
        else {
            var j = 0;
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i] !== index){
                    this.items[j++] = this.items[i];
                }
            }
            this.items.length = j;
        }
    }
}
const data = new stack();


// push method
data.push(1)
data.push(2)
data.push(3)
data.push(4)
data.push(5)

// pop method
// data.pop()


// peek method
data.peek(5)



// print
data.print()

