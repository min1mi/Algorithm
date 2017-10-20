// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, Y, D) {
  if((Y - X) % D == 0) {
    return parseInt((Y - X) / D)

  } else {
    return parseInt(((Y - X) / D) + 1)
  }
}

solution(10, 85, 30)
