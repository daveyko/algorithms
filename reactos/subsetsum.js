function subsetSum(target, arr){
  if ((target !== 0 && !arr.length) || (target < 0)){
    return false
  }
  if (target === 0){
    return true
  } else {
    return subsetSum(target - arr[0], arr.slice(1)) || subsetSum(target, arr.slice(1))
  }
}

console.log(subsetSum(9, [1,10,5,3]))
