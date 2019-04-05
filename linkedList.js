/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  let linkedList = {};
  let head = null;
  let tail = null;

  function getHead() {
    return head;
  }

  function getTail() {
    return tail;
  }

  function add(value) {
    let newNode = {};
    newNode.value = value;
    newNode.next = null;
    if (head === null) {
      head = newNode;
      // tail = newNode;
    }
    if (tail === null) {
      tail = newNode;
    }
    if (head !== null) {
      tail = newNode;
    }
    return head;
  }

  function remove() {}

  function get(index) {
    let currentNode = getHead();
    if (currentNode !== undefined) {
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
    } else {
      return false;
    }
  }

  function insert() {}
  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    remove: remove,
    get: get,
    insert: insert
  };
}
