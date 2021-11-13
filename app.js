var inputText = document.querySelector("#input-txt");
var btnSubmit = document.querySelector("#btn-submit");
var outputText = document.querySelector("#output-txt");

function submitEventHandler(){
    var input = inputText.value;
    
    var output = input + " is awsome 💯."

    outputText.innerText = output.toUpperCase();    
}


btnSubmit.addEventListener("click", submitEventHandler);