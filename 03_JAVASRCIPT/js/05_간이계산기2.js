//전역변수
const num1 = document.getElementById("num1"); // 요소 추적의 의미, 값 속성 추적 X
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

function calc(op) {
    //op에는 연산자가 전달된다

    const n1 = Number(num1.value);
    const n2 = Number(num2.value);

    switch(op) {
        case '+' : result.innerText = n1 + n2; break;
        case '-' : result.innerText = n1 - n2; break;
        case '*' : result.innerText = n1 * n2; break;
        case '/' : result.innerText = n1 / n2; break;
        case '%' : result.innerText = n1 % n2; break;

    }


}