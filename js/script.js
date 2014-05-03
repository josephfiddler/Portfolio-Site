$(document).ready(function () {
	var beginningWindowHeight = "598";
	var halfBeginningHeight = $(window).height() / 2;

	new WOW().init();

	$('.toggle-menu').jPushMenu();


	$('#skillsScroll').click(function () {
		$('html, body').animate({
			scrollTop: $('#skills').offset().top }, 1000);
	});

	$('#educationExperienceScroll').click(function () {
		$('html, body').animate({
			scrollTop: $('#education-experience').offset().top }, 1000);
	});

	$('#worksScroll').click(function () {
		$('html, body').animate({
			scrollTop: $('#works').offset().top }, 1000);
	});

	$('#hobbiesScroll').click(function () {
		$('html, body').animate({
			scrollTop: $('#hobbies').offset().top }, 1000);
	});

	$('#socialScroll').click(function () {
		$('html, body').animate({
			scrollTop: $('#social').offset().top }, 1000);
	});

	$('#intro-row').css("margin-top", halfBeginningHeight - $('#logo-row').height());

	$('#education-row').css("padding-top", halfBeginningHeight / 4);
	$('#experience-row').css("margin-top", halfBeginningHeight / 2);

	$('#works h1').css("margin-top", beginningWindowHeight / 5);

	$('#social h1').css("margin-top", beginningWindowHeight / 4);
	$('#social h1').css("margin-bottom", beginningWindowHeight / 5);
});