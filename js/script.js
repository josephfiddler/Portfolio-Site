$(document).ready(function () {
	var beginningWindowHeight = "598";
	var halfBeginningHeight = $(window).height() / 2;

	new WOW().init();

	$('.toggle-menu').jPushMenu();


	/*$('#skillsScroll').click(function () {
		$('html, body').animate({
			scrollTop: $('#skills').offset().top }, 2000);
	});

	$('#educationExperienceScroll').click(function () {
		$('html, body').animate({
			scrollTop: $('#education-experience').offset().top }, 2000);
	});

	$('#worksScroll').click(function () {
		$('html, body').animate({
			scrollTop: $('#works').offset().top }, 2000);
	});

	$('#hobbiesScroll').click(function () {
		$('html, body').animate({
			scrollTop: $('#hobbies').offset().top }, 2000);
	});

	$('#socialScroll').click(function () {
		$('html, body').animate({
			scrollTop: $('#social').offset().top }, 2000);
	});*/

	//$('#home').height(beginningWindowHeight);
	$('#intro-row').css("margin-top", halfBeginningHeight - $('#logo-row').height());

	//$('#skills').height(beginningWindowHeight);
	//$('#skill-row').css("margin-top", halfBeginningHeight / 2.5);

	//$('#education-experience').height(beginningWindowHeight);
	$('#education-row').css("padding-top", halfBeginningHeight / 4);
	$('#experience-row').css("margin-top", halfBeginningHeight / 2);

	//$('#works').height(beginningWindowHeight);
	$('#works h1').css("margin-top", beginningWindowHeight / 5);
	//$('#works h1').css("margin-bottom", beginningWindowHeight / 5);

	//$('#hobbies').height(beginningWindowHeight);

	//$('#social').height(beginningWindowHeight);
	$('#social h1').css("margin-top", beginningWindowHeight / 4);
	$('#social h1').css("margin-bottom", beginningWindowHeight / 5);

	/*$(window).resize(function() {
		var resizedWindowHeight = $(window).height();
		var halfResizedHeight = $(window).height() / 2;

		$('#home').height(resizedWindowHeight);
		$('#intro-row').css("margin-top", halfResizedHeight - $('#logo-row').height());

		$('#skills').height(resizedWindowHeight);
		//$('#skill-row').css("margin-top", halfBeginningHeight / 2.5);

		$('#education-experience').height(resizedWindowHeight);
		$('#education-row').css("padding-top", halfResizedHeight / 4);
		$('#experience-row').css("margin-top", halfResizedHeight / 2);


		//$('#works').height(resizedWindowHeight);
		//$('#works h1').css("margin-top", resizedWindowHeight / 5);
		//$('#works h1').css("margin-bottom", resizedWindowHeight / 5.5);

		$('#hobbies').height(resizedWindowHeight);

		$('#social').height(resizedWindowHeight);
		$('#social h1').css("margin-top", resizedWindowHeight / 4);
		$('#social h1').css("margin-bottom", resizedWindowHeight / 5.5);
	});*/
	
});

/*function setHomeHeight (windowHeight, halfHeight, element) {
	element.height(windowHeight)
}*/