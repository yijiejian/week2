// hw2：首字母大寫
// 給定一字串，把第一個字轉成大寫之後「回傳」，若第一個字不是英文字母則忽略。



function capitalize (str) {
    let result = '' //設一個空字串要放東西用
    if (str.charCodeAt(0) < 65 || str.charCodeAt(0) > 122) { //邏輯運算子||或 //如果第一個字不是英文字母
        for (let i=0; i<str.length; i++) {
            result += str[i]
        }
    } else if  (str.charCodeAt(0) > 97) {  //如果第一個字為小寫
         { 
        str2 = String.fromCharCode(str.charCodeAt(0)-32)
        result = str2
        str2 = str[0]
        }
        for (let i=1; i<str.length; i++) {
            result += str[i]
        }
    } else if (str.charCodeAt(0) < 97 && str.charCodeAt(0) > 65) { //如果第一個字為大寫
        for (let i=0; i<str.length; i++) {
                result += str[i]
        }
    }
    return result
}

console.log(capitalize('nello'))
console.log(capitalize('nick'))
console.log(capitalize('Nick'))
console.log(capitalize(',hello'))
console.log(capitalize('%hello'))


// function capitalize(str) {
//     return str[0].toUpperCase() + str.slice(1);
//     //用內建函式把字串0轉換成大寫+slice(begin,end(可不填))，從字串1開始加上去
//     //第一個不是英文也會直接略過
//   }