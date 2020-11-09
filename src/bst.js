class BSTNode {
  constructor(element) {
    this.element = element;
    this.right = null;
    this.left = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }


  insert(element) {
    let node = this.root;
    if (this.root == null) {
      this.root = new BSTNode(element);
      this.size += 1;
      return true;
    }
    while (true) {
      if (node.element.key == element.key) {
        return false;
      } else if (element.key > node.element.key) {
        if (node.right == null) {
          node.right = new BSTNode(element);
          this.size += 1;
          return true;
        } else {
          node = node.right;
        }
      } else {
        if (node.left == null) {
          node.left = new BSTNode(element);
          this.size += 1;
          return true;
        } else {
          node = node.left;
        }
      }
    }
  }

  find(key) {
    let node = this.root;
    let repeatWhile = true;
    
    while (repeatWhile) {
      console.log(node);
      if (node == null){
        console.log("node is null, false");
        repeatWhile = false;
        return false;
      } else if (node.element.key == key) {
        console.log("node is key, true");
        repeatWhile = false;
        return true;
      } else if (key < node.element.key) {
        console.log("key is smaller than node, Left");
        if(node.left == null){
          console.log("Left doesn't exist, false");
          repeatWhile = false;
          return false;
        } else {
          console.log("node = Left");
          node = node.left;
          repeatWhile = true;
        }
      } else if (key > node.element.key) {
        console.log("key is larger than node, Right");
        if(node.right == null){
          console.log("Right doesn't exist, false");
          repeatWhile = false;
          return false;
        } else {
          console.log("node = Right");
          repeatWhile = true;
          node = node.right;
        }
      } else {
        repeatWhile = false;
        return false;
      }
    }
  }
}