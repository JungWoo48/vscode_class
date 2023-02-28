// 전역 변수
const num1 = document.getElementById("num1"); // 요소 추적의 의미, 값 속성 추적 X
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

function plus() {
    // 함수가 호출 되었을때 내부 코드가 해석되면서 출력
    const n1 = Number(num1.value);
    const n2 = Number(num2.value);

    result.innerText = n1 + n2;
}
function minus() {

    const n1 = Number(num1.value);
    const n2 = Number(num2.value);

    result.innerText = n1 - n2;
}
function multi() {

    const n1 = Number(num1.value);
    const n2 = Number(num2.value);

    result.innerText = n1 * n2;
}
function div() {

    const n1 = Number(num1.value);
    const n2 = Number(num2.value);

    result.innerText = n1 / n2;
}
function mod() {

    const n1 = Number(num1.value);
    const n2 = Number(num2.value);

    result.innerText = n1 % n2;
}