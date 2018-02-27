function buildGraph(projects, dependencies){
  let dependecyGraph = {}
  dependencies.forEach(dependency => {
    if (dependecyGraph[dependency[1]]){
      dependecyGraph[dependency[1]].push(dependency[0])
    } else {
      dependecyGraph[dependency[1]] = [dependency[0]]
    }
  })
  projects.forEach(project => {
    if (!dependecyGraph[project]){
      dependecyGraph[project] = []
    }
  })
  return dependecyGraph
}

let dependencyArr = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']]
let projectsArr = ['a', 'b', 'c', 'd', 'e', 'f']

function buildOrder(projects, dependencies){
  let order = []
  let dependecyGraph = buildGraph(projects, dependencies)
  while (projects.length) {
    projects.forEach(currProject => {
      if (!dependecyGraph[currProject].length){
        Object.keys(dependecyGraph).forEach(key => {
          dependecyGraph[key] = dependecyGraph[key].filter(dependency => dependency !== currProject)
        })
        projects = projects.filter(project => project !== currProject)
        order.push(currProject)
      }
    })
  }
  return order
}

console.log(buildOrder(projectsArr, dependencyArr))
