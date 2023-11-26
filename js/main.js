;(function () {
	
	'use strict';

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
	    	}
	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="fh5co-offcanvas" />');
		//$('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#fh5co-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#fh5co-offcanvas').append(clone2);

		$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#fh5co-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var testimonialCarousel = function(){
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			responsiveClass: true,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
		});
	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#fh5co-counter').length > 0 ) {
			$('#fh5co-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};
	
	function displayImage() {
		var image = document.getElementById('qr-code');
		image.style.display = 'flex';
	  }
	  
	  function hideImage() {
		var image = document.getElementById('qr-code');
		image.style.display = 'none';
		// showAndHidePr(false, false);
	  }
	  var isShownImage = false;
	  $("#no-attending").click(() => {
		isShownImage = !isShownImage;
		if (isShownImage === true) {
			displayImage();
		}
		else
			hideImage()
	  });
	//   var isShowB = false;
	//   var isShowG = false;
	//   $("#btn-show-bride").click(() => {
	// 	isShowB = !isShowB;
	// 	isShowG = false;
	// 	if(isShowB === true){
	// 		showAndHidePr(true, false);
	// 	}
	// 	else{
	// 		showAndHidePr(false, false);
	// 	}
	//   });
	//   $("#btn-show-bridegroom").click(() => {
	// 	isShowG = !isShowG;
	// 	isShowB = false;
	// 	if(isShowG === true){
	// 		showAndHidePr(false, true);
	// 	}
	// 	else{
	// 		showAndHidePr(false, false);
	// 	}
	//   });
	//   var showAndHidePr = function(isShowBride, isShowBridegroom){
	// 	var imageBride = document.getElementById('show-bride');
	// 	var imageBridegroom = document.getElementById('show-bridegroom');
	// 	imageBride.style.display = isShowBride ? 'block': "none";
	// 	imageBridegroom.style.display = isShowBridegroom ? 'block': "none";
	//   }
	  var audioIndex = 0;
    var audioFiles = ['audio/IDo.mp3', 'audio/BeautifulInWhite.mp3', 'audio/until-you-audio.mp3']; // Add more audio files to the array if needed
	var nameSongs = ['I Do - 911', 'Beautiful In White - Shane Filan', 'Shayne Ward - Until You'];
    var audio = new Audio();
	var songName = document.getElementById('songName');
	// document.getElementById('play-audio').addEventListener
	$('#play-audio').click(() => {
		console.log("Audio playing: " + audioFiles[audioIndex]);
        audio.src = audioFiles[audioIndex];
		songName.innerText = nameSongs[audioIndex];
        audio.play();
	});

    audio.addEventListener('ended', function() {
      audioIndex++;
      if (audioIndex < audioFiles.length) {
        audio.src = audioFiles[audioIndex];
		songName.innerText = nameSongs[audioIndex];
        audio.play();
      } else {
        audioIndex = 0;
		audio.src = audioFiles[audioIndex];
		songName.innerText = nameSongs[audioIndex];
        audio.play();  
      }
    }, false);
	var progress = document.getElementById("progress");
	audio.addEventListener('timeupdate', function() {
	  var duration = audio.duration;
	  var currentTime = audio.currentTime;
	  var progressWidth = (currentTime / duration) * 100;
	  progress.style.width = progressWidth + "%";
	});
	$(function(){
		//mobileMenuOutsideClick();
		parallax();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		testimonialCarousel();
		goToTop();
		loaderPage();
		counter();
		counterWayPoint();
		hideImage();
	});


}());
