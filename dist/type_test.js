"use strict";
const letter_a = ["た", "り", "び", "あ", "く"];
const letter_b = ["ら", "ん", "ー", "そ", "も"];
const letter_c = ["こ", "ご", "ず", "び", "り"];
const a_len = letter_a.length;
const b_len = letter_b.length;
const c_len = letter_c.length;
for (let i = 0; i < 1001; i++) {
    let index_a = Math.floor(Math.random() * a_len);
    let index_b = Math.floor(Math.random() * b_len);
    let index_c = Math.floor(Math.random() * c_len);
    let str_a = letter_a[index_a];
    let str_b = letter_b[index_b];
    let str_c = letter_c[index_c];
    let print_letter = "";
    print_letter = str_a + str_b + str_c;
    if (i === 1000) {
        if (index_a === index_b && index_a === index_c && index_b === index_c) {
            console.log(print_letter);
            console.log("おめでとう！");
        }
        else {
            console.log("残念！");
        }
    }
    else {
        console.log(print_letter);
    }
}
//# sourceMappingURL=type_test.js.map