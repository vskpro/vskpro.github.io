/* 
Title: My Portfolio
Developer: Sai kiran Veeraneni
Owner: Sai kiran Veeraneni
Date: 2016-10-06
Description: This is my portfolio custom built from scratch.
Link :https://vskpro.github.io
*/

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

			const projects = window.projects;
			const projectRoot = $('#projects');
			projects.forEach(project => {
				const mainDiv = $('<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 project ui"><div>');
				const singleProject = $('<div class="single-project"></div>');
				const image = $('<img src="'+ project.image_url +'" alt="'+ project.title +'">');
				const leftOverlay = $('<div class="left-overlay"></div>');
				const leftOverlayChild = $('<div class="center-the-element"></div>');
				const title = $('<span> ' + project.title + ' <br> ' + project.type + ' </span>');
				const rightOverlay = $('<div class="right-overlay"></div>');
				const rightOverlayChild = $('<div class="center-the-element"></div>');
				const link = $('<span><a href=" ' + project.link + ' " target="_blank"><i class="fa fa-external-link fa-2x" aria-hidden="true"></i></a></span>');
				leftOverlayChild.append(title);
				leftOverlay.append(leftOverlayChild);
				rightOverlayChild.append(link);
				rightOverlay.append(rightOverlayChild);
				singleProject.append(image, leftOverlay, rightOverlay);
				mainDiv.append(singleProject);
				projectRoot.append(mainDiv);
			});

	}); //end of document ready

})(jQuery);

/* 
Title: My Portfolio
Developer: Sai kiran Veeraneni
Owner: Sai kiran Veeraneni
Date: 2016-10-06
Description: This is my portfolio custom built from scratch.
Link :https://vskpro.github.io
*/