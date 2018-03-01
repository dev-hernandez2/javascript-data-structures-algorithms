/*
The Queues (data structure) is similar to stack, but a queue is first in and first out 

*/

console.log('====================Queues======================');


class Queue {

    constructor() {
        this.collection = [];
    }

    //Helpe print the collection 
    print() {
        console.log(this.collection);
    }

    // will push the first item into the queue
    enqueue(element) {
        this.collection.push(element);
    }

    //this will take the item of the queue
    dequeue() {
        //.shift pull off the element of the array and then is will return it
        return this.collection.shift();
    }

    //it returns what it  item in the front of the array without removing it from the array
    front() {
        return this.collection[0];
    }

    //return the size of the collection
    size() {
        return this.collection.length;
    }

    //check if is empty
    isEmpty() {
        return (this.collection.length === 0);
    }
}


const q = new Queue();

q.enqueue('a');
q.enqueue('b');
q.enqueue('c');

q.print();
q.dequeue();
console.log(q.front());
q.print();