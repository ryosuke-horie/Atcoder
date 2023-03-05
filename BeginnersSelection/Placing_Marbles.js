// 問題文
// すぬけ君は 1,2,3 の番号がついた 3 つのマスからなるマス目を持っています。 各マスには 0 か 1 が書かれており、マス i には si  が書かれています。
// すぬけ君は 1 が書かれたマスにビー玉を置きます。 ビー玉が置かれるマスがいくつあるか求めてください。

// 制約
// s1,s2,s3 は 1 あるいは 0

const Main = (input) => {
    let result = 0
    const abc = [...input]
    for (let i=0; i < abc.length; i++) {
        result = result + parseInt(abc[i])
    }
    console.log(result)
}

// const example = '111';
// Main(example)

// 回答時
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
