$(function(){
	
	$('#btn1').click(function(){
		$('.price-ul').css('display','block');
	})

	$('#btn2').click(function(){
		$('.date-ul').css('display','block')
	})

	$.each($('.price-ul li'), function(p) {
		$(this).click(function(){
			$('#texDiv1').text(parseInt($(this).text()));
			$('.price-ul').css('display','none')
		})
	});

	$.each($('.date-ul li'), function(p) {
		$(this).click(function(){
			$('#texDiv2').text(parseInt($(this).text()));
			$('.date-ul').css('display','none')
		})
	});
})
