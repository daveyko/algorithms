const {bst, createBSTWrapper} = require('./createBst')


function addParent(root){
  let queue = []
  let currNode
  let parent
  queue.push(bst)
  while(queue.length){
    currNode = queue.shift()
    parent = currNode
    if (currNode.left){
      currNode.left.parent = parent
      queue.push(currNode.left)
    }
    if (currNode.right){
      currNode.right.parent = parent
      queue.push(currNode.right)
    }
  }
  return bst
}

let bstWithParents = addParent(bst)

function findLeast(node){
  if (node.left){
    return findLeast(node.left)
  } else {
    return node
  }
}

function inOrderSuccessor(node){
  if (!node.right){
    if (node.parent.val > node.val){
      return node.parent.val
    } else {
      if (node.parent.parent && node.parent.parent.val > node.val) {
        return node.parent.parent
      } else {
        return node
      }
    }
  } else {
    return findLeast(node.right)
  }
}
console.log(bstWithParents)
console.log(inOrderSuccessor(bstWithParents))
