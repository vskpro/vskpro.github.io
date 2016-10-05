(function($){

	$(document).ready(function(){

		$(".smooth-scroll").on('click', function(e) {
			// prevent default anchor click behavior
			e.preventDefault();

			//change link colors
			$(".smooth-scroll").removeClass('active-link');
			$(this).addClass('active-link');

			// animate
			$('html, body').animate({
				scrollTop: $(this.hash).offset().top - 100
			}, 850);


		});

		

		// cache container
		var $container = $('#projects-container');
		// initialize isotope
		
  		$(window).load(function() {
			$container.isotope({});
		});



		// filter items when filter link is clicked
		$('#filters a').click(function(){
			var selector = $(this).attr('data-filter');
			$container.isotope({ filter: selector });
			return false;
		});

		/*

			Code to highlight current selection
			1) When any of the links is clicked, listen to the click event
			2) On click, traverse and remove all the highlight classes
			3) Add the highlight class to current clicked element	

			*/

			$('.listen-for-click').on('click',function() {

				$('.listen-for-click').removeClass('highlight');

				$(this).addClass('highlight');


			});



	}); //end of document ready

})(jQuery);