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
    if (get(index) === false) {
      return false;
    }
    if (index === 0) {
      head = get(index + 1);
      nodeToRemove.next = null;
    } else if (nodeToRemove === tail) {
      let nodeToRedirect = get(index - 1);
      nodeToRedirect.next = null;
      tail = nodeToRedirect;
    } else {
      let nodeToRedirect = get(index - 1);
      nodeToRedirect.next = nodeToRemove.next;
    }
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

  function insert(value, index) {
    if (index < 0) {
      return false;
    }
    if (
      get(index - 1) === false &&
      get(index) === false &&
      get(index + 1) === false
    ) {
      return false;
    }

    let newNode = {};
    newNode.value = value;
    newNode.next = null;

    if (index === 0) {
      newNode.next = head;
      head = newNode;
    }

    if (get(index - 1) === tail && get(index) === false) {
      tail.next = newNode;
      tail = newNode;
    }

    if (index > 0 && get(index) !== false) {
      frontNode = get(index - 1);
      backNode = get(index);
      newNode.next = backNode;
      frontNode.next = newNode;
    }
  }
  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    remove: remove,
    get: get,
    insert: insert
  };
}
