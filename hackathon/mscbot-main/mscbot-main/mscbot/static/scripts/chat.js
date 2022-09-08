
// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

    

    // speakText();

// Gets the first message
function firstBotMessage() {
    let firstMessage = "Type Help for more info"
    

    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    
    
    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);

}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
    
    // let btn1=document.createElement("button");
    // const btnp=document.createElement("p").classList.add("my_but");

    
    // btn1.innerHTML="Save1";
    // btn1.addEventListener("click",function(){
    //     alert("button1 is clicked")
    // });
    if (userText =="VIT Admission" || userText == "VIT admission"){
        let btn=document.createElement("button");
        btn.innerHTML="1-500";
        let btn1=document.createElement("button");
        btn1.innerHTML="501-1000";
        let btn2=document.createElement("button");
        btn2.innerHTML="1001-2000";
        btn.addEventListener("click",function(){

                    let btn=document.createElement("button");
                    btn.innerHTML="CSE";
                    let btn1=document.createElement("button");
                    btn1.innerHTML="ECE";
                    btn.addEventListener("click",function(){
                            let btn=document.createElement("button");
                            btn.innerHTML="AI Robo";
                            let btn1=document.createElement("button");
                            btn1.innerHTML="Core";

                            btn.addEventListener("click",function(){
                                    
                                let botHtml = '<p class="botText"><span>' + "Will be updated soon. Stay tuned !!" +  '</span></p>';
                                $("#chatbox").append(botHtml);
                                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                            });
                            btn1.addEventListener("click",function(){
                                    
                                let botHtml = '<p class="botText"><span>' + "Will be updated soon. Stay tuned !!" +  '</span></p>';
                                $("#chatbox").append(botHtml);
                                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                            });

                            let botResponse = getBotResponse(userText);
                            let botHtml = '<p class="botText"><span>' + "Select your specialization for CSE" +  '</span></p>';
                        
                            $("#chatbox").append(botHtml);
                            let botbut= '<p class="botText">' + document.getElementById("chatbox").append(btn); + '</p>';
                            let botbut1= '<p class="botText">' + document.getElementById("chatbox").append(btn1); + '</p>';
                            document.getElementById("chat-bar-bottom").scrollIntoView(true);
                        
                    });
                    btn1.addEventListener("click",function(){
                            let btn=document.createElement("button");
                            btn.innerHTML="Core";
                            let btn1=document.createElement("button");
                            btn1.innerHTML="Communication";
                            btn.addEventListener("click",function(){
                                    
                                let botHtml = '<p class="botText"><span>' + "Will be updated soon. Stay tuned !!" +  '</span></p>';
                                $("#chatbox").append(botHtml);
                                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                            });
                            btn1.addEventListener("click",function(){
                                    
                                let botHtml = '<p class="botText"><span>' + "Will be updated soon. Stay tuned !!" +  '</span></p>';
                                $("#chatbox").append(botHtml);
                                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                            });

                            let botResponse = getBotResponse(userText);
                            let botHtml = '<p class="botText"><span>' + "Select your specialization for ECE" +  '</span></p>';
                        
                            $("#chatbox").append(botHtml);
                            let botbut= '<p class="botText">' + document.getElementById("chatbox").append(btn); + '</p>';
                            let botbut1= '<p class="botText">' + document.getElementById("chatbox").append(btn1); + '</p>';
                            document.getElementById("chat-bar-bottom").scrollIntoView(true);
                        
                    });
                    let botResponse = getBotResponse(userText);
                    let botHtml = '<p class="botText"><span>' + "Select your branch" +  '</span></p>';
                
                    $("#chatbox").append(botHtml);
                    let botbut= '<p class="botText">' + document.getElementById("chatbox").append(btn); + '</p>';
                    let botbut1= '<p class="botText">' + document.getElementById("chatbox").append(btn1); + '</p>';
                    document.getElementById("chat-bar-bottom").scrollIntoView(true);
            
        });



        let botResponse = getBotResponse(userText);
        let botHtml = '<p class="botText"><span>' + botResponse +  '</span></p>';
    
        $("#chatbox").append(botHtml);
        let botbut= '<p class="botText">' + document.getElementById("chatbox").append(btn); + '</p>';
        btn1.addEventListener("click",function(){

                    let btn=document.createElement("button");
                    btn.innerHTML="Mechanical";
                    let btn1=document.createElement("button");
                    btn1.innerHTML="IT";
                    btn.addEventListener("click",function(){
                            let btn=document.createElement("button");
                            btn.innerHTML="Core";
                            let btn1=document.createElement("button");
                            btn1.innerHTML="Mechatronic";

                            btn.addEventListener("click",function(){
                                    
                                let botHtml = '<p class="botText"><span>' + "Will be updated soon. Stay tuned !!" +  '</span></p>';
                                $("#chatbox").append(botHtml);
                                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                            });
                            btn1.addEventListener("click",function(){
                                    
                                let botHtml = '<p class="botText"><span>' + "Will be updated soon. Stay tuned !!" +  '</span></p>';
                                $("#chatbox").append(botHtml);
                                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                            });

                            let botResponse = getBotResponse(userText);
                            let botHtml = '<p class="botText"><span>' + "Select your specialization for Mechanical" +  '</span></p>';
                        
                            $("#chatbox").append(botHtml);
                            let botbut= '<p class="botText">' + document.getElementById("chatbox").append(btn); + '</p>';
                            let botbut1= '<p class="botText">' + document.getElementById("chatbox").append(btn1); + '</p>';
                            document.getElementById("chat-bar-bottom").scrollIntoView(true);
                        
                    });
                    btn1.addEventListener("click",function(){
                            let btn=document.createElement("button");
                            btn.innerHTML="Scientific";
                            let btn1=document.createElement("button");
                            btn1.innerHTML="Commercial";
                            btn.addEventListener("click",function(){
                                    
                                let botHtml = '<p class="botText"><span>' + "Will be updated soon. Stay tuned !!" +  '</span></p>';
                                $("#chatbox").append(botHtml);
                                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                            });
                            btn1.addEventListener("click",function(){
                                    
                                let botHtml = '<p class="botText"><span>' + "Will be updated soon. Stay tuned !!" +  '</span></p>';
                                $("#chatbox").append(botHtml);
                                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                            });

                            let botResponse = getBotResponse(userText);
                            let botHtml = '<p class="botText"><span>' + "Select your specialization for IT" +  '</span></p>';
                        
                            $("#chatbox").append(botHtml);
                            let botbut= '<p class="botText">' + document.getElementById("chatbox").append(btn); + '</p>';
                            let botbut1= '<p class="botText">' + document.getElementById("chatbox").append(btn1); + '</p>';
                            document.getElementById("chat-bar-bottom").scrollIntoView(true);
                        
                    });
                    let botResponse = getBotResponse(userText);
                    let botHtml = '<p class="botText"><span>' + "Select your branch" +  '</span></p>';
                
                    $("#chatbox").append(botHtml);
                    let botbut= '<p class="botText">' + document.getElementById("chatbox").append(btn); + '</p>';
                    let botbut1= '<p class="botText">' + document.getElementById("chatbox").append(btn1); + '</p>';
                    document.getElementById("chat-bar-bottom").scrollIntoView(true);
            
        });



        
        let botbut1= '<p class="botText">' + document.getElementById("chatbox").append(btn1); + '</p>';
        
        btn2.addEventListener("click",function(){

                    let btn=document.createElement("button");
                    btn.innerHTML="Civil";
                    let btn1=document.createElement("button");
                    btn1.innerHTML="Architecture";
                    btn.addEventListener("click",function(){
                            let btn=document.createElement("button");
                            btn.innerHTML="Core";
                            let btn1=document.createElement("button");
                            btn1.innerHTML="Materials";
                            btn.addEventListener("click",function(){
                                    
                                let botHtml = '<p class="botText"><span>' + "Will be updated soon. Stay tuned !!" +  '</span></p>';
                                $("#chatbox").append(botHtml);
                                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                            });

                            btn1.addEventListener("click",function(){
                                    
                                let botHtml = '<p class="botText"><span>' + "Will be updated soon. Stay tuned !!" +  '</span></p>';
                                $("#chatbox").append(botHtml);
                                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                            });

                            let botResponse = getBotResponse(userText);
                            let botHtml = '<p class="botText"><span>' + "Select your specialization for Civil" +  '</span></p>';
                            $("#chatbox").append(botHtml);
                        
                            $("#chatbox").append(botHtml);
                            let botbut= '<p class="botText">' + document.getElementById("chatbox").append(btn); + '</p>';
                            let botbut1= '<p class="botText">' + document.getElementById("chatbox").append(btn1); + '</p>';
                            document.getElementById("chat-bar-bottom").scrollIntoView(true);
                        
                    });
                    btn1.addEventListener("click",function(){
                            let btn=document.createElement("button");
                            btn.innerHTML="Design";
                            let btn1=document.createElement("button");
                            btn1.innerHTML="History";
                            btn.addEventListener("click",function(){
                                    
                                let botHtml = '<p class="botText"><span>' + "Will be updated soon. Stay tuned !!" +  '</span></p>';
                                $("#chatbox").append(botHtml);
                                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                            });
                            btn1.addEventListener("click",function(){
                                    
                                let botHtml = '<p class="botText"><span>' + "Will be updated soon. Stay tuned !!" +  '</span></p>';
                                $("#chatbox").append(botHtml);
                                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                            });

                            let botResponse = getBotResponse(userText);
                            let botHtml = '<p class="botText"><span>' + "Select your specialization for Architecture" +  '</span></p>';
                        
                            $("#chatbox").append(botHtml);
                            let botbut= '<p class="botText">' + document.getElementById("chatbox").append(btn); + '</p>';
                            let botbut1= '<p class="botText">' + document.getElementById("chatbox").append(btn1); + '</p>';
                            document.getElementById("chat-bar-bottom").scrollIntoView(true);
                        
                    });
                    let botResponse = getBotResponse(userText);
                    let botHtml = '<p class="botText"><span>' + "Select your branch" +  '</span></p>';
                
                    $("#chatbox").append(botHtml);
                    let botbut= '<p class="botText">' + document.getElementById("chatbox").append(btn); + '</p>';
                    let botbut1= '<p class="botText">' + document.getElementById("chatbox").append(btn1); + '</p>';
                    document.getElementById("chat-bar-bottom").scrollIntoView(true);
            
        });



        
        let botbut2= '<p class="botText">' + document.getElementById("chatbox").append(btn2); + '</p>';









    }




    //e

    else if (userText =="IIT Admission" || userText == "IIT admission"){
        let btn=document.createElement("button");
        btn.innerHTML="1-500";
        let btn1=document.createElement("button");
        btn1.innerHTML="501-1000";
        let btn2=document.createElement("button");
        btn2.innerHTML="1001-2000";
        btn.addEventListener("click",function(){

                    let btn=document.createElement("button");
                    btn.innerHTML="CSE";
                    let btn1=document.createElement("button");
                    btn1.innerHTML="ECE";
                    btn.addEventListener("click",function(){
                            let btn=document.createElement("button");
                            btn.innerHTML="AI Robo";
                            let btn1=document.createElement("button");
                            btn1.innerHTML="Core";

                            btn.addEventListener("click",function(){
                                    
                                let botHtml = '<p class="botText"><span>' + "Will be updated soon. Stay tuned !!" +  '</span></p>';
                                $("#chatbox").append(botHtml);
                                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                            });
                            btn1.addEventListener("click",function(){
                                    
                                let botHtml = '<p class="botText"><span>' + "Will be updated soon. Stay tuned !!" +  '</span></p>';
                                $("#chatbox").append(botHtml);
                                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                            });

                            let botResponse = getBotResponse(userText);
                            let botHtml = '<p class="botText"><span>' + "Select your specialization for CSE" +  '</span></p>';
                        
                            $("#chatbox").append(botHtml);
                            let botbut= '<p class="botText">' + document.getElementById("chatbox").append(btn); + '</p>';
                            let botbut1= '<p class="botText">' + document.getElementById("chatbox").append(btn1); + '</p>';
                            document.getElementById("chat-bar-bottom").scrollIntoView(true);
                        
                    });
                    btn1.addEventListener("click",function(){
                            let btn=document.createElement("button");
                            btn.innerHTML="Core";
                            let btn1=document.createElement("button");
                            btn1.innerHTML="Communication";
                            btn.addEventListener("click",function(){
                                    
                                let botHtml = '<p class="botText"><span>' + "Will be updated soon. Stay tuned !!" +  '</span></p>';
                                $("#chatbox").append(botHtml);
                                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                            });
                            btn1.addEventListener("click",function(){
                                    
                                let botHtml = '<p class="botText"><span>' + "Will be updated soon. Stay tuned !!" +  '</span></p>';
                                $("#chatbox").append(botHtml);
                                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                            });

                            let botResponse = getBotResponse(userText);
                            let botHtml = '<p class="botText"><span>' + "Select your specialization for ECE" +  '</span></p>';
                        
                            $("#chatbox").append(botHtml);
                            let botbut= '<p class="botText">' + document.getElementById("chatbox").append(btn); + '</p>';
                            let botbut1= '<p class="botText">' + document.getElementById("chatbox").append(btn1); + '</p>';
                            document.getElementById("chat-bar-bottom").scrollIntoView(true);
                        
                    });
                    let botResponse = getBotResponse(userText);
                    let botHtml = '<p class="botText"><span>' + "Select your branch" +  '</span></p>';
                
                    $("#chatbox").append(botHtml);
                    let botbut= '<p class="botText">' + document.getElementById("chatbox").append(btn); + '</p>';
                    let botbut1= '<p class="botText">' + document.getElementById("chatbox").append(btn1); + '</p>';
                    document.getElementById("chat-bar-bottom").scrollIntoView(true);
            
        });



        let botResponse = getBotResponse(userText);
        let botHtml = '<p class="botText"><span>' + botResponse +  '</span></p>';
    
        $("#chatbox").append(botHtml);
        let botbut= '<p class="botText">' + document.getElementById("chatbox").append(btn); + '</p>';
        btn1.addEventListener("click",function(){

                    let btn=document.createElement("button");
                    btn.innerHTML="Mechanical";
                    let btn1=document.createElement("button");
                    btn1.innerHTML="IT";
                    btn.addEventListener("click",function(){
                            let btn=document.createElement("button");
                            btn.innerHTML="Core";
                            let btn1=document.createElement("button");
                            btn1.innerHTML="Mechatronic";

                            btn.addEventListener("click",function(){
                                    
                                let botHtml = '<p class="botText"><span>' + "Will be updated soon. Stay tuned !!" +  '</span></p>';
                                $("#chatbox").append(botHtml);
                                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                            });
                            btn1.addEventListener("click",function(){
                                    
                                let botHtml = '<p class="botText"><span>' + "Will be updated soon. Stay tuned !!" +  '</span></p>';
                                $("#chatbox").append(botHtml);
                                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                            });

                            let botResponse = getBotResponse(userText);
                            let botHtml = '<p class="botText"><span>' + "Select your specialization for Mechanical" +  '</span></p>';
                        
                            $("#chatbox").append(botHtml);
                            let botbut= '<p class="botText">' + document.getElementById("chatbox").append(btn); + '</p>';
                            let botbut1= '<p class="botText">' + document.getElementById("chatbox").append(btn1); + '</p>';
                            document.getElementById("chat-bar-bottom").scrollIntoView(true);
                        
                    });
                    btn1.addEventListener("click",function(){
                            let btn=document.createElement("button");
                            btn.innerHTML="Scientific";
                            let btn1=document.createElement("button");
                            btn1.innerHTML="Commercial";
                            btn.addEventListener("click",function(){
                                    
                                let botHtml = '<p class="botText"><span>' + "Will be updated soon. Stay tuned !!" +  '</span></p>';
                                $("#chatbox").append(botHtml);
                                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                            });
                            btn1.addEventListener("click",function(){
                                    
                                let botHtml = '<p class="botText"><span>' + "Will be updated soon. Stay tuned !!" +  '</span></p>';
                                $("#chatbox").append(botHtml);
                                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                            });

                            let botResponse = getBotResponse(userText);
                            let botHtml = '<p class="botText"><span>' + "Select your specialization for IT" +  '</span></p>';
                        
                            $("#chatbox").append(botHtml);
                            let botbut= '<p class="botText">' + document.getElementById("chatbox").append(btn); + '</p>';
                            let botbut1= '<p class="botText">' + document.getElementById("chatbox").append(btn1); + '</p>';
                            document.getElementById("chat-bar-bottom").scrollIntoView(true);
                        
                    });
                    let botResponse = getBotResponse(userText);
                    let botHtml = '<p class="botText"><span>' + "Select your branch" +  '</span></p>';
                
                    $("#chatbox").append(botHtml);
                    let botbut= '<p class="botText">' + document.getElementById("chatbox").append(btn); + '</p>';
                    let botbut1= '<p class="botText">' + document.getElementById("chatbox").append(btn1); + '</p>';
                    document.getElementById("chat-bar-bottom").scrollIntoView(true);
            
        });



        
        let botbut1= '<p class="botText">' + document.getElementById("chatbox").append(btn1); + '</p>';
        
        btn2.addEventListener("click",function(){

                    let btn=document.createElement("button");
                    btn.innerHTML="Civil";
                    let btn1=document.createElement("button");
                    btn1.innerHTML="Architecture";
                    btn.addEventListener("click",function(){
                            let btn=document.createElement("button");
                            btn.innerHTML="Core";
                            let btn1=document.createElement("button");
                            btn1.innerHTML="Materials";

                            btn.addEventListener("click",function(){
                                    
                                let botHtml = '<p class="botText"><span>' + "Will be updated soon. Stay tuned !!" +  '</span></p>';
                                $("#chatbox").append(botHtml);
                                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                            });
                            btn1.addEventListener("click",function(){
                                    
                                let botHtml = '<p class="botText"><span>' + "Will be updated soon. Stay tuned !!" +  '</span></p>';
                                $("#chatbox").append(botHtml);
                                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                            });

                            let botResponse = getBotResponse(userText);
                            let botHtml = '<p class="botText"><span>' + "Select your specialization for Civil" +  '</span></p>';
                        
                            $("#chatbox").append(botHtml);
                            let botbut= '<p class="botText">' + document.getElementById("chatbox").append(btn); + '</p>';
                            let botbut1= '<p class="botText">' + document.getElementById("chatbox").append(btn1); + '</p>';
                            document.getElementById("chat-bar-bottom").scrollIntoView(true);
                        
                    });
                    btn1.addEventListener("click",function(){
                            let btn=document.createElement("button");
                            btn.innerHTML="Design";
                            let btn1=document.createElement("button");
                            btn1.innerHTML="History";
                            btn.addEventListener("click",function(){
                                    
                                let botHtml = '<p class="botText"><span>' + "Will be updated soon. Stay tuned !!" +  '</span></p>';
                                $("#chatbox").append(botHtml);
                                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                            });
                            btn1.addEventListener("click",function(){
                                    
                                let botHtml = '<p class="botText"><span>' + "Will be updated soon. Stay tuned !!" +  '</span></p>';
                                $("#chatbox").append(botHtml);
                                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                            });

                            let botResponse = getBotResponse(userText);
                            let botHtml = '<p class="botText"><span>' + "Select your specialization for Architecture" +  '</span></p>';
                        
                            $("#chatbox").append(botHtml);
                            let botbut= '<p class="botText">' + document.getElementById("chatbox").append(btn); + '</p>';
                            let botbut1= '<p class="botText">' + document.getElementById("chatbox").append(btn1); + '</p>';
                            document.getElementById("chat-bar-bottom").scrollIntoView(true);
                        
                    });
                    let botResponse = getBotResponse(userText);
                    let botHtml = '<p class="botText"><span>' + "Select your branch" +  '</span></p>';
                
                    $("#chatbox").append(botHtml);
                    let botbut= '<p class="botText">' + document.getElementById("chatbox").append(btn); + '</p>';
                    let botbut1= '<p class="botText">' + document.getElementById("chatbox").append(btn1); + '</p>';
                    document.getElementById("chat-bar-bottom").scrollIntoView(true);
            
        });



        
        let botbut2= '<p class="botText">' + document.getElementById("chatbox").append(btn2); + '</p>';


    }

    //e


    else{
        let botResponse = getBotResponse(userText);
        let botHtml = '<p class="botText"><span>' + botResponse +  '</span></p>';
    
        $("#chatbox").append(botHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
    }


    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    
    
}

function getonlyresponse(){
    let userText = $("#textInput").val();

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

}

function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "I love Code Palace!";
    }



    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}


function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000)
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Heart clicked!")
}


$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});