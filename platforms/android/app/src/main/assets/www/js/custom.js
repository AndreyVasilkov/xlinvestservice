$(window).on('load', function () {
    $('body').removeClass('loaded');


});
(function($,undefined){
    if($('input[type="checkbox"]').attr('disabled')){
        $('input[type="checkbox"]').addClass('dis');
        $('.repeat').addClass('dis');
    }







    $('#condition').selectmenu();
    if(('.addCond').length){
        $('body').on('click','.addCond',function(e){
            $('.modalContentNot').addClass('show');
            $('.main-wrapper').addClass('blur');
            e.stopPropagation();
        });
        $('.back').on('touchstart',function(e){
            $('.back').removeClass('activeBtn');
            $(this).addClass('activeBtn');
            e.stopPropagation();

        });
        $('.back').on('touchend',function(e){
            $('.modalContentNot').removeClass('show');
            $('.main-wrapper').removeClass('blur');
            e.stopPropagation();

        });
    }

    window.addEventListener("orientationchange", function() {
        $('.icon-turn-wrapp.show').removeClass('show');
    }, false);

	$('#sendform').submit(function(){
		$('input[type="search"]').blur();
		return false;
	});
    // function sendForm(e){
    //     e.preventDefault();
    // }
		if($('.search-page').length !==0){
	    if($('.result-search').find('li').length > 0){
        $('.result-search li').on('touchstart',function(e){
            $('.result-search li').removeClass('active');
            $(this).addClass('active');
            e.stopPropagation();
        });
    }else{
        $('.result-search').append("<div class='no'><span class='no-text'>Ничего не найдено</span></div>");
        return false;
	}
    }
        $('.list-toggle-menu.main li').on('touchstart',function(e){
        $('.list-toggle-menu.main li').removeClass('active');
            $(this).addClass('active');
            e.stopPropagation();
    });
    $('.calendar li.panel').on('touchstart',function(e){
        $('.main-wrapper').addClass('blur');
        $('.icon-turn-wrapp').addClass('show');
        e.stopPropagation();
    });
    $('.icon-turn-wrapp').on('touchstart',function(e){
        $('.main-wrapper').removeClass('blur');
        $(this).removeClass('show');
        e.stopPropagation();
    });
    $('.modal-wrapper-contract button').on('touchstart',function(e){
        $('.modal-wrapper-contract button').removeClass('active');
        $(this).addClass('active');
        e.stopPropagation();
    });

    $('.list-toggle-menu.main li').on('touchstart',function(e){
        $('.list-toggle-menu.main li').removeClass('active');
        $(this).addClass('active');
        e.stopPropagation();
    });

    $('.list-toggle-menu.main li').mousedown(function(e){
        $('list-toggle-menu.main li').removeClass('active');
        $(this).addClass('active');
        e.stopPropagation();
    });
    $('input[type="search"]').on('focus',function(){
        $(this).parents('label').css({color: '#FFD596'});
    });
    $('input[type="search"]').on('blur',function(){
        $(this).parents('label').css({color: '#998E7A'});
    });
	var nav_wrap = $(".slide-tab-panel");
	var elem_left_offset,
	elem_parent,
	slider_line;
    if($('.main-page').length){
        nav_wrap_pos = nav_wrap.position().left;
    }

	nav_wrap.each(function(){

		$(this).append('<li class="sliding-line"></li>');

		var active_elem = $(this).find(".active");
		var result = nav_wrap_pos/active_elem;

		if(active_elem.length){
				var start_elem_width = active_elem.outerWidth();
				var start_elem_offset = active_elem.position().left;
		}

		$(this).find(".sliding-line").css({
				"width": start_elem_width + "px",
				"left": start_elem_offset + "px",
				"list-style-type": "none"
		})
				.data("width", start_elem_width)
				.data("left", start_elem_offset);

});
	/*MENU*/
	$('.add').on("click",function(e){
		e.preventDefault();
        var $this = $('.add');
        if($this){
            $('.slide-data-menu').toggleClass('dataToggle');
            $('.content').toggleClass('blur');
            e.stopPropagation();
        }
        $(document).click(function (e) {
            var container = $(".slide-data-menu");
            if (container.has(e.target).length === 0 ){
                container.addClass('dataToggle');
                $('main.content').removeClass('blur');
                $('nav').removeClass('blur');
                e.stopPropagation();
            }
        });
});
	if($('.settings').length){
        $('.settings').on('click',function(e){
            var $this = $('.settings');
            if($this){
                $('.slide-settings-menu').toggleClass('settingsToggle');
                $('main.content').toggleClass('blur');
                $('nav').toggleClass('blur');
                $(this).find('.icon-ic_refresh').removeClass('icon-ic_refresh').addClass('icon-ic_more');
                e.stopPropagation();
            }
            $(document).click(function (e) {
                var container = $(".slide-settings-menu");
                if (container.has(e.target).length === 0 ){
                    container.addClass('settingsToggle');
                    $('main.content').removeClass('blur');
                    $('nav').removeClass('blur');
                    e.stopPropagation();
                }
            });

        });
    }
    if($('#slideToggle').length){
        $(document).mouseup(function (e){
            var div = $("#slideToggle");
            if (!div.is(e.target) && div.has(e.target).length === 0) {
                div.addClass('slideToggle');
                $('.main-wrapper').removeClass('blur');
            }
        });
    }

/*Modal Window*/
	var modal ={
		self: $('#modal'),
				showModal : function(modalContent){
				this.self.find('#innerModal').html(modalContent);
				this.self.fadeIn(200);
				$('.main-wrapper').addClass('blur');
               },
			 hideModal : function(){
					 this.self.fadeOut(200);
					 this.self.find('#innerModal').html('');
					 $('.main-wrapper').removeClass('blur');

			 }


	 };
	//Select-menu
    $('#modal').on('click',function(e){
        if($(e.target).hasClass('back')){
            modal.hideModal();
        }else{
            $('.main-wrapper').addClass('blur');
        }
    });
    //OBJECT EVENT CLICK
    $('.showModal').on('click',function(e){
			var id =$(this).data('id');
			var modalContent = $('#modalContent'+ id).html();
			modal.showModal(modalContent);
			$('input[type="text"],input[type="password"],input[type="email"]').on('focus',function(){
				$(this).siblings('label,span').css({color: '#FFD596'});
			});
			$('input[type="text"],input[type="password"],input[type="email"]').on('blur',function(){
				$(this).siblings('label,span').css({color: '#998E7A'});
			});
	});
	//Modal Close

    // $('#modal').on('click',function(e){
    //     if($(e.target).hasClass('back')){
    //         console.log(e.target);
    //         modal.hideModal();
    //         return false
    //     }else{
    //         return false;
    //     }
    // });



      //Modal Close
    $('input[type="text"],input[type="password"],input[type="email"],input[type="search"]').on('focus',function(){
        $(this).siblings('label,span').css({color: '#FFD596'});
    });
    $('input[type="text"],input[type="password"],input[type="email"],input[type="search"]').on('blur',function(){
        $(this).siblings('label,span').css({color: '#998E7A'});
    });
    $( ".dragging" ).sortable({
        axis: "y",
        containment: "parent",
        items: "> li",
        tolerance: "pointer",
        cursor: "move",
        distance: 0,
        cursorAt: { left: 0 },
        opacity: .9,
        delay: 2000,
        placeholder: "sortable-placeholder",
        stop: function( event, ui ) {
            $('.block-content-panel').removeClass('longpress');
            ui.item.addClass('stop');
            $('.stop').find('.btn-target').animate({'marginRight': "-500px"},0);
            $('.stop').find('.data-num').animate({'marginRight': "0px"},0);
            $('.stop').find('.value-percent').animate({'marginRight': "0px"},0);
        }
    });



    $('input[type="text"],input[type="password"],input[type="email"],input[type="search"]').on('focus',function(){
        $(this).siblings('label,span').css({color: '#FFD596'});
    });
    $('input[type="text"],input[type="password"],input[type="email"],input[type="search"]').on('blur',function(){
        $(this).siblings('label,span').css({color: '#998E7A'});
    });
    $( ".dragging" ).sortable({
        axis: "y",
        containment: "parent",
        items: "> li",
        tolerance: "pointer",
        cursor: "move",
        distance: 0,
        cursorAt: { left: 0 },
        opacity: .9,
        delay: 2000,
        placeholder: "sortable-placeholder",
        stop: function( event, ui ) {
            $('.block-content-panel').removeClass('longpress');
            ui.item.addClass('stop');
            $('.stop').find('.btn-target').animate({'marginRight': "-500px"},0);
            $('.stop').find('.data-num').animate({'marginRight': "0px"},0);
            $('.stop').find('.value-percent').animate({'marginRight': "0px"},0);
        }
    });

    $(window).on('resize',function(){
			nav_wrap = $(".slide-tab-panel");
			nav_wrap_pos = nav_wrap.position().left;
			var wElem = $('.wrapp-elem').width();
			$('.brand-title').width(wElem);

        function changeSizePanel(){
						var newWidth = $('.main-wrapper').width();
						var newPos = nav_wrap_pos/newWidth*100;
            nav_wrap_pos = $('.slide-tab-panel').position().left;
						nav_wrap.css({"left": newPos +'%'}) ;
						nav_wrap.each(function(){

							$(this).append('<li class="sliding-line"></li>');

							var active_elem = $(this).find(".active");
							var result = nav_wrap_pos/active_elem;

							if(active_elem.length){
									var start_elem_width = active_elem.outerWidth();
									var start_elem_offset = active_elem.position().left;
							}

							$(this).find(".sliding-line").css({
									"width": start_elem_width + "px",
									"left": start_elem_offset + "px",
									"list-style-type": "none"
							})
									.data("width", start_elem_width)
									.data("left", start_elem_offset);

					});
        }
        changeSizePanel();
    });
	 $('.hamburger').click(function(e){
			 $('.slide-menu').toggleClass('slideToggle');
			 $('.main-wrapper').toggleClass('blur');
	 });
 function addButton(){

		 var node = document.querySelector("#swipe-tabs-cont");
		 var longpress = false;
		 var presstimer = null;
		 var longtarget = null;

		 var cancel = function(e) {
				 if (presstimer !== null) {
						 clearTimeout(presstimer);
						 presstimer = null;
				 }
		 };

		 var cancelses = function(e){
				 if (presstimer !== null) {
						 clearTimeout(presstimer);
						 presstimer = null;
				 }
				 $('.block-content-panel').removeClass('longpress');
				 $('.stop').find('.btn-target').animate({'marginRight': "-500px"},0);
				 $('.stop').find('.data-num').animate({'marginRight': "0px"},0);
				 $('.stop').find('.value-percent').animate({'marginRight': "0px"},0);
		 };
		 var click = function(e) {
				 if (presstimer !== null) {
						 clearTimeout(presstimer);
						 presstimer = null;
				 }
				 $('.block-content-panel').removeClass('longpress');
				 $('.stop').find('.btn-target').animate({'marginRight': "-500px"},0);
				 $('.stop').find('.data-num').animate({'marginRight': "0px"},0);
				 $('.stop').find('.value-percent').animate({'marginRight': "0px"},0);

				 if (longpress) {
						 return false;
				 }
		 };

		 var start = function(e) {

				 var $this = this;

				 if (e.type === "click" && e.button !== 0) {
						 return false;
				 }

				 longpress = false;


				 if (presstimer === null) {
						 presstimer = setTimeout(function() {
								 longpress = true;
								 $('.block-content-panel').addClass('longpress');
								 $('.stop').find('.btn-target').animate({'marginRight': "0px"},0);
								 $('.stop').find('.data-num').animate({'marginRight': "-500px"},0);
								 $('.stop').find('.value-percent').animate({'marginRight': "-500px"},0);
						 }, 2000);
				 }

				 return false;
		 };

		 node.addEventListener("mousedown", start);
		 node.addEventListener("touchstart", start);
		 node.addEventListener("click", click);
		 node.addEventListener("mouseout", cancel);
		 node.addEventListener("touchend", cancelses);
		 node.addEventListener("touchleave", cancel);
		 node.addEventListener("touchcancel", cancel);


 }
if($('.main-page').length){
    addButton();
    var initSwipeSlides=$('#swipe-tabs-cont');
    initSwipeSlides.slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        centerMode: true,
        dragging: true,
        adaptiveHeight: true,
        centerPadding: 0,
        cssEase: 'ease-in-out',
        swipeToSlide: true,
        touchMove: true,
        slidesToShow: 1,
        lazyLoad: 'ondemand',
        edgeFriction:	0,
        slidesToScroll: 1,
    });

    initSwipeSlides.on('afterChange', function(event, slick, currentSlide) {
        var list= $('.swipe-tab');
        var i;
        for(i=0;i<list.length;i++){
            if( currentSlide ==list[i].dataset.attr){
                list[i].classList.add('active');
                elem_parent = $(list[i]);
                elem_width = elem_parent.outerWidth();
                elem_left_offset = $(list[i]).position().left;
                slider_line = elem_parent.siblings(".sliding-line");
                slider_line.stop().animate({
                    "width": elem_width + "px",
                    "left": elem_left_offset + "px"
                });
            }else{
                list[i].classList.remove('active');
            }
        }
    });
    initSwipeSlides.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        function moveright(){
            nav_wrap;
            var offset_indent = $('.active').width();
            nav_wrap_pos = $(nav_wrap).position().left;
            nav_wrap.animate({left : nav_wrap_pos - offset_indent});
            return false;
        }
        function moveleft(){
            nav_wrap;
            var offset_indent = $('.active').width();
            nav_wrap_pos = $(nav_wrap).position().left;
            nav_wrap.animate({left : nav_wrap_pos + offset_indent});
            return false;
        }


        var listLength =$('.elem:last-child').data('target');
        if(nextSlide > currentSlide && currentSlide != listLength){
            setTimeout(moveright,50);
        }else if(nextSlide < currentSlide && currentSlide !=0){
            setTimeout(moveleft,50);
        }
        else{
            return false;
        }
    });
}





			 /* placeholder*/

 var wElem = $('.wrapp-elem').width();
 $('.brand-title').width(wElem).css('text-overflow','ellipsis');

    var supportsOrientationChange = "onorientationchange" in window,
        orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

    window.addEventListener(orientationEvent, function() {

        nav_wrap_pos = nav_wrap.position().left;
        var wElem = $('.wrapp-elem').width();
        $('.brand-title').width(wElem);
        function changeSizePanel(){
            var newWidth = $('.main-wrapper').width();
            var newPos = nav_wrap_pos/newWidth*100;
            nav_wrap_pos = $('.slide-tab-panel').position().left;
            nav_wrap.css({"left": newPos +'%'}) ;
            nav_wrap.each(function(){

                $(this).append('<li class="sliding-line"></li>');

                var active_elem = $(this).find(".active");
                var result = nav_wrap_pos/active_elem;

                if(active_elem.length){
                    var start_elem_width = active_elem.outerWidth();
                    var start_elem_offset = active_elem.position().left;
                }

                $(this).find(".sliding-line").css({
                    "width": start_elem_width + "px",
                    "left": start_elem_offset + "px",
                    "list-style-type": "none"
                })
                    .data("width", start_elem_width)
                    .data("left", start_elem_offset);

            });
        }
        changeSizePanel();
    }, false);


    var previousOrientation = window.orientation;
    var checkOrientation = function(){
        if(window.orientation !== previousOrientation){
            previousOrientation = window.orientation;
            // orientation changed, do your magic here

        }
    };

    window.addEventListener("resize", checkOrientation, false);
    window.addEventListener("orientationchange", checkOrientation, false);

// (optional) Android doesn't always fire orientationChange on 180 degree turns
    setInterval(checkOrientation, 2000);


})(jQuery);


