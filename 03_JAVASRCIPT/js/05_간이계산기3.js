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

    switch(op) {
        case '+' : result.innerText = n1 + n2; break;
        case '-' : result.innerText = n1 - n2; break;
        case '*' : result.innerText = n1 * n2; break;
        case '/' : result.innerText = n1 / n2; break;
        case '%' : result.innerText = n1 % n2; break;

    }


}