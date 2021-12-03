var inputText = document.querySelector("#txt-input");
var btnSubmit = document.querySelector("#btn-submit");
var outputText = document.querySelector("#txt-output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getFetchURL(input){
    return serverURL+"?text="+input;
}

function errorHandler(error){
    console.log("Error occured", error);
    alert("Try Again!");
}

function submitButtonHandler(){
 var input = inputText.value;

 fetch(getFetchURL(input))
 .then(response => response.json())
 .then(json => {
    var output = json.contents.translated;
    outputText.innerText = output;
 })
 .catch(errorHandler)
 };

btnSubmit.addEventListener("click", submitButtonHandler);