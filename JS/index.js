// const submitBtn = document.querySelector('.submit');

// const chatBtn = document.querySelector('.chat-btn');
// const chatArea = document.querySelector('.chat-area');
// const inputElm = document.querySelector('input');
// const usermsg = document.querySelector('my-msg');








let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

//Welcome 
let welcome = ["Blessings friend, I am the one they call Zug"];
let start = ["I am here to guide you through these paths. Where would you like to start?"];
let choices = ["Enroll in a Course, Grading Results , Academic Calendar or would you like to just chat?"];



// Enroll
let enroll = ["Which Course would you like to study?"];
let cs = ["You have chosen to enroll in Computer Science, a brave choice indeed. type your email and i will send you an application form swiftly"];
let it = ["You have chosen to enroll in IT internet technology, please type your email and i will send you an application form swiftly"];
let applicationform = ["The ravens have been sent, your application form will arrive shortly, will you be needing further assistance?"];

// Grades 
let credentials = ["I will take you there, but only your credentials can get you through."];

// Schedule
let schedule = ["this is the calendar of the future, praise the oracle."];

// Further help
let assistance = ['I hope that i served you well friend, will you be needing further assistance?'];
// goodbye
let goodbye = ['Then i will bid you goodbye friend, may we meet again'];



// chatting section 
let chatintro = ['What would you like to talk about friend?'];
let who = ['I am an Orc, i have come a long way from home to study here and work.'];
let home = ['My home is called durotar, it is a desolate place with limited resources'];
let howare = ['Surprising that you would ask that, not many people care about us orcs. I am staying strong, how about you?'];
let answer = ['Glad to hear friend, may your ancestors guide you.'];
let joke1 = ['What do you call a child of an orc and a halfling?'];
let joke2 = ['A half-orc quarterling'];





const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var grammar = '#JSGF V1.0';

var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);




const recognition = new SpeechRecognition();
recognition.lang = 'en-US';
// recognition.interimResults = true;
recognition.maxAlternatives = 1;
// recognition.continuous = true;



function UserMessage(){ 

    let Uservalue = inputElm.value;

    var mailformat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

    if(Uservalue.match(mailformat))
    {
        var msg = new SpeechSynthesisUtterance();
        msg.text = applicationform;
        console.log('message: ' + msg.text);
        chatareamain.appendChild(showchatbotmsg(msg.text));
        window.speechSynthesis.speak(msg);
    }else
    {
    alert("You have entered an invalid email address!");
    }

 }
        








// Writes the User voice input into the chatbox
function showusermsg(usermsg){
    let output = '';
    output += `<div class="out-msg">
    <span class="my-msg">${usermsg}</span>
    <img src="images/Portrait_Placeholder.png" class="avatar">
    </div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}



// Writes the Chatbox voice output into the chatbox
function showchatbotmsg(chatbotmsg){
    let output = '';
    output += `<div class="out-msg">
    <span class="my-msg">${chatbotmsg}</span>
    <img src="images/zug.jpg" class="avatar">
    </div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}






function chatbotvoice(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "I didn't catch that, repeat please.";

    if(message.includes('course') || message.includes('enroll' || message.includes('enrol')) ){
        let finalresult = enroll;
        speech.text = finalresult;
        window.open("http://localhost:8888/university/enroll.php"); // will redirect user to enroll page

        /* follow up on course selection */
    } 
    
    if (message.includes('it') || message.includes('information') ||  message.includes('technology')){
        // add create document textbox element 
        let finalresult = it;
        speech.text = finalresult;
    }

    if (message.includes('cs') || message.includes('computer science') ||  message.includes('science') ||  message.includes('computer')){
    let finalresult = cs[Math.floor(Math.random() * cs.length)];
     // add create document textbox element 
    speech.text = finalresult;
    }


    if(message.includes('grades') || message.includes('my grades' || message.includes('marks') || message.includes('my marks')) ){
        let finalresult = credentials;
        speech.text = finalresult;
        window.open("http://localhost:8888/university/login.php"); // will redirect user to enroll page


        setTimeout(function(){              //// chatbot will speak after 7 seconds have past
        
            var msg = new SpeechSynthesisUtterance();
            msg.text = assistance;
            console.log('message: ' + msg.text);
            chatareamain.appendChild(showchatbotmsg(msg.text));
            window.speechSynthesis.speak(msg);
             }, 7000);}


    if(message.includes('calendar') || message.includes('academic' || message.includes('academic calendar') || message.includes('schedule') || message.includes('my schedule')) ){
        let finalresult = schedule;
        speech.text = finalresult;
        window.open("http://localhost:8888/university/schedule.php"); // will redirect user to enroll page

        setTimeout(function(){              //// chatbot will speak after 7 seconds have past
        
        var msg = new SpeechSynthesisUtterance();
        msg.text = assistance;
        console.log('message: ' + msg.text);
        chatareamain.appendChild(showchatbotmsg(msg.text));
        window.speechSynthesis.speak(msg);
         }, 7000);}




    if (message.includes('no') || message.includes('no i don\'t') ||  message.includes('no i do not')){
        let finalresult = goodbye;
        recognition.stop();
             // add create document textbox element 
        speech.text = finalresult;
        }



        if (message.includes('yeah') || message.includes('yes i do') ||  message.includes('yes')){
            let finalresult = chatintro;
                 // add create document textbox element 
            speech.text = finalresult;
            }
            
        

/* ------------------------ CHATTING AREA  */




if(message.includes('chat') || message.includes('just chat')){
    let finalresult = chatintro;
    speech.text = finalresult;
}

if(message.includes('who are you') || message.includes('who are') || message.includes('what are') ){
    let finalresult = who;
    speech.text = finalresult;
}

if(message.includes('how are you') || message.includes('how are') || message.includes('are you okay') || message.includes('are you ok') || message.includes('doing ok') ){
    let finalresult = howare;
    speech.text = finalresult;
}

if(message.includes('i\'m ok') || message.includes('i\'m doing ok') || message.includes('alright') || message.includes('not bad') || message.includes('doing ok') ){
    let finalresult = answer;
    speech.text = finalresult;
}


if(message.includes('tell me a joke') || message.includes('joke')){
    let finalresult = joke1;
    speech.text = finalresult;

    setTimeout(function(){              //// chatbot will speak after 7 seconds have past
        
        var msg = new SpeechSynthesisUtterance();
        msg.text = joke2;
        console.log('message: ' + msg.text);
        chatareamain.appendChild(showchatbotmsg(msg.text));
        window.speechSynthesis.speak(msg);
         }, 3000);

}



if(message.includes('bye') || message.includes('goodbye') || message.includes('see you')){
    recognition.stop();
    let finalresult = goodbye;
    speech.text = finalresult;
}




    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}


// recognition.addEventListener("result",resultOfSpeechRecognition);
// function resultOfSpeechRecognition(event){
//     const resultIndex = event.results[0][0].transcript;


// }

recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
   
    chatbotvoice(transcript);
    console.log(transcript);
}

recognition.addEventListener("end", () => {
    recognition.start();
  });






submitBtn.addEventListener("click", function(){

    recognition.start();
              var words = [welcome,start,choices]   
          for (var i = 0; i < words.length; i++) {            // looping the array
            var msg = new SpeechSynthesisUtterance();
            msg.text = words[i];
            console.log('word: ' + words[i]);
            console.log('message: ' + msg.text);
            chatareamain.appendChild(showchatbotmsg(msg.text));
            window.speechSynthesis.speak(msg);
            document.querySelector('#recordBtn').textContent = 'Started';
            console.log("Activated");
          }})


 

    
             




// voicebtn.addEventListener("click", function(){

//     document.querySelector('#voicebtn').textContent = 'Talking';

// })
    


        

    // var x = 0;

    // if(x==0) {
    //         var words = [welcome,start,choices]             // an array of stings that the chatbot will speak, they are in an array so they are are said one after an other, and they will be in different chat sections from each other.
    //     for (var i = 0; i < words.length; i++) {            // looping the array
    //         var msg = new SpeechSynthesisUtterance();
    //         msg.text = words[i];
    //         console.log('word: ' + words[i]);
    //         console.log('message: ' + msg.text);
    //         chatareamain.appendChild(showchatbotmsg(msg.text));
    //         window.speechSynthesis.speak(msg);
    //     }
    //  document.querySelector('#recordBtn').textContent = 'Voice Activated';
    //  recognition.start();
    //  recognition.continuous = true;
    //  console.log("Activated");
    //  x = 1;
    // } else {
    // document.querySelector('#recordBtn').textContent = 'Activate Voice';
    // x = 0;
    // }




    
    
    
    



// function talk() {
//     var user =document.getElementById("input-area") .value;
//     document.getElementById("chatLog").innerHTML +=user+"<br>";
//    if(user in know){
//        document.getElementById("chatLog").innerHTML += know[user]+"<br>";
//    } else{
//        document.getElementById("chatLog").innerHTML+="I am not a genius , ask me something that I know!<br>";}}
