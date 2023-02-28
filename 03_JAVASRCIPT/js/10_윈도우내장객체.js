// window.setTimeout(함수, 지연시간)

const btn1 = document.getElementById("btn1");

btn1.addEventListener("click" , function() {
    // 0초 클릭하자마자 지연시간 X)
    this.style.backgroundColor = 'red';

    // 3초 후 orange 로 변경
    window.setTimeout(function() {
        // window.setTimeout() 에서 this == window 객체
        btn1.style.backgroundColor = 'orange';
    }, 3000 );

    console.log("출력");

    // 6초후 yellow
    window.setTimeout(function() {
        btn1.style.backgroundColor = 'yellow';
    }, 6000);
    
    // 9초후 green
    window.setTimeout(function() {
        btn1.style.backgroundColor = 'green';
    }, 9000);

})

// 현재시간을 반환하는 함수
function currentTime() {
    const now = new Date(); // 현재 시간 정보를 지정하는 객체

    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    // 얻어온 시간값이 10미만 일경우 앞에 0추가
    if(hour < 10) hour = "0" + hour;
    if(min < 10) min = "0" + min;
    if(sec < 10) sec = "0" + sec;

    return hour + " : " + min  + " : " + sec;
}




// 페이지 로딩 되자마자 clock 에 현재 시간 출력

const clock = document.getElementById("clock");
clock.innerText = currentTime();

// #clock에 1초마다 현재 시간을 출력하는 코드 작성
const interval = window.setInterval(function() {
    clock.innerText = currentTime();
}, 1000);
// 1000= 1초 1초마다 clock.innerText를 갈아 끼운다

document.getElementById("stop").addEventListener("click", function() {
    window.clearInterval(interval);
})

//팝업창 열기
const openPopup1 = document.getElementById("openPopup1");
const openPopup2 = document.getElementById("openPopup2");
const openPopup3 = document.getElementById("openPopup3");

openPopup1.addEventListener("click", function() {
    // 새탭 에서 열기
    window.open("09_배열.html")
})

openPopup2.addEventListener("click", function() {
    //최소한의 팝업창 사용
    window.open("09_배열.html", "_blank", "popup")
})

openPopup3.addEventListener("click", function() {
    // 옵션이 지정된 팝업창
    // 옵션 작성 방법 : "K=V, K=V, K=V", 크기단위작성 X (px고정)

    const options = "width=400, height=500, top=50, left=400";

    window.open("09_배열.html", "popupWindow", options );
})

//팝업창(자식) 열기
document.getElementById("sendChild").addEventListener("click", function() {
    const options = "width=300, height=300, top=30, left=700";
    window.open("팝업.html", "popupWindow", options);
   
})