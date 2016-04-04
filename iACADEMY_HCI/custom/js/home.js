$(function() {
	$('#nextSection').click(function() {
		$('html, body').animate({
			scrollTop : '680%'
		}, 1000);
		return false;
	});

	$('.box').click(function(e) {
		// var id = $(this).parent().attr("id");
		// var to;
		// switch (id) {
		// case "schoolComputing":
		// to = "soc.html";
		// break;
		// case "schoolBusiness":
		// to = "sob.html";
		// break;
		// case "schoolDesign":
		// to = "sod.html";
		// break;
		// }
		// window.location.href = to;
		var logo = $(this).find("span");
		var desc = $(this).find("p");

		if ($(this).hasClass('expand')) {
			$(this).removeClass('expand');

			desc.fadeOut(100);
			logo.delay(200).fadeIn(500);
		} else {
			$('.box').removeClass('expand');

			$('.box > p').fadeOut(100);
			$('.box > span').delay(200).fadeIn(200);

			logo.delay(200).fadeOut(500);
			desc.delay(700).fadeIn(500);

			$(this).addClass('expand');
		}
	});
});
