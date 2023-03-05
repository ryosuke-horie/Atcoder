// 問題文
// シカのAtCoDeerくんは二つの正整数 a,b を見つけました。 a と b の積が偶数か奇数か判定してください。
// 積が奇数なら Odd と、 偶数なら Even と出力せよ。

// 出力関数
const Main = (gets) => {
    const a = gets.split(' ')[0]
    const b = gets.split(' ')[1]
    
    const result = a * b
    if(result % 2 === 0) {
        console.log('Even')
    } else {
        console.log('Odd')
    }
}

// test
// const example = '3 4';
// Main(example);

// 回答時
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
