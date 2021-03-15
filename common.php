<?php




/* stores the html code for the head */

function outputHead($title){
echo '<!DOCTYPE HTML>';
echo '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">';
echo '<link rel="stylesheet" type="text/css" href="css/style.css">';
echo '<script src="https://cdn.jsdelivr.net/npm/@joeattardi/emoji-button@3.1.1/dist/index.min.js"></script>';
echo '<html lang="en">';
echo '<html>';
echo '<head>';
echo '<meta charset="UTF-8">';
echo '<link rel="shortcut icon" href="#">';
echo '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
echo '<title>'. $title .'</title>';
echo '</head>';

}

/* stores the html code for the header */

function outputHeader($title){
    echo '<header>';
    echo '<h1> <strong>'. $title .'</strong> </h1>';
    echo '</header>';
}

/* stores the html code for the navigation bar */
function outputNav(){
echo '<div class="sidenav">';
echo '<a href="index.php">Home</a>';
echo '<a href="enroll.php">Enroll</a>';
echo '<a href="grades.php">Grades</a>';
echo '<a href="schedule.php">Academic Calendar</a>';
echo '</div>';
}


function outputChat(){
    echo '<section>';
    echo '<button class="chat-btn" id = "mic" >' ;
    echo '<i class="material-icons"> Help </i>';
    echo '</button>';
    echo '<div class="chat-popup">';
    // echo '<div class="badge">1</div>';
    echo ' <div class="chat-area id=\'scrolldown\'">';
    echo '<div class="income-msg">';
    echo '<!-- <img src="images/zug.jpg" class="avatar" alt=""> -->';
    echo '<!--<span class="msg"> Hi, How can I help you?</span> -->';
    echo '<div class="chatarea-main">';




    echo '<div class = "chatarea-outer"> ';
    echo '<button class="submit" id="recordBtn"> <i class="material-icons"> Click to start Chatbot </i></button>';
    // echo '<button class="submit" id="voicebtn"> <i class="material-icons"> Click to talk </i></button>';

    // echo '<div class="out-msg"> Please Speak or Type for activate <img src="images/zug.jpg" class="avatar">  </div>';
    echo '</div>';
    echo '</div>';  
    echo ' <div class="chatbot-area" span class = "msg"> </span>';
    echo '<!-- <button id = "mic">Speak it</button> -->';
    echo '</div>';
    echo '</div>';  
    echo '</div>';
    echo '<div class="input-area">';
    echo '<div id="text"> </div>';
    echo '<input type="text">';
    echo '<button class="submit" id="enterBtn" onclick="UserMessage();"> <i class="material-icons"> send </i></button>';
    echo '</div>';
    echo '</div>';
    echo  '<script src="JS/main.js"></script>';
	echo '<script src="JS/index.js"></script>'; 
    echo '</section>';
}



/* stores the html code for the footer */
function outputFooter(){
    echo '<footer>';
    echo '<p> Lynne Abela </p>';
    echo '</footer>';
    echo '</html>';
}