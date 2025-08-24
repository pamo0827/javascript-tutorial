// 暗黙的な型変換は諸悪の根源

/*
 暗黙的な型変換によって意図しない結果となるため、
 比較には厳密等価演算子（===）を使うべき
*/

console.log(1 === "1"); // => false
console.log(1 == "1"); // => true

// 暗黙的に変換されてから計算される

1 + true; // => 2
1 + "2"; // => "12"
1 - "2"; // => -1

const x = 1, y = "2", z = 3;
console.log(x + y + z); // => "123"
console.log(y + x + z); // => "213"
console.log(x + z + y); // => "42"

// 任意の値 → 真偽値

Boolean("string"); // => true
Boolean(1); // => true
Boolean({}); // => true
Boolean(0); // => false
Boolean(""); // => false
Boolean(null); // => false

// 数値 → 文字列

String("str"); // => "str"
String(true); // => "true"
String(null); // => "null"
String(undefined); // => "undefined"
String(Symbol("シンボルの説明文")); // => "Symbol(シンボルの説明文)"
// プリミティブ型ではない値の場合
String([1, 2, 3]); // => "1,2,3"
String({ key: "value" }); // => "[object Object]"
String(function() {}); // "function() {}"

/*
オブジェクトに対しては、あまり意味のある文字列を返さないので、
Stringコンストラクタ関数での変換は、プリミティブ型に対してのみに留めるべき。
*/

// 文字列 → 数値

// Number.parseInt
console.log(Number.parseInt("1", 10)); // => 1
console.log(Number.parseInt("42px", 10)); // => 42
console.log(Number.parseInt("10.5", 10)); // => 10

// Number.parseFloat
console.log(Number.parseFloat("1")); // => 1
console.log(Number.parseFloat("42.5px")); // => 42.5
console.log(Number.parseFloat("10.5")); // => 10.5

// NaN

/*
NaNは何と演算しても結果がNaNとなってしまうため、
計算していた値がどこでNaNとなったのかがわかりにくく、
デバッグが難しくなる。

NaNは暗黙的な型変換の中でももっとも避けたい値。 

関数が数値のみを受けつけるということを明示する必要がある。
*/

function sum(...values) {
    return values.reduce((total, value) => {
        // 値がNumber型ではない場合に、例外を投げる
        if (typeof value !== "number") {
            throw new Error(`${value}はNumber型ではありません`);
        }
        return total + Number(value);
    }, 0);
}
const xx = 1, zz = 10;
let yy; // `y`はundefined
console.log(x, y, z);
// Number型の値ではない`y`を渡しているため例外が発生する
console.log(sum(x, y, z)); // => Error

