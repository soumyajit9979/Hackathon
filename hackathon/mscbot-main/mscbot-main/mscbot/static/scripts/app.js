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
    readOutLoud(transcript);
}

btn.addEventListener('click',() =>{
    recognition.start()
});

//voice AI
function readOutLoud(command){
    const speech = new SpeechSynthesisUtterance();
    speech.text = 'Sorry, I am unable to answer that';
    
    if (command.includes('who are you')){
        const finalText = bio[Math.floor(Math.random() * bio.length)]
        speech.text = finalText;
    }
    if(command.includes('weather')){
        const finalText = weather[Math.floor(Math.random() * weather.length)]
        speech.text = finalText;
    }
    speech.volume = 1 ;
    speech.rate = 1;
    speech.pitch = 2
    window.speechSynthesis.speak(speech)
}