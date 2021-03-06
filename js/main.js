var _data = {};
var currentAlbum, currentPhotoId, x, content;
var backgroundChangeTimeout = null;

function setRoute (templateName, context, tabId) {
	$(".nav-tab").removeClass("current");
	$("a#" + tabId + " > .nav-tab").addClass("current");
	
	content.innerHTML = Handlebars.templates[templateName](context);
}

$(function () {
	_data = JSON.parse(localStorage["settings"] || "{}");
	
	if (JSON.stringify(_data) === "{}") // Default data
		_data = {
			currentImage: "/pictures/oefenenprinsjesdag/DSC_5031.jpgcrop.jpg"
		};
	
	content = $(".content")[0];
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
					routie(r[+event.currentTarget.id].title);
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
	if(window.matchMedia("only screen and (max-width: 760px)").matches) return;
	$("div.back").animate({ opacity: 0.5 }, 100, function () {           
		$(this).css({ "background-image": "url('" + img + "')" });
		$(this).animate({ opacity: 0.7 }, 400);
	});
});