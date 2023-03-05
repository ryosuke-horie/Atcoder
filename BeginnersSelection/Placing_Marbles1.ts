// 問題文
// すぬけ君は 1,2,3 の番号がついた 3 つのマスからなるマス目を持っています。 各マスには 0 か 1 が書かれており、マス i には si  が書かれています。
// すぬけ君は 1 が書かれたマスにビー玉を置きます。 ビー玉が置かれるマスがいくつあるか求めてください。

// 制約
// s1,s2,s3 は 1 あるいは 0

const Main = (input: string) => {
    
    let result: number = 0
    
    const abc: string[] = input.split('')
    for (let i=0; i < abc.length; i++) {
        result = result + parseInt(abc[i])
    }
    
    console.log(result)
}

const example: string = '101';
Main(example)