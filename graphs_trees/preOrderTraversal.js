const {bst, createBSTWrapper} = require('./createBst.js')
const bstSmall = createBSTWrapper([4,8,11,12])


//in order : Algorithm Inorder(tree)
   // 1. Traverse the left subtree, i.e., call Inorder(left-subtree)
   // 2. Visit the root.
   // 3. Traverse the right subtree, i.e., call Inorder(right-subtree)


//pre order: Algorithm Preorder(tree) copy of tree
   // 1. Visit the root.
   // 2. Traverse the left subtree, i.e., call Preorder(left-subtree)
   // 3. Traverse the right subtree, i.e., call Preorder(right-subtree)

//Algorithm Postorder(tree) delete tree
   // 1. Traverse the left subtree, i.e., call Postorder(left-subtree)
   // 2. Traverse the right subtree, i.e., call Postorder(right-subtree)
   // 3. Visit the root.

function preOrderTraversal(bst, traversed = []){
  traversed.push(bst.val)
  if (bst.left){
    preOrderTraversal(bst.left, traversed)
  }
  if (bst.right){
    preOrderTraversal(bst.right, traversed)
  }
  return traversed
}

// function postOrderIterativeDFS(bst){
//   let stack = []
//   let currNode
//   stack.push(bst)
//   while(stack.length){
//     currNode = stack[stack.length - 1]
//     if (currNode.left && !currNode.left.visited){
//       currNode.left.visited = true
//       stack.push(currNode.left)
//        continue
//     }
//     if (currNode.right && !currNode.right.visited){
//       currNode.right.visited = true
//       stack.push(currNode.right)
//     } else {
//         stack.pop()
//         console.log(currNode.val)
//     }
//   }
// }


function inOrderIterativeDFS(bst){
  let stack = []
  let currNode = bst
  let popped
  stack.push(bst)
  while (stack.length){
    if (!currNode){
      popped = stack.pop()
      console.log(popped.val)
      currNode = popped.right
      if(currNode){
        stack.push(currNode)
      }
    } else {
      currNode = currNode.left
      if (currNode){
      stack.push(currNode)
      continue
      }
    }
  }
}

console.log(bstSmall)
inOrderIterativeDFS(bstSmall)


function subTree(t1, t2){
  let preOrderT1 = preOrderTraversal(t1)
  let preOrderT2 = preOrderTraversal(t2)
  return preOrderT2.filter(el => {
    return !preOrderT1.includes(el)
  }).length === 0
}

// console.log(subTree(bst, bstSmall))


// console.log(preOrderTraversal(bstSmall))



