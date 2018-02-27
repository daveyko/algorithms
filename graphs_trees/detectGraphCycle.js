const {Graph, Node} = require('./leastPath.js')

let graph = new Graph()
graph.addChildren(0, 5)
graph.addChildren(0, 3)
graph.addChildren(5, 4)
// graph.addChildren(4, 0)

// console.log(graph.nodes[3].children[0] === graph.nodes[0])


function detectCycle(node, ancestorStack = []){
  node.visited = true
  ancestorStack.push(node)
  for (let i = 0; i < node.children.length; i++){
    if (!node.children[i].visited) {
      if (detectCycle(node.children[i], ancestorStack)) {
        return true
      }
    } else if (ancestorStack.indexOf(node.children[i]) !== -1) {
      return true
      }
    }
    ancestorStack.pop()
    return false
}

console.log(detectCycle(graph.nodes[0]))



