jQuery(window).load(function() {
	jQuery(".fusion-toggle-boxed-mode .panel-collapse").on("click", function(e) {
		jQuery(e.target).is("a") || jQuery(e.target).is("button") || jQuery(e.target).hasClass("fusion-button-text") || jQuery(this).parents(".fusion-panel").find(".panel-title > a").trigger("click")
	}), window.fusionAccordianClick = !1, jQuery(document).on("click dblclick", ".fusion-accordian .panel-title a", function(e) {
		var i, n, o;
		e.preventDefault(), jQuery(this).parents(".fusion-accordian").find(".toggle-fadein").length && jQuery(this).parents(".fusion-accordian").find(".toggle-fadein")[0] !== jQuery(this).parents(".fusion-panel").find(".panel-collapse")[0] || !0 !== window.fusionAccordianClick && (window.fusionAccordianClick = !0, i = jQuery(this), n = jQuery(jQuery(this).data("target")).find(".panel-body"), o = i.parents(".fusion-accordian").find(".panel-title a"), i.hasClass("collapsed") ? void 0 !== i.data("parent") ? o.removeClass("active") : i.removeClass("active") : (void 0 !== i.data("parent") && o.removeClass("active"), i.addClass("active"), setTimeout(function() {
			"function" == typeof jQuery.fn.reinitializeGoogleMap && n.find(".shortcode-map").each(function() {
				jQuery(this).reinitializeGoogleMap()
			}), n.find(".fusion-carousel").length && "function" == typeof generateCarousel && generateCarousel(), n.find(".fusion-portfolio").each(function() {
				var e = jQuery(this).find(".fusion-portfolio-wrapper"),
					i = e.attr("id");
				i && (e = jQuery("#" + i)), e.isotope()
			}), n.find(".fusion-gallery").each(function() {
				jQuery(this).isotope()
			}), "function" == typeof jQuery.fn.fusionCalcFlipBoxesHeight && n.find(".flip-box-inner-wrapper").each(function() {
				jQuery(this).fusionCalcFlipBoxesHeight()
			}), "function" == typeof jQuery.fn.equalHeights && n.find(".fusion-fullwidth.fusion-equal-height-columns").each(function() {
				jQuery(this).find(".fusion-layout-column .fusion-column-wrapper").equalHeights()
			}), n.find(".crossfade-images").each(function() {
				fusionResizeCrossfadeImagesContainer(jQuery(this)), fusionResizeCrossfadeImages(jQuery(this))
			}), n.find(".fusion-blog-shortcode").each(function() {
				jQuery(this).find(".fusion-blog-layout-grid").isotope()
			}), n.find(".fusion-testimonials .reviews").each(function() {
				jQuery(this).css("height", jQuery(this).children(".active-testimonial").height())
			}), "function" == typeof calcSelectArrowDimensions && calcSelectArrowDimensions(), jQuery(window).trigger("resize")
		}, 350)), window.fusionAccordianClick = !1)
	})
}), jQuery(document).ready(function() {
	jQuery(".fusion-accordian .panel-title a").click(function(e) {
		e.preventDefault()
	})
});