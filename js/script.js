$(document).ready(function () {
	var beginningWindowHeight = $(window).height();
	var halfBeginningHeight = $(window).height() / 2;

	$('#home').height(beginningWindowHeight);
	$('#intro-row').css("margin-top", halfBeginningHeight - $('#logo-row').height());

	$('#skills').height(beginningWindowHeight);
	//$('#skill-row').css("margin-top", halfBeginningHeight / 2.5);

	$('#education-experience').height(beginningWindowHeight);
	$('#works').height(beginningWindowHeight);
	$('#hobbies').height(beginningWindowHeight);

	$('#social').height(beginningWindowHeight);
	$('#social h1').css("margin-top", beginningWindowHeight / 4);
	$('#social h1').css("margin-bottom", beginningWindowHeight / 5);

	$(window).resize(function() {
		var resizedWindowHeight = $(window).height();
		var halfResizedHeight = $(window).height() / 2;

		$('#home').height(resizedWindowHeight);
		$('#intro-row').css("margin-top", halfResizedHeight - $('#logo-row').height());

		$('#skills').height(resizedWindowHeight);
		//$('#skill-row').css("margin-top", halfBeginningHeight / 2.5);

		$('#education-experience').height(resizedWindowHeight);
		$('#works').height(resizedWindowHeight);
		$('#hobbies').height(resizedWindowHeight);

		$('#social').height(resizedWindowHeight);
		$('#social h1').css("margin-top", resizedWindowHeight / 4);
		$('#social h1').css("margin-bottom", resizedWindowHeight / 5.5);
	});
	
});

/*function setHomeHeight (windowHeight, halfHeight, element) {
	element.height(windowHeight)
}*/