// 999回文字をランダムに出力して、1000回目に単語が完成していたらコングラッチュレーション！　なプログラム
// https://lab.syncer.jp/Web/JavaScript/Snippet/15/


// 各文字の配列
const letter_a = ["た", "り", "び", "あ", "く"];
const letter_b = ["ら", "ん", "ー", "そ", "も"];
const letter_c = ["こ", "ご", "ず", "び", "り"];

// スロットの要素数（const：初期値必須）
const a_len = letter_a.length;
const b_len = letter_b.length;
const c_len = letter_c.length;

// 出力
const button = <HTMLDivElement>document.getElementById("button");
button.addEventListener("click", (evt) => {
    if (!(evt.target instanceof HTMLDivElement)) {
        return;
    }

    for (let i = 0; i < 1001; i++) {
        // インデックス
        let index_a = Math.floor(Math.random() * a_len);
        let index_b = Math.floor(Math.random() * b_len);
        let index_c = Math.floor(Math.random() * c_len);

        // 結果の文字
        let str_a = letter_a[index_a];
        let str_b = letter_b[index_b];
        let str_c = letter_c[index_c];

        // 三文字
        let print_letter = "";
        print_letter = str_a + str_b + str_c;

        // 出力先
        let elem = <HTMLSpanElement>document.getElementById("result");

        if (i === 1000) {
            if (index_a === index_b && index_a === index_c && index_b === index_c) {
                // 出力
                elem.innerHTML = print_letter + "<br />おめでとう！";
                console.log("おめでとう！");
            } else {
                elem.innerHTML = print_letter + "<br />残念！";
                console.log("残念！");
            }
        } else {
            // 出力
            elem.innerHTML = print_letter;
            console.log(print_letter);
        }
    }
});

// 課題　なぜ型宣言するとSyntaxErrorが出るのか
