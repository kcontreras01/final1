$(document).ready(function() {

	var anchors = [],
    tooltips = [];
$('.section').each(function() {
    // retrieve the attribute
    var navigation = $(this).data('navigation');
    if (!navigation)
        return;

    // the attribute data-navigation is built like : anchor|tooltip
    var parts = navigation.split('|');

    anchors.push(parts[0]);
    tooltips.push(parts[1]);
});

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



// $(document).ready(function(){
//     jQuery.goup();
// });