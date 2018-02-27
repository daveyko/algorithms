const {bst, createBSTWrapper} = require('./createBst')

let binaryTree = createBSTWrapper([2,4,6,8,10,20])

function validateBST(root, prevNode = {val: null}){
  if (root.left){
    validateBST(root.left, prevNode)
  }

  if (prevNode.val > root.val) return false
  prevNode.val = root.val

  if(root.right){
    validateBST(root.right, prevNode)
  }
  return true
}

function validateBST2(root){
  if (!root){
    return true
  } else if ((root.left && root.left.val > root.val) || (root.right && root.right.val < root.val)){
    return false
  } else {
    return (validateBST2(root.left) && validateBST2(root.right))
  }
}

console.log(validateBST2(bst))

