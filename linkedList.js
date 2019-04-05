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
    // let previousNode = tail;
    newNode.value = value;
    newNode.next = null;
    // tail.next = newNode;
    // tail = newNode;

    if (!head) {
      head = newNode;
      tail = newNode;
    } else if (head) {
      tail.next = newNode;
      tail = newNode;
    }
    // console.log(head);
    return newNode;
  }

  function remove(index) {
    let nodeToRemove = get(index);
    let nodeToRedirect = get(index - 1);

    nodeToRedirect.next = nodeToRemove.next;
    return get(index);
  }

  function get(index) {
    let currentNode = getHead();
    let nextNode = getHead();
    let i = 0;
    while (i < index && currentNode !== null) {
      nextNode = currentNode.next;
      currentNode = nextNode;
      i++;
    }
    if (nextNode === null) return false;
    return currentNode;
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
