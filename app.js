var inputText = document.querySelector("#input-txt");
var btnSubmit = document.querySelector("#btn-submit");
var outputText = document.querySelector("#output-txt");

function errorHandler(error){
    console.log("Error occured", error);
    alert("Server not responding");
}

function submitEventHandler(){
     var input = inputText.value;

     var url = "https://api.funtranslations.com/translate/minion.json"
     var serverURL = url + "?text=" + input;

     fetch(serverURL)
     .then(response => response.json())
     .then(json => {
         var translatedText = json.contents.translated;
         outputText.innerText = translatedText;
     })
     .catch(errorHandler);
}


btnSubmit.addEventListener("click", submitEventHandler);