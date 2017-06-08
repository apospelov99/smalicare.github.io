$(function() {
	$.fn.extend({
		animateCss: function (animationName) {
				var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
				this.addClass('animated ' + animationName).one(animationEnd, function() {
						$(this).removeClass('animated ' + animationName);
				});
		}
	});
	$('.btn-animated').on('click', function(){
		$(this).animateCss('rubberBand');
	})
});


/* MenuToggle
	$('.menuToggle').on('click', function(){
		$('.menu').slideToggle(300, function() {
			if ($(this).css('display') ==='none'){
				$(this).removeAttr('syle');
			}
		})
	});
*/
/*
		$('.btn-new').on('click', function(){
			$(this).addClass('animated' + 'rubberBand');
		})
		if ($('.btn-new').hasClass('btn')) {
			//$(this).removeClass('animated');
			alert('yes');
		}*/