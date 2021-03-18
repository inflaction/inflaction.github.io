const submitBtn = document.querySelector('.submit');

const chatBtn = document.querySelector('.chat-btn');
const chatArea = document.querySelector('.chat-area');
const inputElm = document.querySelector('input');
const usermsg = document.querySelector('my-msg');
const popup = document.querySelector('.chat-popup');





var scrolldown = document.querySelector('#scrolldown');
// scrolldown.scrollTop = scrolldown.scrollHeight - scrolldown.clientHeight;







// Emoji selection  
window.addEventListener('DOMContentLoaded', () => {



  });        

//   chat button toggler 

chatBtn.addEventListener('click', ()=>{
    popup.classList.toggle('show');


    
})




enterBtn.addEventListener('click', ()=>{

  let userInput = inputElm.value;
  let output = '';

  output += `<div class="out-msg">
  <span class="my-msg">${userInput}</span>
  <img src="images/Portrait_Placeholder.png" class="avatar">
  </div>`;

  chatareaouter.innerHTML += output;
  return chatareaouter;

})






// function EnrollCourse() {
//   var site = "http://localhost:8888/university/enroll.php";
//   document.getElementsByName('enrollpage')[0].src = site;
// }


// var iframe = document.createElement('enrollpage');
// iframe.style.display = "none";
// iframe.src = "http://localhost:8888/university/enroll.php";



// enterBtn.addEventListener('click', ()=>{


//   let userInput = inputElm.value;

//   let temp = `<div class="out-msg">
//   <span class="my-msg" input id = "input" type="text">${userInput}</span>
//   <img src="images/Portrait_Placeholder.png" class="avatar">
//   </div>`;

  
//   chatArea.insertAdjacentHTML("afterend", temp);
//   inputElm.value = '';

// })




// send msg 


// enterbtn

// enterBtn.addEventListener('keypress',function(e){
//   var key = e.which || e.keyCode;
//   if  (key===13){
//       var input = document.getElementById("input").value;
//       document.getElementById("#input.mymsg").innerHTML = input;
//       console.log(input);
//       output(input);



// enterBtn.addEventListener('click', (userOutput)=>{



//     let userInput = inputElm.value;

//     let temp = `<div class="out-msg">
//     <span class="my-msg" input id = "input" type="text">${userInput}</span>
//     <img src="images/Portrait_Placeholder.png" class="avatar">
//     </div>`;
//     chatArea.insertAdjacentHTML("beforeend", temp);
//     inputElm.value = '';
//     userOutput = userInput;

// })






