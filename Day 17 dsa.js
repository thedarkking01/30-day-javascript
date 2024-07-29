//Activity 1: Linked List

// Task 1: Implement a `Node` class

class Node {
    constructor(value = null) {
        this.value = value;
        this.next = null;
    }
}


// Task 2: Implement a `LinkedList` class


class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    remove(value) {
        if (!this.head) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
        }
    }

    display() {
        let current = this.head;
        const nodes = [];
        while (current) {
            nodes.push(current.value);
            current = current.next;
        }
        console.log(nodes.join(' -> '));
    }
}


// Activity 2: Stack

// Task 3: Implement a `Stack` class

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) return "Underflow";
        return this.items.pop();
    }

    peek() {
        if (this.items.length === 0) return "No elements in Stack";
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}


// Task 4: Use the `Stack` class to reverse a string

function reverseString(str) {
    const stack = new Stack();
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }

    let reversedStr = '';
    while (!stack.isEmpty()) {
        reversedStr += stack.pop();
    }

    return reversedStr;
}

console.log(reverseString("hello"));  // Output: "olleh"


// Activity 3: Queue

// Task 5: Implement a `Queue` class


class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) return "Underflow";
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) return "No elements in Queue";
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

//Task 6: Use the `Queue` class to simulate a simple printer queue


function printerQueue(jobs) {
    const queue = new Queue();
    jobs.forEach(job => queue.enqueue(job));

    while (!queue.isEmpty()) {
        console.log(`Printing job: ${queue.dequeue()}`);
    }
}

printerQueue(['job1', 'job2', 'job3']);
// Output:
// Printing job: job1
// Printing job: job2
// Printing job: job3


// Activity 4: Binary Tree

//Task 7: Implement a `TreeNode` class


class TreeNode {
    constructor(value = null) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


//Task 8: Implement a `BinaryTree` class

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    inOrderTraversal(node = this.root, result = []) {
        if (node) {
            this.inOrderTraversal(node.left, result);
            result.push(node.value);
            this.inOrderTraversal(node.right, result);
        }
        return result;
    }
}


// Activity 5: Graph (Optional)

//Task 9: Implement a `Graph` class


class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjList.has(vertex)) {
            this.adjList.set(vertex, []);
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.adjList.has(vertex1)) {
            this.adjList.get(vertex1).push(vertex2);
        }
        if (this.adjList.has(vertex2)) {
            this.adjList.get(vertex2).push(vertex1);
        }
    }

    bfs(startingNode) {
        let visited = new Set();
        let queue = [startingNode];

        while (queue.length > 0) {
            let currentNode = queue.shift();

            if (!visited.has(currentNode)) {
                console.log(currentNode);
                visited.add(currentNode);

                let neighbors = this.adjList.get(currentNode);
                for (let neighbor of neighbors) {
                    if (!visited.has(neighbor)) {
                        queue.push(neighbor);
                    }
                }
            }
        }
    }
}


// Task 10: Use the `Graph` class to represent a simple network and perform BFS


const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');

graph.bfs('A');
// Output:
// A
// B
// C
// D
// E
