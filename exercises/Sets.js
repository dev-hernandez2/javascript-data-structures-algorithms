/*
The Sets (data structure) is like an array except there no duplicate items and their values are in any particular order. 
The typical use for Sets is to simply check for a particular item. 

*/

//Es6 has a Set class 

console.log('====================Sets======================');

class mySet {
    constructor() {
        //the object collection will hold the set
        this.collection = [];
    }

    //the has method will check for the presence of an element and return true or false
    has(element) {
        return (this.collection.indexOf(element) !== -1);
    }

    //the values method will return all the values in the set
    values() {
        return this.collection;
    }

    //add method will add an elemnt to set
    add(element) {
        if (!this.has(element)) {
            this.collection.push(element);
            return true;
        }
        return false;
    }

    //remove method will remove an element from a set (delete in es6)
    remove(element) {
        if (this.has(element)) {
            index = this.collection.indexOf(element);
            this.collection.splice(index, 1);
            return true;
        }
        return false;
    }

    // size method will return the size of the collecton object (in es6 size is a property no a method set.size)
    size() {
        return this.collection.length;
    }

    //any of this method  below are not include in the Set version of es6 

    //union method will return the union of two set
    union(otherSet) {
        const unionSet = new mySet();
        const firstSet = this.values();
        const secondSet = otherSet.values();
        firstSet.forEach(e => unionSet.add(e));
        secondSet.forEach(e => unionSet.add(e));
        return unionSet;
    }

    // intersection method will return the intersection of two sets as a new set
    intersection(otherSet) {
        const intersectionSet = new mySet();
        const firstSet = this.values();
        firstSet
            .filter( e => otherSet.has(e))
            .forEach(e => intersectionSet.add(e));
       
        return intersectionSet;
    }

    // difference method will return the difference of two sets as new set
    difference(otherSet) {
        const differenceSet = new mySet();
        const firstSet = this.values();
        firstSet
            .filter( e => !otherSet.has(e))
            .forEach(e => differenceSet.add(e));
    
        return differenceSet;
    }

    //subset method will test if the set is subset of a different set
    subset(otherSet) {
        const firstSet = this.values();
        return firstSet.every(value => otherSet.has(value));
    }
}

//my Sets class
const setA = new mySet();
const setB = new mySet();
setA.add('a');
setB.add('b');
setB.add('c');
setB.add('a');
setB.add('d');
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());


//es6 Sets class
const setC= new Set();
const setD = new Set();
setC.add('a');
setD.add('b');
setD.add('c');
setD.add('a');
setD.add('d');
console.log(setD.values());
setD.delete('a');
console.log(setD.has('a'));
console.log(setD.add('d'));