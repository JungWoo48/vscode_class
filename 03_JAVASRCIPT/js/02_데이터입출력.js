// innerHTML로 읽어오기

function getInnerHTML1() {
    console.log(document.getElementById("test1").innerHTML);
}

// innerHTML로 변경하기(태그, 속성 해석용)

function setInnerHTML1() {
    const t1 = document.getElementById("test1");

    t1.innerHTML = "<b class='red'>변경된 내용</b>";
}

// innerHTML 응용

function add() {
    // 1) id 속성값이 "area1" 인 요소를 얻어아서 변수 (변수명 : area1)에 저장
    const area1 = document.getElementById("area1");

    // 2) area1 요소의 이전 내용에 새로운 내용을 누적
    area1.innerHTML += "<div class='area1-box'></div>"
}

// innerText로 읽어오기
const t2 = document.getElementById("test2");

function getInnerText1() {
    
    console.log(t2.innerText)
}

// innnerText로 변경하기

function setInnerText1() {
    t2.innerText = "<b class='red'>변경된 텍스트</b>";
}

// confirm

function fnConfirm() {
    const qes = confirm("배경색 변경")

    if( qes ) {
        document.getElementById("confirmTest").style.backgroundColor = 'pink';
    }
}

// prompt
function fnPrompt() {
    const input = prompt("변경할 버튼명 입력");
    // 입력값 or null

    if(input !=null) {
        document.getElementById("promptTest").innerText = input;
    } else {
        alert("취소");
    }
}