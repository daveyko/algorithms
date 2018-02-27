const {bst} = require('./createBst.js')

function perm(arr){
  let other
  let perms = []
  let permEl
  if (arr.length === 1){
    return [arr]
  }
  for (let i = 0; i < arr.length; i++){
    other = arr.slice(0, i).concat(arr.slice(i + 1))
    for (let j of perm(other, perms)) {
      permEl = [arr[i]].concat(j)
      perms.push(permEl)
    }
  }
  return perms
}

function createLevels(root){
  let treeStruct = []
  let children = []
  let parents = []
  children.push(root)
  while(children.length){
    treeStruct.push(children.map(child => child.val))
    parents = children
    children = []
    parents.forEach(parent => {
      if (parent.left){
        children.push(parent.left)
      }
      if (parent.right){
        children.push(parent.right)
      }
    })
  }
  return treeStruct
}

function bstSequences(bst){
  let potentialSequences = []
  let currentOrder = []
  let levels = createLevels(bst)
}

// let allPaths = []
// function findAllPaths(bst, currPath = []){
//   if (!bst){
//     return
//   } else if (!bst.left && !bst.right) {
//     currPath.push(bst.val)
//     console.log(currPath)
//     allPaths.push(currPath.slice())
//     currPath.pop()
//   } else {
//     currPath.push(bst.val)
//     findAllPaths(bst.left, currPath)
//     findAllPaths(bst.right, currPath)
//   }
//   return allPaths
// }


function findAllPaths(bst, currPath = []){
  let allPaths = []
  if (!bst){
    return
  } else {
    currPath.push(bst.val)
    if (!bst.left && !bst.right){
      allPaths.push(currPath)
      return allPaths
    } else {
      return findAllPaths(bst.left, currPath.slice()).concat(findAllPaths(bst.right, currPath.slice()))
    }
  }
}

class Graph {
  constructor(){
    this.nodes = []
  }
}

class Node{
  constructor(value, children){
    this.value = value
    this.children = children || []
  }
}

let graph = new Node([8])
graph.children = perm([4,12]).map(permut => new Node(permut))
graph.children.forEach(child => {
  child.children = perm([1,2,3]).map(permut => new Node(permut))
})


function findAllPaths(graph, currPath = []){
  let allPaths = []
  if (!graph){
    return
  } else {
    currPath.push(graph.value)
    if (!graph.children.length){
      allPaths.push(currPath)
      return allPaths
    } else {
      return graph.children.map(child => {
        return findAllPaths(child, currPath.slice())
      }).reduce((accum, curr) => {
        return accum.concat(curr)
      }, [])
    }
  }
}

console.log(findAllPaths(graph))




// console.log(findAllPaths(bst))


