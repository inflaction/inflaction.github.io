<?php


/* fixed variables for the account information */
$myusername = "lynne";
$mypassword = "123";





if(isset($_POST['login'])){
    $username = $_POST['username'];
    $password = $_POST['password'];

        /* checking if username and password matches the predefined variables */
    if( $username == $myusername and $password == $mypassword ){
    setcookie('username',$username);
    session_start();
    $_SESSION['username'] = $username;
    header("location: grades.php");
    }
    else{
        include("common.php");
        outputHead("Wrong Username or Password");
        header("location: login.php?msg=failed");
    }
}


?>