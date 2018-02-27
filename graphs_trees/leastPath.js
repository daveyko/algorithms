function Node(cost) {
  this.cost = cost;
  this.children = [];
}

Node.prototype.addChild = function(cost){
  this.children.push(cost)
}

function cheapestPath(graph){
  let minCost
  if (!graph.children.length) {
    return graph.cost
  } else {
    minCost =  Math.min(...graph.children.map(child => {
      return cheapestPath(child)
    }))
  }
  return minCost + graph.cost
}

function Graph(){
  this.nodes = []
}

function arrContainsX(arr, x){
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === x) return true
  }
  return false
}

Graph.prototype.addChildren = function(source, dest){
  if (arrContainsX(this.nodes.map(node => node.cost), source) && arrContainsX(this.nodes.map(node => node.cost), dest)) {
    this.nodes.filter(node => node.cost === source)[0].addChild(this.nodes.filter(node => node.cost === dest)[0])
  } else {
    if (this.nodes.map(node => node.cost).includes(source) && !this.nodes.map(node => node.cost).includes(dest)) {
    this.nodes.push(new Node(dest))
  } else if (arrContainsX(this.nodes.map(node => node.cost), dest) && !this.nodes.map(node => node.cost).includes(source)){
    this.nodes.push(new Node(source))
  } else {
    this.nodes.push(new Node(source))
    this.nodes.push(new Node(dest))
  }
    this.addChildren(source,dest)
  }
}

Graph.prototype.findNode = function(parent, cost){
  let potentialParents = this.nodes.filter(node => node.children.filter(child => child.cost === cost).length > 0)
  let actualParent =  potentialParents.filter(p => p.cost === parent)[0]
  return actualParent.children.filter(child => child.cost === cost)[0]
}




let hondaManufacturer = new Graph()
hondaManufacturer.addChildren(0, 5)
hondaManufacturer.addChildren(0, 3)
hondaManufacturer.addChildren(0, 6)
hondaManufacturer.addChildren(5, 4)
hondaManufacturer.addChildren(3, 2)
hondaManufacturer.findNode(0, 3).addChild(new Node(0))
hondaManufacturer.addChildren(2, 1)
hondaManufacturer.findNode(3, 0).addChild(new Node(10))
hondaManufacturer.findNode(2, 1).addChild(new Node(1))
hondaManufacturer.findNode(0, 6).addChild(new Node(1))
hondaManufacturer.findNode(0, 6).addChild(new Node(5))

// console.log(JSON.stringify(hondaManufacturer.nodes, null, 2))
// console.log(hondaManufacturer.nodes[hondaManufacturer.nodes.length - 1].children)
// let root = hondaManufacturer.nodes[0]
// console.log(cheapestPath(root))

module.exports = {
  Graph,
  Node,
  hondaManufacturer
}
