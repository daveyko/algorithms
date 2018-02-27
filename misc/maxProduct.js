function maxProductWrapper(arr, k){
    let max = 0
    let boolArr = arr.map(() => false)
    let combosArr = []
    maxProduct(arr, boolArr, combosArr, k, 0, 0)
    combosArr.forEach(combo => {
      if (combo.reduce((accum, curr) => {
        return accum*curr
      }, 1) > max){
        max = combo.reduce((accum, curr) => {
        return accum*curr
      }, 1)
      }
    })
    return max
}


function maxProduct(arr, boolArr, combosArr, k, currLength, start){
  var combo = []

  if (currLength === k) {
    for (let i = 0; i < arr.length; i++){
      if (boolArr[i] === true){
        combo.push(arr[i])
      }
    }
    combosArr.push(combo)
    return
  }
  if (start === arr.length){
    return
  } else {

    boolArr[start] = true
    maxProduct(arr, boolArr, combosArr, k, currLength + 1, start + 1)

    boolArr[start] = false
    maxProduct(arr, boolArr, combosArr, k, currLength, start + 1)
  }
}


function bruteForceGroup(arr){
  let groups = []
  for (let i = 0; i < arr.length; i ++){
    for (let j =  i + 1; j < arr.length; j++){
      for(let k = j + 1; k < arr.length; k++){
        groups.push([arr[i], arr[j], arr[k]])
      }
    }
  }
  return groups
}

console.log(maxProductWrapper([1,2,3,4], 3))
console.log(bruteForceGroup([1,2,3,4]))
