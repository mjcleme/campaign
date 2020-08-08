<?php
	$addres = "jmartinez@imaginacionweb.net"; /*Change by your email!!!!*/
	$subject = "Messsage from Political Landing Page"; /*Issue*/
	$date = date ("l, F jS, Y"); 
	$time = date ("h:i A"); 	
	$Email=$_REQUEST['Email'];

	$msg="
	Name: $_REQUEST[Name]
	Email: $_REQUEST[Email]

	Message sent from website on date  $date, hour: $time.\n

	Message:
	$_REQUEST[Message]";

	if ($Email=="") {
		echo "<div class='alert alert-danger'>Please enter your email</div>";
	}
	else{
		mail($addres, $subject, $msg, "From: $_REQUEST[Email]");
		echo "<div class='alert alert-success'>Thank you for your message..</div>";	
	}
	
?>
