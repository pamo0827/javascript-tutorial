/*
    JavaScriptは動的型付け言語に分類される言語であるため、
    静的型付け言語のような「変数の型」はない。
    しかし、文字列、数値、真偽値といった「値の型」は存在し、
    これらの値の型のことを「データ型」と呼ぶ。
*/

/*
    データ型を大きく分けると、
    ・プリミティブ型
    ・オブジェクト
    の2つに分類される。
*/

// プリミティブ型（基本型）

/*
    ・真偽値（Boolean）: trueまたはfalseのデータ型
    ・数値（Number）: 42 や 3.14159 などの数値のデータ型
    ・巨大な整数（BigInt）: ES2020から追加された9007199254740992nなどの任意精度の整数のデータ型
    ・文字列（String）: "JavaScript" などの文字列のデータ型
    ・undefined: 値が未定義であることを意味するデータ型
    ・null: 値が存在しないことを意味するデータ型
    ・シンボル（Symbol）: ES2015から追加された一意で不変な値のデータ型
*/

// オブジェクト（複合型）

/*
    ・プリミティブ型以外のデータ
    ・オブジェクト、配列、関数、クラス、正規表現、Dateなど
*/

console.log(typeof true);// => "boolean"
console.log(typeof 42); // => "number"
console.log(typeof 9007199254740992n); // => "bigint"
console.log(typeof "JavaScript"); // => "string"
console.log(typeof Symbol("シンボル"));// => "symbol"
console.log(typeof undefined); // => "undefined"
console.log(typeof null); // => "object"
console.log(typeof ["配列"]); // => "object"
console.log(typeof { "key": "value" }); // => "object"
console.log(typeof function() {}); // => "function"

// -------------------------------------------------

// リテラル

/*
    プリミティブ型の値や一部のオブジェクトは、リテラルを使うことで簡単に定義できるようになっている。
    リテラルとはプログラム上で数値や文字列など、データ型の値を直接記述できるように構文として定義されたもの。
*/

// Boolリテラル
true; // => true
false; // => false

// 10進数の整数リテラル
console.log(1); // => 1
console.log(10); // => 10
console.log(255); // => 255
console.log(1_000_000_000_000); // => 1000000000000

// 2進数の整数リテラル
console.log(0b1111); // => 15
console.log(0b10000000000); // => 1024

// 8進数の整数リテラル
console.log(0o644);  // => 420
console.log(0o777);  // => 511

// 16進数の整数リテラル
console.log(0xFF); // => 255
console.log(0xff); // => 255 小文字で書いても意味は同じ
console.log(0x30A2); // => 12450

// 浮動小数点数リテラル
.123; // => 0.123 0を省略
2e8; // => 200000000

// BigIntリテラル
console.log(1n); // => 1n
console.log(9007199254740992n); // => 9007199254740992n　2^53-1より大きな値も扱える

// 文字列リテラル
console.log("文字列"); // => "文字列"
console.log('文字列'); // => "文字列"
console.log(`文字列`); // => "文字列"
/*
    "（ダブルクォート）と'（シングルクォート）はまったく同じ意味。
    文字列リテラルは同じ記号で囲む必要があるため、
    文字列の中に同じ記号が出現した場合は、 \を使ってエスケープしなけれいけない。
*/

// テンプレートリテラル
`複数行の
文字列を
入れたい`; // => "複数行の\n文字列を\n入れたい"
const str = "文字列";
console.log(`これは${str}です`); // => "これは文字列です"

// オブジェクトリテラル
const obj0 = {}; // 中身が空のオブジェクトを作成
const obj = {
    "key": "value"
};
console.log(obj.key); // => "value" ドット記法
console.log(obj["key"]); // => "value" ブラケット記法

/*
   次のように識別子として利用できないプロパティ名は
   ドット記法として書くことができない。
*/
const object = {
    "123": "value" // プロパティ名は文字列の"123"
};
console.log(object["123"]); // => "value" OK: ブラケット記法では、文字列として書くことができる
console.log(object.123); // NG: ドット記法では、数値からはじまる識別子は利用できない

// 配列リテラル
const emptyArray = []; // 空の配列を作成
const array = [1, 2, 3]; // 値を持った配列を作成

// 正規表現リテラル
/*
JavaScriptは正規表現をリテラルで書くことができる。
正規表現リテラルは/（スラッシュ）と/（スラッシュ）で正規表現のパターン文字列を囲む。
*/
const numberRegExp = /\d+/; // 1文字以上の数字にマッチする正規表現
console.log(numberRegExp.test("123")); // => true

// -------------------------------------------------

// ラッパーオブジェクト

/*
プリミティブ型は基本的にリテラルで表現するが、
真偽値（Boolean）、数値（Number）、文字列（String）は
それぞれオブジェクトとして表現する方法もある。
これらはプリミティブ型の値をラップしたような
オブジェクトであるために、ラッパーオブジェクトと呼ばれる。
*/

// 文字列をラップしたStringラッパーオブジェクト
const str0 = new String("文字列");
// ラッパーオブジェクトは"object"型のデータ
console.log(typeof str); // => "object"
// Stringオブジェクトの`length`プロパティは文字列の長さを返す
console.log(str.length); // => 3


/*
JavaScriptではプリミティブ型のデータに対しても
オブジェクトのように参照できる仕組みがあるため
明示的にラッパーオブジェクトを使うべき理由はない。
*/

// プリミティブ型の文字列データ
const str1 = "文字列";
// プリミティブ型の文字列は"string"型のデータ
console.log(typeof str); // => "string"
// プリミティブ型の文字列も`length`プロパティを参照できる
console.log(str.length); // => 3