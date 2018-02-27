function baseFib(n){
  if (n < 2){
    return n
  } else {
    return baseFib(n - 1) + baseFib(n - 2)
  }
}

function fib(n){
  let arr = [0,1]
  let temp
  if (n < 2){
    return arr[n]
  } else {
    while (n > 1){
      temp = arr[1]
      arr[1] = arr[0] + arr[1]
      arr[0] = temp
      n--
    }
    return arr[1]
  }
}

function fibonacciMemo(n, traversed = {0:0, 1:1}){
  if (n in traversed){
    return traversed[n]
  } else {
    return traversed[n] = fibonacciMemo(n-1, traversed) + fibonacciMemo(n-2, traversed)
  }
}

console.log(fibonacciMemo(100))
console.log(fib(100))
console.log(baseFib(100))


//n = 3
//temp = arr[1]
//arr[1] = arr[0] + arr[1]
//arr[0] = temp
//while (n > 1)
//return arr[1]
//for (let i = 1; i <= n; i ++)
//
