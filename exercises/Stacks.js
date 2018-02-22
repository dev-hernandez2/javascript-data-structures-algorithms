/* Stacks (Data Structure) */

//fuctions:
//push: For placing data on to the stack
//pop: For removing the last top of the stack
//peek: For displaying the top element of the stack
//length For displaying how many elements is in the stack

//Array object have this fuctions out of the box

const letters = []; //this is the stack 

const word = "racecar";
let rword = "";

//put letters of the word into stack 

//old way
// for (let i = 0; i < word.length; i++) {
//     letters.push(word[i]);
// }

//es6 way
[...word].forEach(word => letters.push(word));

//pop off the stack in reverse order

//old way
// for (let i = 0; i < word.length; i++) {
//     rword += letters.pop();
// }

//es6 way
[...word].forEach(word => rword += letters.pop());

if (rword === word) {
    console.log(word + " is a palindrome");
} else {
    console.log(word + " is not a palindrome");
}

//creates a stacks
class Stack {

    constructor() {
        this.count = 0;
        this.storage = {};
    }

    //aDDS A VALUE ONTO THE END OF THE STACK
    push(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    //Removes and returns the value at the end of the stack
    pop(){
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        const result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    size() {
        return this.count;
    }

    peek() {
        return this.storage[this.count - 1];
    }

}

const myStack = new Stack();

myStack.push(1);
myStack.push(2);

console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());