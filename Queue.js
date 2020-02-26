class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    };
};

class LinkedList {
    constructor() {
        this.head = null;
    };
    insertFirst(item) {
        this.head = new _Node(item, this.head);
    };
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            };
            tempNode.next = new _Node(item, null);
        };
    };
    find(item) {
        let currNode = this.head;
        if (!this.head) {
            return null;
        };
        while (currNode.value !== item) {
            if (currNode.next === null) {
                return null;
            }
            else {
                currNode = currNode.next;
            };
        };
        return currNode;
    };
    remove(item) {
        if (!this.head) {
            return null;
        };
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        };
        let currNode = this.head;
        let previousNode = this.head;
        while ((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        };
        if (currNode === null) {
            console.log('Item not found');
            return;
        };
        previousNode.next = currNode.next;
    };
    insertBefore(item, beforeItem) {
        let newNode = new _Node(item, null);
        if (!this.head) {
            return null;
        };
        if (this.head.value === beforeItem) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        };
        let currNode = this.head;
        let previousNode = this.head;
        while ((currNode !== null) && (currNode.value !== beforeItem)) {
            previousNode = currNode;
            currNode = currNode.next;
        };
        if (currNode === null) {
            console.log(`Cannot find ${beforeItem}`);
        };
        newNode.next = currNode;
        previousNode.next = newNode;
    };
    insertAfter(item, afterItem) {
        let newNode = new _Node(item, null);
        if (!this.head) {
            return null;
        };
        let currNode = this.head;
        while ((currNode !== null) && (currNode.value !== afterItem)) {
            currNode = currNode.next;
        };
        if (currNode === null) {
            console.log(`Cannot find ${afterItem}`);
        };
        newNode.next = currNode.next;
        currNode.next = newNode;
    };
    insertAt(item, position) {
        let newNode = new _Node(item, null);
        if (position < 0) {
          console.log('position is out of bounds');
          return;
        };
        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        };
        let currNode = this.head;
        let previousNode = this.head
        let index = 0;
        while ((currNode !== null) && (index !== position)) {
            previousNode = currNode;
            currNode = currNode.next;
            index++;
        };
        if (currNode === null) {
            console.log('position is out of bounds');
        };
        newNode.next = currNode;
        previousNode.next = newNode;
    };
};

module.exports = LinkedList;