<?php

if(isset($_POST['submit'])){
	$firstname = $_POST['firstname'];
	$lastname = $_POST['lastname'];
	$message = $_POST['message'];
	$mailfrom = $_POST['mailfrom'];
	
	$subject = "Perkanika Web Form";
	$mailto = "junior_895@yahoo.com";
	$headers = "From: ".$mailfrom;
	$text = "You have a new message from".$firstname." ".$lastname.".\n\n".$message;
	
	mail($mailto, $subject, $text, $headers);
	header("Location: index.html?mailsend");
}