class Bst{
  constructor(val, left, right){
    this.val = val
    this.left = left || null
    this.right = right || null
  }
}

let testArr = [2,4,6,8,10,12,16]

function createBST(arr, start, end){
  if (end < start) return null
  let midpoint = Math.ceil((end + start) / 2)
  let root = new Bst(arr[midpoint])
  root.left = createBST(arr, start, midpoint - 1)
  root.right = createBST(arr, midpoint + 1, end)
  return root
}

function createBSTWrapper(arr){
  return createBST(arr, 0, arr.length - 1)
}

let bst = createBSTWrapper(testArr)

module.exports = {
  bst,
  createBSTWrapper
}
