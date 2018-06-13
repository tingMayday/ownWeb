$(function(){
	var body = $('.body'),
		contactForm = body.find('.contact-form');
	contactForm.on('blur','input,textarea',function(){
		var _this = $(this);
		if(_this.val() == ''){
			_this.parents('li').removeClass('active');
		}else{
			_this.parents('li').addClass('active');
		}
	})
});