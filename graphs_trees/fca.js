const {bst} = require('./createBst')

function node(val, left, right){
  return {
    val,
    left: left || null,
    right: right || null
  }
}

function bfs(root, target1, target2){
  let queue = []
  let searchTargets = [target1, target2]
  let currNode
  queue.push(root)
  while (queue.length){
    currNode = queue.shift()
    if (currNode.val === target1 || currNode.val === target2){
      searchTargets = searchTargets.filter(target => target === currNode.val)
      if (!searchTargets.length){
        return true
      }
    }
    if (currNode.left){
      queue.push(currNode.left)
    }
    if (currNode.right){
      queue.push(currNode.right)
    }
  }
  return false
}

function fca(root, node1, node2){
  if (bfs(root, node1, node2)) {
    if (!bfs(root.left, node1, node2) && !bfs(root.right, node1, node2)){
      return root
    } else {
      return fca(root.left, node1, node2) || fca(root.right, node1, node2)
    }
  } else {
    return null
  }
}

console.log(fca(bst, 10, 16))
// console.log(fca(bst, ))
