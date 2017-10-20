// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  var n, result
  var max = 0
  var arr = []

  n = (N).toString(2)

  function n_indexOf(str, searchvalue, nth) {
    var times= 0,
        num = null

    while(times < nth && num !== -1) {
      num = str.indexOf(searchvalue, num + 1)
      times++
    }
    return num + 1
  }

  if(n.indexOf(1) == 0) {
    arr.push(parseInt(n.indexOf(1)) + 1)
  }
  for (var i = 1; i < n.length; i++) {
    if(parseInt(n_indexOf(n, 1, i)) != 0)
    arr.push(parseInt(n_indexOf(n, 1, i)))
  }

  for(var i = 0; i < arr.length - 1; i++) {
    if(arr[i + 1] - arr[i] - 1 > max)
    max = arr[i + 1] - arr[i] - 1
  }
  return max
}

solution(1041)
solution(9)
solution(529)
solution(20)
solution(15)
