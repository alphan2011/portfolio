<!-- HTML top code goes here -->

<?

// Form processing takes place here. message displayed here too
require('form/form.class.php');
$form = new Form();
$form->processForm(

	'anhthuphan.com' // Put your mail domain here
	,
	'Contact Me' // Put your site name / form name here
	,
	'alphan2011@arizona.edu' // Where will the form notification be sent?
	,
	'noreply@anthuphan.com' // This is what the form FROM: address wil be, if the form submissions doesn't contain an email field

);


?>

<!-- HTML bottom code goes here -->
