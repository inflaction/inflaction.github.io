<?php

include ("common.php"); //includes external php file
outputHead("Oxford University - Log in "); /* outputs the php  function for the head */








?>

<link rel="stylesheet" type="text/css" href="css/login.css">

<div class="container">
  <section id="content">
    <form action="validate.php" method = "POST">
      <h1>Login Form</h1>
      <div>
        <input type="text" placeholder="Username" required="" name="username" />
      </div>
      <div>
        <input type="password" placeholder="Password" required="" name="password" />
      </div>
      <div>
        <input type="submit" value="login" name ="login" />
      </div>
    </form><!-- form -->
    


  </section><!-- content -->
</div><!-- container -->

