/*
The Queues (data structure) is similar to stack, but a queue is first in and first out 

*/

console.log('====================Queues======================');


class Queue {

    constructor() {
        this.collection = [];
    }

    //Help print the collection 
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


console.log('====================PriorityQueues======================');

class PriorityQueue {
    constructor() {
        this.collection = [];
    }

    printCollection() {
        (console.log(this.collection));
    }

    enqueue(element) {
        if (this.isEmpty()) {
            this.collection.push(element);
        } else {
            let added = false;
            for (let i = 0; i < this.collection.length; i++) {
                if (element[1] < this.collection[i][1]) {
                    this.collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.collection.push(element);
            }
        }

    }

    dequeue() {
        const value = this.collection.shift();
        return value[0];
    }

    front() {
        return this.collection[0];
    }

    size() {
        return this.collection.length;
    }

    isEmpty() {
        return (this.collection.length === 0);
    }
}


const pq = new PriorityQueue();

pq.enqueue(['William Hernandez', 2]);
pq.enqueue(['Celis Hernandez', 1]);
pq.enqueue(['Sucely Hernandez', 3]);
pq.enqueue(['Sayris Hernandez', 4]);

pq.printCollection();
pq.dequeue();
pq.front();

pq.printCollection();
pq.enqueue(['Celis Hernandez', 1]);
pq.printCollection();