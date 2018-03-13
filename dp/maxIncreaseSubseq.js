//[3,10,4,5]
//            [3]                        []
//    [3,10]          [3]         [10]       []
//[3,10,4][3,10]  [3,4][3]    [10,4][10] [4]  []

//1) find all subseq
//2) for first subseq, if sorted, then store the subseq as max increasing subseq
//3) for following subseq, if sorted AND length is greater than current max subseq, replace max with subseq
//4) when we are finished finding all subseq, return max

function findMaxIncreasing(arr){
  let boolArr = arr.map(el => false)
  let maxSubseq = []
  let start = 0
  findMaxIncreasingHelper(arr, boolArr, maxSubseq, start)
  return maxSubseq
}

function findMaxIncreasingHelper(arr, boolArr, maxSubseq, start){
  let subseqToCheck = []
  for (let i = 0; i < arr.length; i++){
    if (boolArr[i] && (!subseqToCheck.length || subseqToCheck[subseqToCheck.length - 1] < arr[i])){
      subseqToCheck.push(arr[i])
    } else {
      continue
    }
  }
  if (subseqToCheck.length > maxSubseq.length){
    maxSubseq.push(subseqToCheck)
  }

  if (start === arr.length){
    return
  }

  boolArr[start] = true
  findMaxIncreasingHelper(arr, boolArr, maxSubseq, start + 1)

  boolArr[start] = false
  findMaxIncreasingHelper(arr, boolArr, maxSubseq, start + 1)
}


function findMaxIncreasingDp(arr){
  let lengthsArr = arr.map(el => 1)
  for (let i = 1; i < arr.length; i++){
    for (let j = 0; j < i; j++){
      let isIncreasing = arr[j] < arr[i]
      let longestAtI = lengthsArr[j] + 1
      if (isIncreasing){
        if (longestAtI > lengthsArr[i]){
          lengthsArr[i] = longestAtI
        }
      }
    }
  }
  let subseqIdx = findSubseq(lengthsArr)
  return subseqIdx.map(idx => arr[idx])
}

function findMaxIdx(arr){
  let idx = 0
  let max = 0
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > max){
      idx = i
      max = arr[i]
    }
  }
  return idx
}

function findSubseq(arr){
  let maxIdx = findMaxIdx(arr)
  let subSeqIdxArr = []
  subSeqIdxArr.push(maxIdx)
  while(maxIdx >= 0){
    if (arr[maxIdx] > arr[maxIdx - 1]){
      subSeqIdxArr.unshift(maxIdx - 1)
    }
    if (arr[maxIdx] < arr[maxIdx - 1]){
      break
    }
    maxIdx--
  }
  return subSeqIdxArr
}

// console.log(findSubseq([1,2,1,2,3,3,4]))

console.log(findMaxIncreasingDp([3, 4, -1, 0, 6, 2, 3]))
