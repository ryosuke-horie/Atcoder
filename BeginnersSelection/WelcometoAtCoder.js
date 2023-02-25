// 問題文
// 高橋君はデータの加工が行いたいです。

// 整数
// a,b,cと、文字列s が与えられます。
// a+b+c の計算結果と、文字列sを並べて表示しなさい。

// 制約
// 1≤a,b,c≤1,000
// 1≤ ∣s∣ ≤100

// 入力例
// 1
// 2 3
// test


// inputにデータを受け取る
const Main =  (input) => {
    // inputで受け取った文字列を改行で分けて取得する。
    const inputArray = input.split('\n');
    // 2行目のb、ｃにあたる文字は空白で分けられる。
    const bc = inputArray[1].split(' ')

    // 各種データの取得
    const a = parseInt(inputArray[0])
    const b = parseInt(bc[0])
    const c = parseInt(bc[1])
    const s = inputArray[2]

    console.log('%d %s', a+b+c, s)
}

// 確認用
// const example = "1\n2 3\ntest"
// Main(example)

// 回答時
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
