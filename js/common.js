$('.body-nav li').click(function(){
	var li_nums = $(this).index();
	$('.body-nav li').removeClass('active');
	$(this).addClass('active');
	$('.page').hide();
	$('.page'+li_nums).show();
})