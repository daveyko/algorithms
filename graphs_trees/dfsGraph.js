const {hondaManufacturer} = require('./leastPath.js')

function dfsGraph(graph){
  let stack = []
  let currNode
  stack.push(graph.nodes[0])
  while(stack.length){
    currNode = stack[stack.length - 1]
    if (!currNode.visited) {
    // console.log(currNode.cost, stack.map(el => el.cost))
    currNode.visited = true
    }
    if (!currNode.children.length || (currNode.children.filter(child => child.visited).length === currNode.children.length)) {
      stack.pop()
      continue
    } else {
      for (let i = 0; i < currNode.children.length; i ++){
        if (!currNode.children[i].visited){
          console.log('node', currNode.children[i], 'stack!', stack)
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

dfsGraph(hondaManufacturer)
