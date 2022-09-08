const btn = document.querySelector('.talk')
const content = document.querySelector('.input-box');


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log('voice activated and listening');
};

recognition.onresult = function(event){
    const current = event.resultIndex;
    const transcript = event.results[ current][0].transcript;
    document.getElementById("textInput").value = transcript;
    sendButton();
    content.textContent = transcript;
   
}

btn.addEventListener('click',() =>{
    recognition.start()
});

//voice AI
