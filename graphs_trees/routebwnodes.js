const assert = require('assert')

class Graph {
  constructor(...nodes){
    this.nodes = nodes
  }
}

class Node {
  constructor(val, ...children){
    this.val = val
    this.children = children
  }
}

let one = new Node(1)
let six = new Node(6)
let four = new Node(4)
let two = new Node(2)
let eight = new Node(8)

one.children = [six, four]
six.children = [two]
four.children = [two, eight]

let graphInstance = new Graph(one, six, four, two, eight)

function routeExists(graph, n1, n2){
  let queue = []
  let currNode
  queue.push(n1)
  while (queue.length){
    currNode = queue.shift()
    if (currNode.val === n2.val){
      return true
    }
    currNode.children.forEach(child => {
      if (child.checked) return
      child.checked = true
      queue.push(child)
    })
  }
  return false
}


assert(routeExists(graphInstance, one, two), true)
assert(routeExists(graphInstance, six, eight), true)
assert(routeExists(graphInstance, six, eight), false)
