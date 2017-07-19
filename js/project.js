$(document).ready(function() {
	$('#fullpage').fullpage();
});
$('#fullpage').fullpage({
	navigation: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
	menu: '#myMenu',
	directions: ['up', 'down'],
	scrollingSpeed: '900',
	fitToSection: 'true',
});
