$(document).ready(function(){

	var controller = new ScrollMagic.Controller();

	var advantage1scene = new ScrollMagic.Scene({
										triggerElement: "#advantage1",
										triggerHook:0,
										duration:'100%'
									})
									.setPin("#advantage1", {pushFollowers: false})
									// .addIndicators({name: "advantager 1"})
									.addTo(controller);

	var advantage2scene = new ScrollMagic.Scene({
										triggerElement: "#advantage2",
										triggerHook:0,
										duration:'100%'
									})
									.setPin("#advantage2", {pushFollowers: false})
									// .addIndicators({name: "advantager 2"})
									.addTo(controller);

	var advantage3scene = new ScrollMagic.Scene({
										triggerElement: "#advantage3",
										triggerHook:0,
										duration:'100%'
									})
									.setPin("#advantage3", {pushFollowers: false})
									// .addIndicators({name: "advantager 3"})
									.addTo(controller);
	var advantage3scene = new ScrollMagic.Scene({
								triggerElement: "#buying-head-top-container",
								triggerHook:0,
								duration: '240%'
							})
							.setPin("#buying-head-top-container", {pushFollowers: false})
							// .addIndicators({name: "buy-top"})
							.addTo(controller);

// === Buying info ===
  $(document).mouseup(function(e) 
	{
	  	var container = $("#buying-info");

	    // if the target of the click isn't the container nor a descendant of the container
	  	if (!container.is(e.target) && container.has(e.target).length === 0) 
	    {
				container.removeClass("display");
	    }
	});


});

















