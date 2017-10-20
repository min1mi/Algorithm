// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  var arr = A
  var sortArr = arr.slice().sort()
  var resultArr = []

  for(var i = 0; i <= arr.length - 1; i++) {
    if (sortArr[i + 1] == sortArr[i]) {
      i++

    } else if (sortArr[i + 1] != sortArr[i]) {
      resultArr.push(sortArr[i])

    } else if (i == arr.length) {
      resultArr.push(sortArr[i])
    }
  }

  return resultArr[0]
}

solution([9, 3, 9, 3, 9, 7, 9])
solution([9, 9, 9, 9, 9])
solution([9, 1, 9, 2, 1, 3, 2, 7, 3])
