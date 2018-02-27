const {hondaManufacturer} = require('./leastPath.js')
// console.log(hondaManufacturer.nodes[0].children[2])

function dfsGraph(graph){
  let stack = []
  let currNode
  let counter = 0
  stack.push(graph.nodes[0])
  while(stack.length){
    counter ++
    if (counter > 20){
      break
    }
    currNode = stack[stack.length - 1]
    if (!currNode.visited) {
    console.log(currNode.cost, stack.map(el => el.cost))
    currNode.visited = true
    }
    if (!currNode.children.length || (currNode.children.filter(child => child.visited).length === currNode.children.length)) {
      stack.pop()
      continue
    } else {
      for (let i = 0; i < currNode.children.length; i ++){
        if (!currNode.children[i].visited){
          stack.push(currNode.children[i])
          break
        } else {
          continue
        }
      }
    }
  }
}

function dfsRecursive(graph){
  console.log(graph.cost)
  graph.visited = true
  if (!graph.children.length){
    return
  } else {
    graph.children.forEach(child => {
    if (!child.visited){
      dfsRecursive(child)
    }
    })
    return
  }
}

dfsRecursive(hondaManufacturer.nodes[0])
// console.log(hondaManufacturer.nodes)
// dfsGraph(hondaManufacturer)
