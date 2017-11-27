//vue.js
var url = 'https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=7a019945af7aaa0a3637f421454bce15&user_id=35402543%40N04&format=json&nojsoncallback=1&auth_token=72157688933765221-1c775ac7ddbc78ec&api_sig=7f36527a2e619e49d226d2843924e3e7';

var app = new Vue({
  el: '#main-container',
  data: {
  	name: 'Wahab Lukman Saad',
  	webTitle: 'WL Portfolio Showcase',
  	logoURL: 'Resources/wl-logo.svg',
    flickrImages: [],
    flickrStartImg: 0,
    flickrFinishImg: 4,
    workTimelines: [
      {
        id:1,
        company: 'Indo Radio',
        role: 'Casual Photographer',
        year:2012,
        portfolio: false,
        website: 'none',
        portfolioImage: ' '
      },
      {
        id:2,
        company: 'Stereonesia',
        role: 'Coordinator of Trailer Committee',
        year:2012,
        portfolio: false,
        website: 'none',
        portfolioImage: ' '
      },
      {
        id:3,
        company: 'United Way',
        role: 'Casual Graphic Designer and Photographer',
        year:2013,
        portfolio: false,
        website: 'https://unitedway.com.au/',
        portfolioImage: ' '
      },
      {
        id:4,
        company: 'PPIA Macquarie',
        role: 'Web Designer & Public Relation',
        year:2013,
        portfolio: true,
        website: 'https://www.ppiamq.org/',
        portfolioImage: 'Resources/ppiamq_presentation.png'
      },
      {
        id:5,
        company: 'DOCIT',
        role: 'Web Designer Internship',
        year:2014,
        portfolio: true,
        website: 'none',
        portfolioImage: 'Resources/docit_presentation.png'
      },
      {
        id:6,
        company: 'Soundquriang',
        role: 'Venue & Equipment Coordinator',
        year:2014,
        portfolio: false,
        website: 'none',
        portfolioImage: ' '
      },
      {
        id:7,
        company: 'L3BUNPAD',
        role: 'Web Designer',
        year:2015,
        portfolio: true,
        website: 'http://l3bunpad.com/',
        portfolioImage: 'Resources/l3bunpad_presentation.png'
      },
      {
        id:8,
        company: 'Connect You Here',
        role: 'Web Designer',
        year:2015,
        portfolio: true,
        website: 'none',
        portfolioImage: 'Resources/connectyouhere_presentation.png'
      },
      {
        id:9,
        company: 'Kadmium',
        role: 'Web Designer & Email Marketing',
        year:2016,
        portfolio: true,
        website: 'http://kadmium.com.au/',
        portfolioImage: 'Resources/kadmium_presentation.png'
      },
      {
        id:10,
        company: 'Newtown Art Supplies',
        role: 'Web Designer & Email Marketing',
        year:2016,
        portfolio: true,
        website: 'http://www.newtownartsupplies.com.au/',
        portfolioImage: 'Resources/nas_presentation.png'
      },
      {
        id:11,
        company: 'Zink and Sons',
        role: 'Wordpress Developer & Email Marketing',
        year:2016,
        portfolio: true,
        website: 'http://www.zinkandsons.com.au/',
        portfolioImage: ' '
      },
      {
        id:12,
        company: 'L3BUNPAD 2017',
        role: 'Web Designer',
        year:2017,
        portfolio: true,
        website: 'http://l3bunpad.com/',
        portfolioImage: 'Resources/l3bunpad2017_presentation.png'
      },
      {
        id:13,
        company: 'TunaKarya',
        role: 'Web Developer',
        year:2017,
        portfolio: true,
        website: 'http://tunakarya.org/',
        portfolioImage: ' '
      },
      {
        id:14,
        company: 'Sartorial Bay',
        role: 'Wordpress Designer',
        year:2017,
        portfolio: true,
        website: 'http://www.sartorialbay.com/',
        portfolioImage: ' '
      }
    ],
    yearDefault:2012,
    trueOrFalse:true,
    currentSlide:0,
    loadSpinner:false
  },
  computed: {
	  yearSpecific: function() {
      $('.timeline-outer-wrapper').addClass('display-none');
	  	var app = this;
	    return this.workTimelines.filter(function(workTimeline) {
        setTimeout(function(){
          $('.timeline-outer-wrapper').removeClass('display-none');
        }, 100);
	     	return workTimeline.year == app.yearDefault;
	    })
	  },
	  webPortfolio: function() {
	  	var app = this;
	    return this.workTimelines.filter(function(workTimeline) {
	     	return workTimeline.portfolio == app.trueOrFalse;
	    })
	  }
  },
  created () {
  	this.getImages()
  },
  methods: {
  	nextSlide: function() {
  		if(this.currentSlide >= 9) {
  			var app = this;
  			this.currentSlide = 0;
  		} else {
  			var app = this;
  			this.currentSlide += 1;
  		};
      $('.web-portfolio-wrapper').addClass('display-none');
      setTimeout(function(){
        $('.web-portfolio-wrapper').removeClass('display-none');
      }, 100);
  	},
  	previousSlide: function() {
  		if(this.currentSlide <= 0) {
  			var app = this;
  			this.currentSlide = 9;
  		} else {
  			var app = this;
  			this.currentSlide -= 1;
  		};
      $('.web-portfolio-wrapper').addClass('display-none');
      setTimeout(function(){
        $('.web-portfolio-wrapper').removeClass('display-none');
      }, 100);
  	},
    prevFlickrGallery: function() {
      if(this.flickrStartImg <= 0) {
        var app = this;
        app.flickrStartImg = 72;
        app.flickrFinishImg = 80;
      } else {
        this.flickrStartImg -= 4;
        this.flickrFinishImg -= 4;
      };
      $('.flickr-gallery').addClass('display-none');
      setTimeout(function(){
        $('.flickr-gallery').removeClass('display-none');
      }, 100);
    },
    nextFlickrGallery: function() {
      if(this.flickrFinishImg >= 75) {
        var app = this;
        app.flickrStartImg = 0;
        app.flickrFinishImg = 4;
      } else {
        this.flickrStartImg += 4;
        this.flickrFinishImg += 4;
      };
      $('.flickr-gallery').addClass('display-none');
      setTimeout(function(){
        $('.flickr-gallery').removeClass('display-none');
      }, 100);
    },
  	getImages () {
      var app = this;
      $('.flickr-gallery').addClass('animated fadeIn');
      axios.get(url).then (function (response){
        app.flickrImages = response.data.photos.photo
      })
    }
  }
});

//particles.js
particlesJS.load('particles-js', 'Resources/particlesjs.json', function() {
  console.log('callback - particles.js config loaded');
});

//jQuery when everything loads
$(window).on('load', function() {
	setTimeout(function() {
		$('#roles').typeIt({
		    strings: ["A front end developer", "A semi-professional photographer", "A graphic designer", "Overall a web design enthusiast"],
		    speed: 70,
		    breakLines: false,
		    autoStart: false
		});
	}, 1000);
	
	//$('.home').removeClass('display-none');
	$('.image-logo').addClass('animated fadeIn');
	$('.owner-name').addClass('animated fadeIn');
	$('.timeline-outer-wrapper').addClass('animated fadeIn');
	$('.timeline-year').addClass('animated fadeIn');
	$('.web-portfolio-wrapper').addClass('animated fadeIn');
	$('#prevButton').addClass('animated fadeIn');
	$('#nextButton').addClass('animated fadeIn');
	
  $('.loading').hide();

	$('.timeline-year>ul>li>a').on('click', function(){
		if($(this).hasClass('active')) {
			return;
		} else {
			$('.timeline-year>ul>li>a').removeClass('active');
			$(this).addClass('active');
		}
	});

	$('nav>ul>li>a').on('click', function(){
		if($(this).parent().hasClass('active')) {
			return;
		} else {
			$('nav>ul>li').removeClass('active');
			$(this).parent().addClass('active');
		}
	});

	$('.home-nav').on('click', function() {
		if($('.home').hasClass('display-none')) {
			$('section').addClass('display-none');
			$('.home').removeClass('display-none');
		} else {
			return;
		}
	});

	$('.exp-nav').on('click', function() {
		if($('.timeline').hasClass('display-none')) {
			$('section').addClass('display-none');
			$('.timeline').removeClass('display-none');
		} else {
			return;
		}
	});

	$('.web-nav').on('click', function() {
		if($('.website-portfolio').hasClass('display-none')) {
			$('section').addClass('display-none');
			$('.website-portfolio').removeClass('display-none');
		} else {
			return;
		}
	});

	$('.photo-nav').on('click', function() {
		if($('.photography-portfolio').hasClass('display-none')) {
			$('section').addClass('display-none');
			$('.photography-portfolio').removeClass('display-none');
		} else {
			return;
		}
	});

  //mobile menu stuffs
  $('.mobile-menu').on('click', function() {
    $('body').addClass('menu-opened');
  });

  $('.front-page').on('click', function(){
    if($('body').hasClass('menu-opened')){
      $('body').removeClass('menu-opened');
    } else {
      return;
    }
  });

});



$(document).ready(function() {
  var windowWidth = $(window).width();
  $( window ).resize(function() {
    if( windowWidth <= 768) {
      $('body').addClass("only-mobile");
    } else {
      $('body').removeClass("only-mobile");
    };
  });
  
  if(windowWidth <= 768){
    $('body').addClass("only-mobile");
  };
});



