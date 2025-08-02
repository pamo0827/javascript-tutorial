/*
    ブラウザでJavaScriptを実行する方法としては大きく分けて2つある。
    1つ目はブラウザの開発者ツールのコンソール上でJavaScriptコードを評価する方法。
    2つ目はHTMLファイルを作成しJavaScriptコードを読み込む方法。
*/

// 1. ブラウザの開発者ツールのコンソール上でJavaScriptコードを評価（省略）

// 2. HTMLファイルを作成しJavaScriptコードを読み込む

1;
console.log(1);
const total = 42 + 42;

/*
    HTMLファイルとしてindex.htmlファイルを作成し、
    このHTMLファイルからindex.jsファイルを読み込み実行する。
    
    重要なのは
    <script src="./index.js"></script>
    という記述。
    
    これは同じディレクトリにあるindex.jsという名前のJavaScriptファイルをスクリプトとして読み込むという意味になる。
*/

// -------------------------------------------------

console.log(1; // => SyntaxError: missing ) after argument list

/*
    【エラーメッセージの解説】
    SyntaxError: missing ) after argument list[詳細] index.js:1:13
    ^^^^^^^^^^^  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^      ^^^^^^^^　^^^^
    エラーの種類                |                        | 　行番号:列番号
                      エラー内容の説明                 ファイル名
*/
