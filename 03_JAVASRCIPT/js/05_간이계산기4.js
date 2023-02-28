//전역변수
const num1 = document.getElementById("num1"); // 요소 추적의 의미, 값 속성 추적 X
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

function calc(btn) {
    //btn에는 연산자가 전달된다

    console.log(btn);

    const n1 = Number(num1.value);
    const n2 = Number(num2.value);


    const op = btn.innerText; //클릭된 버튼의 작성된 내용을 얻어옴(연산자)

    // eval(코드 형식의 문자열)
    // -> 매개변수의 문자열을 js코드로 해석/수행하는 함수
    // -> 속도가 느리고 보안이 너무 취약해 절대 사용하지 않는다

    // new function() 사용

    result.innerText = new Function("return " + n1 + op + n2)();
}