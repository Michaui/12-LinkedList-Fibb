class Linkedlist {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      const lastNode = this.getLast();
      lastNode.next = newNode;
    }
  }

  // prepend(value){
  //     nodes = this.head;
  //     let newStartNode = new Node(value);
  //     newStartNode.next = this.head;
  // }

  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
  }

  at(index) {
    let node = this.head;
    for (let i = 0; i < index; i++) {
      if (!node.next) return null;
      node = node.next;
    }
    return node;
  }

  pop() {
    const size = this.size();
    const newLast = this.at(size - 2);
    const popped = newLast.next;
    return popped;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  contains(value) {
    let node = this.head;
    while (node !== null) {
      // if(!node)
      if (node.value === value) {
        return true;
      }
      node = node.next;
    }
    return false;
  }

  find(value) {
    let node = this.head;
    // let size = this.size(); -> for (let i=0; i<size; i++){

    // Frage: Weshalb nur "node" in der for-Schleife funktioniert.
    // node ist dein object, was truthy = true ist
    //  wenn node = node.next null ist, wird node = null, und if (null) ist false
    //  weil node potenziell null sein kann
    // https://developer.mozilla.org/en-US/docs/Glossary/Truthy
    for (let i = 0; node; i++) {
      if (node.value === value) {
        return i;
      }
      node = node.next;
    }
    return null;
  }

  clear() {
    this.head = null;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  getFirst() {
    return this.head;
  }

  toString() {
    let node = this.head;
    let str = "";

    while (node) {
      str += ` (${node.value}) ->`;
      node = node.next;
    }
    str += 'null'; 
    return str;
  }
}

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = null;
  }
}

let list = new Linkedlist();

let node1 = list.append(2);
let node2 = list.append(3);
let node3 = list.append(4);
let node4 = list.append(5);
let node5 = list.append(6);
let node6 = list.append(7);

console.log(list.at(3));
console.log(list.contains(2));
console.log(list.getFirst());
console.log(list.getLast());
console.log(list.size());
console.log(list.find(6));
console.log(list.toString());

//Short form
// const linkedList = new LinkedList(new Node(1, new Node(2)));
// console.log(linkedList)

// https://gist.github.com/fischi20/855cc07d165dd4d6407c340245e586ab