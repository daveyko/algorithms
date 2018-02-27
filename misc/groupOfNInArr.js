let arr = [1,2,3,4]
function groupsOfN(n, arr){
  let combosArr = []
  let booleanArr = arr.map(el => false)
  groupsOfNHelper(arr, booleanArr, combosArr, n, 0, 0)
  return combosArr
}

function groupsOfNHelper(arr, boolArr, combosArr, groupSize, currLength, start){
  if(groupSize === currLength) {
    console.log('here!')
    let combos = []
    for (let i = 0; i < arr.length; i++){
      if (boolArr[i]){
        combos.push(arr[i])
      }
    }
    combosArr.push(combos)
  }
  if (arr.length === start){
    return
  } else {


    boolArr[start] = true
    groupsOfNHelper(arr, boolArr, combosArr, groupSize, currLength + 1, start + 1)

    boolArr[start] = false
    groupsOfNHelper(arr, boolArr, combosArr, groupSize, currLength, start + 1)
  }
}

console.log(groupsOfN(3, arr))
