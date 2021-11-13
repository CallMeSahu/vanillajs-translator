var btnStart = document.querySelector("#btn-start");

function clickEventHandler(){
    alert("Start button click!")
    console.log("Start button is click!")
}



btnStart.addEventListener("click", clickEventHandler);