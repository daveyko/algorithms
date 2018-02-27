let {bst} = require('./createBst.js')

function getHeight(root){
  if (!root){
    return 0
  } else {
    return Math.max( (1 + getHeight(root.right)), (1 + getHeight(root.left)) )
  }
}


function checkBalanced(root){
  if (!root) return true
  if (Math.abs(getHeight(root.left) - getHeight(root.right)) > 1){
    return false
  } else {
    return checkBalanced(root.left) && checkBalanced(root.right)
  }
}


console.log(checkBalanced(bst))
