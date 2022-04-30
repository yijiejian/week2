// hw5：自己的函式自己寫
// 其實仔細思考的話，你會發現那些陣列內建的函式你其實都寫得出來，因此這一題就是要讓你自己動手實作那些函式！

// 我們要實作的函式有兩個：join 以及 repeat。（再次強調，這一題要你自己實作這些函式，所以你不會用到內建的join以及repeat）

// join 會接收兩個參數：一個陣列跟一個字串，會在陣列的每個元素中間插入一個字串，最後回傳合起來的字串。

// repeat 的話就是回傳重複 n 次之後的字串。

function join(arr, concatStr) {
    let result = ''
    for (let i=0; i<arr.length; i++) {

        if (arr.length === 1) { //如果字串長度為1
            result += arr[i] + concatStr
        }
        else if (i === arr.length-1) { //邏輯運算子 === 完全等於的意思 //如果字串長度為最後一個時
            result += arr[i]
        } 
        else {
            result += arr[i] + concatStr
        }
    }
    return result
}

// 更好的解法，先設result為陣列0，後面都一樣，如果陣列只有0，那for迴圈也就不成立(1<0)就會直接跳出
// 1 + 2! + 3! 這樣子
// function join(arr, concatStr) {
//     if (arr.length === 0) { // special case
//       return '';
//     }
  
//     let result = arr[0];
//     for (let i = 1; i < arr.length; i += 1) {
//       result += concatStr + arr[i];
//     }
//     return result;
//   }

function repeat(str, times) {
    let result = ''
    for (let i = 1; i <= times; i++) {
        result += str
    }
    return result
}

console.log(join(['a'], '!'))
console.log(join([1, 2, 3], '!'))
console.log(join(['a', 1, 'b', 2, 'c', 3], ','))
console.log(repeat('a', 5))
console.log(repeat('yoyo', 2))