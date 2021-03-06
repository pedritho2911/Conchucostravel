jQuery(window).load(function() {
	jQuery(".fusion-gallery-layout-grid, .fusion-gallery-layout-masonry").each(function() {
		var o, e = jQuery(this);
		o = e.find(".fusion-gallery-column"), e.css("min-height", "500px"), o.hide(), jQuery(this).hasClass("fusion-gallery-layout-masonry") && !jQuery(this).hasClass("fusion-masonry-has-vertical") && 0 < jQuery(this).find(".fusion-grid-column:not(.fusion-grid-sizer)").not(".fusion-element-landscape").length && jQuery(this).addClass("fusion-masonry-has-vertical"), imagesLoaded(o, function() {
			e.css("min-height", ""), o.fadeIn(), e.isotope({
				layoutMode: "packery",
				itemSelector: ".fusion-gallery-column",
				isOriginLeft: !jQuery("body.rtl").length,
				resizable: !0,
				initLayout: !1
			}), e.on("layoutComplete", function(o, e) {
				var i = jQuery(o.target);
				i.parents(".fusion-blog-layout-grid").length && !i.parents(".fusion-blog-layout-grid").hasClass("fusion-blog-equal-heights") && setTimeout(function() {
					i.parents(".fusion-blog-layout-grid").isotope()
				}, 50), i.parents(".fusion-portfolio-wrapper").length && setTimeout(function() {
					i.parents(".fusion-portfolio-wrapper").isotope()
				}, 50)
			}), e.isotope(), jQuery(window).trigger("resize"), jQuery('[data-spy="scroll"]').each(function() {
				jQuery(this).scrollspy("refresh")
			})
		})
	})
});