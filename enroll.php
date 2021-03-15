<?php 

include("common.php"); //includes external php file
outputHead("A Lucid Dream - UserScore"); /* outputs the php  function for the head */
outputHeader("Enroll in a Course"); 
// outputNav(); /* outputs the php  function for the navigation bar */
session_start(); /* starts the session so the user information can be called from the validate php */

// outputChat();



?>

<link rel="stylesheet" type="text/css" href="css/enroll.css">
<link rel="stylesheet" type="text/css" href="css/grades.css">


<div class="warpper">
  <input class="radio" id="one" name="group" type="radio" checked>
  <input class="radio" id="two" name="group" type="radio">
  <input class="radio" id="three" name="group" type="radio">
  <div class="tabs">
  <label class="tab" id="one-tab" for="one">Information Technology BSc Honours</label>
  <label class="tab" id="two-tab" for="two">Computer Science BSc Honours </label>
    </div>
  <div class="panels">
  <div class="panel" id="one-panel">
    <div class="panel-title">Why study BSc Information Technology?</div>
    <p>Our BSc Information Technology is structured in ways that map explicitly on to modern technology, and includes systems design, application development in a modern industrial strength programming language, network design and management, web-application development including both server and client side programming.!</p>
  </div>
  <div class="panel" id="two-panel">
    <div class="panel-title">Why study Computer Science?</div>
    <p>The BSc (Hons) Computer Science programme has been developed to reflect the dynamic and fast evolving nature of the computer science industry. The programme addresses the vast repertoire of computing skills and engineering concepts that are critically sought within the scientific and technological industries. The exclusive manner in which topics are undertaken within the programme enhance the fundamental understanding of systems engineering with the practical aspects of computer Development and the innovative concepts within information science.</p>
  </div>
  </div>
</div>


