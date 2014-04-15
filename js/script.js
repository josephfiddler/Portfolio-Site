$(document).ready(function () {
	var beginningWindowHeight = $(window).height();

	$('#Home').height(beginningWindowHeight);
	$('#Skills').height(beginningWindowHeight);
	$('#Education-Experience').height(beginningWindowHeight);
	$('#Works').height(beginningWindowHeight);
	$('#Hobbies').height(beginningWindowHeight);
	$('#Social').height(beginningWindowHeight);

	$(window).resize(function() {
		var resizedWindowHeight = $(window).height();
		
		$('#Home').height(resizedWindowHeight);
		$('#Skills').height(resizedWindowHeight);
		$('#Education-Experience').height(resizedWindowHeight);
		$('#Works').height(resizedWindowHeight);
		$('#Hobbies').height(resizedWindowHeight);
		$('#Social').height(resizedWindowHeight);
	});
	
});