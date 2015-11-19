$(document).ready(function() {
 
		var studentGrades = {Ralph:90, Zack:80, Tony:100};
		$.each(studentGrades, function(name, grade){
			console.log(name + " got " + grade + "% on the test.");
		});

		// Checks to see if the click event is triggered from a button with id of submit-button
		$("#submit-button").on("click", function(event) {
			event.preventDefault();

			var birthYear = parseInt($("#birth-year").val());

			if ((1885 < birthYear) && (birthYear < 2015)) {
				var age = 2015 - birthYear;
				$("#calculated-age").html("You are " + age + " years old.");
				} else {
					$("#calculated-age").html("Yo dawg - Enter a valid year between 1885 and 2015.");
			}
			
		});

});