$(function () {
	$("body").addClass("loaded");

	$.getJSON("pictures/index.json", function (r) {
		$(".content")[0].innerHTML = Handlebars.templates['albums'](r);
	});
});
