// hw1：印出星星
// 給定 n（1<=n<=30），依照規律「印出」正確圖形
function printStars(n) {
    if (n < 1) return 0
    if (n > 30) return 0
    for (let i=1; i<=n; i++) {
        console.log('*')
    }
}

printStars(6)
