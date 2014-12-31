var _data = {};
var currentAlbum, currentPhotoId, x;
var backgroundChangeTimeout = null;

function setRoute (templateName, context, tabId) {
	$(".content").empty();
	$(".nav-tab").removeClass("current");
	$("a#" + tabId + " > .nav-tab").addClass("current");
	
	var html = Handlebars.templates[templateName](context);
	$(".content").html(html);
}

$(function () {
	_data = JSON.parse(localStorage["settings"] || "{}");
	
	if (JSON.stringify(_data) === "{}") // Default data
		_data = {
			currentImage: "kaas.jpg"
		};
	
	$("div.back").css({ "background-image": "url('" + data("currentImage") + "')" });
	$("body").addClass("loaded");
	
	$("body").on("click", "a", function (event) {
		routie((this.id === "index") ? "" : this.id);
	});
	
	routie({
		"contact": function () {
			setRoute("contact", { currentImage: data("currentImage") }, "contact");
		},
		"albums": function () {
			$.getJSON("pictures/index.json", function (r) {
				setRoute("albums", r, "albums");

				$("div.albumList > div").click(function (event) {
					routie(r[+event.target.id].title);
				});
			});
		},
		":album": function (album) {
			currentAlbum = album;
			currentPhotoId = null;

			$.getJSON("pictures/" + currentAlbum + "/index.json", function (r) {
				$(function () {
					setRoute("albumDetails", r, "albums");

					$("div.photoList > div").click(function (event) {
						routie(currentAlbum + "/" + event.target.id);
					});
				});
			});
		},
		":album/:id": function (album, id) {
			if (currentPhotoId === +id) return;
			currentAlbum = album;
			currentPhotoId = +id;

			$.getJSON("pictures/" + currentAlbum + "/index.json", function (r) {
				$(function () {
					setRoute("photos", r, "albums");

					$('.photoSlider').slick({
						lazyLoad: 'ondemand',
						onBeforeChange: function () {
							clearTimeout(backgroundChangeTimeout);
						},
						onAfterChange: function (slide, id) {
							currentPhotoId = id;
							location.replace(location.hash.split("/")[0] + "/" + id);

							backgroundChangeTimeout = setTimeout(function () {
								if($(".slick-active > img").attr("src") === data("currentImage"))
									return;
								data("currentImage", $(".slick-active > img").attr("src"));
							}, 250);
						}
					}).slickGoTo(currentPhotoId);
				});
			});
		},
		"*": function () {
			var current = 1;
			$.getJSON("/featuredPhotos.json", function (r) {
				function getPhoto (index) {
					return "url('" + r[index % r.length] + "')";
				}
				$("#currentFeatured").css({ backgroundImage: getPhoto(0) });
				$("#nextFeatured").css({ backgroundImage: getPhoto(1) });
				clearInterval(x);
				x = setInterval(function () {
					$("#currentFeatured").animate({ opacity: 0 }, 1000, function () {
						$(this).css({
							backgroundImage: getPhoto(current),
							opacity: 1
						});
						$("#nextFeatured").css({ backgroundImage: getPhoto(++current) });
					});
				}, 6000);
			});
			setRoute("index", null, "index");
		}
	});
});

function onDataChange(key, cb) {
	if (onDataChange.callbacks[key] == null)
		onDataChange.callbacks[key] = [];
	onDataChange.callbacks[key].push(cb);
}
onDataChange.callbacks = {};

function data(key, value) {
	if (arguments.length === 2 && value !== undefined) {
		_data[key] = value;
		localStorage["settings"] = JSON.stringify(_data);
		
		if (onDataChange.callbacks[key] == null)
			onDataChange.callbacks[key] = [];
		onDataChange.callbacks[key].forEach(function (cb) { cb(value); });
	}

	return _data[key];
}

onDataChange("currentImage", function (img) {
	$("div.back").animate({ opacity: 0.8 }, 100, function () {           
		$(this).css({ "background-image": "url('" + img + "')" });
		$(this).animate({ opacity: 1 }, 400);
	});
});