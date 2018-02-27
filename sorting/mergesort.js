function mergeSorted(arr1, arr2){
  let sortedArr = []
  let pointer1 = 0
  let pointer2 = 0
  while(pointer1 < arr1.length && pointer2 < arr2.length){
    if (arr1[pointer1] < arr2[pointer2]){
      sortedArr.push(arr1[pointer1])
      pointer1++
    } else {
      sortedArr.push(arr2[pointer2])
      pointer2++
    }
  }
  if (pointer2 < arr2.length){
    sortedArr = sortedArr.concat(arr2.slice(pointer2))
  } else {
    sortedArr = sortedArr.concat(arr1.slice(pointer1))
  }
  return sortedArr
}

function sort(arr){
  let left
  let middle
  let right
  if (arr.length === 1){
    return arr
  } else {
    middle = Math.floor(arr.length / 2)
    left = arr.slice(0, middle)
    right = arr.slice(middle)
    return mergeSorted(sort(left), sort(right))
  }
}



console.log(sort([1,5,7,2,9,11]))
