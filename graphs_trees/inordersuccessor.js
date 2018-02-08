

const arr = [4, 8, 10, 12, 14, 20, 22]


function TreeNode(value, left, right){
  this.value = value
  this.left = left || null
  this.right = right || null
}

function createBSTWrapper(arr){
  let start = 0
  let end = arr.length - 1
  return createBST(arr, start, end)
}

function createBST(arr, start, end){
  if (start > end) return null
  let midpoint = (start + end) / 2
  let root = new TreeNode(arr[midpoint])
  root.left = createBST(arr, start, midpoint - 1)
  root.right = createBST(arr, midpoint + 1, end)
  return root
}

const bst = createBSTWrapper(arr)

// console.log('bst', bst)

// function inOrderSuccessorWrapper(){
//   var hitNode = false
//   let root = bst
//   let node = 8
//   return inOrderSuccessor(root, node)
// }


function wrapper(){
  let prevNode = 0
  let res = 0
  return function inOrderSuccessor(root, node){
    if (root.left){
      inOrderSuccessor(root.left, node)
    }

    if (prevNode === node){
      res = root.value
    }
    prevNode = root.value

    if (root.right){
      inOrderSuccessor(root.right, node)
    }
    return res
  }
}

let res = wrapper()(bst, 8)
console.log(res)
