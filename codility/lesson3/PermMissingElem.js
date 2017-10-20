// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  var sumArr = 0;
  var sum = A.length + 1
  for (var i = 0; i < A.length; i++) {
    sumArr += A[i]
    sum += i + 1
  }
  return sum - sumArr
}

solution([2, 3, 1, 5])
