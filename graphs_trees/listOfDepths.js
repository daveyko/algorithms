let {bst} = require('./createBst.js')

let linkedList = (val, next) => {
  return {
    val,
    next
  }
}

function addToTail(ll, val){
  let nodeToAdd = linkedList(val)
  let currNode = ll
  while(currNode.next){
    currNode = currNode.next
  }
  currNode.next = nodeToAdd
  return ll
}

function listOfDepths(root){
  let hash = {}
  let queue = []
  root.level = 0
  queue.push(root)
  while(queue.length){
    let currNode = queue.shift()
    if (hash[currNode.level]){
      hash[currNode.level] = addToTail(hash[currNode.level], currNode.val)
    } else {
      hash[currNode.level] = linkedList(currNode.val)
    }
    if (currNode.left){
      currNode.left.level = currNode.level + 1
      queue.push(currNode.left)
    }
    if (currNode.right){
      currNode.right.level = currNode.level + 1
      queue.push(currNode.right)
    }
  }
  return hash
}

console.log(bst)
console.log(JSON.stringify(listOfDepths(bst), 2, null))
