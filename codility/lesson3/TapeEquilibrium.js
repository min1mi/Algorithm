// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  var sum = A.reduce((a, b) => {return a+ b})
  var size = A.length
  var temp = 0
  var tempArr = []

  for (var i = 0; i < size - 1; i++) {
    if(i == 0)
    temp = A[i]
    else
    temp += A[i]

    tempArr[i] = Math.abs((sum - temp) - temp)
  }
  min = tempArr.reduce((a, b) => {return Math.min(a, b);});

 return min
}

solution([3, 1, 2, 4, 3])
