$(document).ready(function() {
 
		var studentGrades = {Ralph:90, Zack:80, Tony:100};
		$.each(studentGrades, function(name, grade){
			console.log(name + " got " + grade + "% on the test.");
		});

		// Checks to see if the click event is triggered from a button with id of submit-button
		$("#submit-button").on("click", function(event) {
			// Prevents the default behavior of the submit event.
			event.preventDefault();
			// Creates a variable and sets its value to the input of an element with id birth-year
			var birthYear = $("#birth-year").val();
			// Creates a variable and sets its value to 2015 minus the value of the variable birthYear
			var age = 2015 - birthYear;
			// Finds an element with the id calculated-age, and adds to the HTML a string with the variable age in the middle.
			$("#calculated-age").html("You are " + age + " years old.");
		});

});