$(function() {
	var to = getUrlParameter('to');

	if (to != '') {
		$(".list-group li.active").removeClass("active");
		switch (to) {
		case 'help':
			$(".list-group li").eq(0).addClass("active");
			$(".box").hide().eq(0).fadeIn();
			break;
		case 'proc':
			$(".list-group li").eq(1).addClass("active");
			$(".box").hide().eq(1).fadeIn();
			break;
		case 'apply':
			$(".list-group li").eq(2).addClass("active");
			$(".box").hide().eq(2).fadeIn();
			break;
		case 'tuition':
			$(".list-group li").eq(3).addClass("active");
			$(".box").hide().eq(3).fadeIn();
			break;
		case 'form':
			$(".list-group li").eq(4).addClass("active");
			$(".box").hide().eq(4).fadeIn();
			break;
		}
	}
});
function getUrlParameter(sParam) {
	var sPageURL = decodeURIComponent(window.location.search.substring(1)), sURLVariables = sPageURL
			.split('&'), sParameterName, i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : sParameterName[1];
		}
	}
};

