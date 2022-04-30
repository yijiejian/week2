// hw3：反轉字串
// 給定一個字串，請「印出」反轉之後的樣子（不能使用內建的 reverse 函式）

function reverse(str) {
  let result = ''//設定一個空字串
  for(let i = str.length - 1; i >= 0; i-- ) { //由n to 0
      result += str[i] //每次迴圈都把空字串放進去
  }
  console.log(result)
}

reverse('hello')
reverse('yoyoyo')
reverse('1abc2')
reverse('1,2,3,2,1')