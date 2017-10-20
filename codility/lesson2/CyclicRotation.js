// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
  var arr = A
  var temp = []

  for(var i = 0; i < K; i++) {
    for(var j = 0; j <= arr.length - 1; j++) {
      if(j == arr.length - 1) {
        temp[0] = arr[j]

      } else {
        temp[j + 1] = arr[j]
      }
      console.log(temp)
    }
    arr = temp;
    temp = []
  }
  return arr
}

solution([3, 8, 9, 7, 6], 3)
