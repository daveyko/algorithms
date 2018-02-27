const {bst} = require('./createBst')

class Node{
  constructor(val, left, right){
    this.val = val
    this.left = left || null
    this.right = right || null
    this.insert = this.insert.bind(this)
  }

  insert(val){
    if (val <= this.val){
      if (!this.left){
      this.left = new Node(val)
      } else {
      this.left.insert(val)
      }
    } else {
      if (!this.right){
        this.right = new Node(val)
      }  else {
        this.right.insert(val)
      }
    }
  }
}

Node.prototype.find = function(val){
    if (this.val === val) {
    return this
    }
    else if (this.left && val <= this.val) {
      return this.left.find(val)
    }
    else if (this.right && val > this.val) {
      return this.right.find(val)
    } else {
      return null
    }
}

Node.prototype.delete = function(val){
  let nodeToDelete
  let parent
  if (this.left.val === val || this.right.val === val){
    nodeToDelete = this.left.val === val ? this.left : this.right
    if (hasNoChild(nodeToDelete)){
      if (this.left.val === val){
        this.left = null
      } else {
        this.right = null
      }
    } else if (hasOneChild(nodeToDelete)){
      console.log('ndt', nodeToDelete)
      if (nodeToDelete === this.left){
        this.left = this.left.left
      } else {
        this.right = this.right.right
      }
    } else {
      parent = nodeToDelete
      let smallestChild = findSmallestChild(nodeToDelete.right)
      convert(nodeToDelete, smallestChild)
      if (parent.right === smallestChild){
        parent.right = null
      } else {
        while (parent.left !== smallestChild){
        parent = parent.left
      }
      parent.left = null
      }
    }
  }
}

function hasNoChild(node){
  if (!node.left && !node.right) return true
}

function hasOneChild(node){
  if ((!node.left && node.right) || (!node.right && node.left)) {
    return true
  }
}

function findSmallestChild(node){
  if (!node.left){
    return node
  } else {
    return findSmallestChild(node.left)
  }
}

function convert(n1, n2){
  n1.val = n2.val
}

let bstInstance = new Node(8)
bstInstance.insert(4)
bstInstance.insert(2)
bstInstance.insert(6)
bstInstance.insert(12)
bstInstance.insert(10)
bstInstance.insert(16)
bstInstance.delete(4)
bstInstance.delete(6)
console.log(bstInstance)
