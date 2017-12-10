$(document).ready(function(){
    $("div > .biography:gt(0)").hide('fast',function(){                   /* hide all but first biography */
		$(".mySlides > .slide:gt(0)").hide('fast',function(){             /* hide all but first photo slide */
			$('.logo').animate({left:'73%'},1500,function(){
				$('.head h1').animate({opacity:'1.0'},1000,function(){ 
					$('[data-toggle="tooltip"]').tooltip();               /* Initiate tooltip function */
				});
			});
		});
    });
});


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {           /* pagination: next page */
  showSlides(slideIndex += n);
}

function currentSlide(n) {         /* pagination: previous page */
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var numItems = $('.mySlides .slide').length;
  $('.mySlides').children('.slide').each(function(index){
	  if(n > numItems)
        slideIndex = 1;
	  if(n < 1)
        slideIndex = numItems;
	  if(index != slideIndex-1) {
		  $(this).fadeOut('fast');            /* fade out all but specific photo slide */
	  } else if(index == slideIndex-1) {
		  $(this).fadeIn('fast');             /* fade in specific photo slideshow */
	  } 
    });
  $('.dot-bar').children('span').each(function(index){
	  if(index != slideIndex-1) {
		  $(this).removeClass('active');      /* Deactivate the dots */
	  } else if(index == slideIndex-1) {
		  $(this).addClass('active');         /* Activate the dot */
	  };
  });
}

var graphIndex = 1;                          /* copy of photo slide pagination but target the banner section */
showGraphs(graphIndex);                      /* Should combine both function into one with 2-3 arguments? */

function plusGraph(n) {
  showGraphs(graphIndex += n);
}

function showGraphs(n) {
  var numItems = $('div .biography').length;
  $('div').children('.biography').each(function(index){
	  if(n > numItems)
        graphIndex = 1;
	  if(n < 1)
        graphIndex = numItems;
	  if(index != graphIndex-1) {
		  $(this).hide('fast');
	  } else if(index == graphIndex-1) {
		  $(this).show('fast');
	  } 
    });
}

