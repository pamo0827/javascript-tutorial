/*
    JavaScriptの変数には
    ・const
    ・let
    ・var
    この3つがある。
*/

// -------------------------------------------------

// 1. const

/*
    constでは、再代入できない変数の宣言とその変数が参照する値（初期値）を定義できる。

    【使い方】
    const 変数名 = 初期値;

    変数同士を,（カンマ）で区切ることにより、同時に複数の変数を定義できる。
*/

const bookTitle0 = "JavaScript Primer";

const bookTItle1 = "JavaScript Primer",
      bookCategory = "プログラミング";

// -------------------------------------------------

// 2. let

/*
    letでは、値の再代入が可能な変数を宣言できる。
    デフォルト値としてundefinedで初期化される。
*/

let count;
console.log(count);
count = 1;
count = 2;
count = 3;
console.log(count);

// -------------------------------------------------

// 3. var

/*
    varには同じ名前の変数を再定義できてしまう問題や、
    変数の巻き上げと呼ばれる意図しない挙動があり、
    利用することは避けたほうがよい
*/

var x = 1;
var x = 2;

// 変数名に使える名前のルール

let $; // OK: $が利用できる
let _title; // OK: _が利用できる
let jquery; // OK: 小文字のアルファベットが利用できる
let TITLE; // OK: 大文字のアルファベットが利用できる
let es2015; // OK: 数字は先頭以外なら利用できる
let 日本語の変数名; // OK: 一部の漢字や日本語も利用できる

/*
let 1st; // NG: 数字から始まっている
let 123; // NG: 数字のみで構成されている
let let; // NG: `let`は変数宣言のために予約されているので利用できない
let if; // NG: `if`はif文のために予約されているので利用できない
*/

// constは定数ではない

/*
    JavaScriptではオブジェクトなどもconst宣言できる。
    次のコードのように、オブジェクトという値そのものは、
    初期化したあとでも変更できてしまう。
*/

const object = {
    key: "値"
}
console.log(object.key)

object.key = "新しい値"
console.log(object.key)



