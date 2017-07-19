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

window.sr = ScrollReveal();
sr.reveal('#page1', {duration: 2000});

$(document).ready(function(){
    jQuery.goup();
});