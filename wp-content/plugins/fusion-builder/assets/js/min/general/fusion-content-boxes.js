! function(t) {
	"use strict";
	t.fn.animate_content_boxes = function() {
		var n, o;
		t().waypoint && (n = t(this), o = 0, n.find(".content-box-column").each(function() {
			var n, e, i = this;
			setTimeout(function() {
				t(i).find(".fusion-animated").css("visibility", "visible"), n = t(i).find(".fusion-animated").data("animationtype"), e = t(i).find(".fusion-animated").data("animationduration"), t(i).find(".fusion-animated").addClass(n), e && (t(i).find(".fusion-animated").css("-moz-animation-duration", e + "s"), t(i).find(".fusion-animated").css("-webkit-animation-duration", e + "s"), t(i).find(".fusion-animated").css("-ms-animation-duration", e + "s"), t(i).find(".fusion-animated").css("-o-animation-duration", e + "s"), t(i).find(".fusion-animated").css("animation-duration", e + "s")), (t(i).parents(".fusion-content-boxes").hasClass("content-boxes-timeline-horizontal") || t(i).parents(".fusion-content-boxes").hasClass("content-boxes-timeline-vertical")) && t(i).addClass("fusion-appear")
			}, o), o += parseInt(t(this).parents(".fusion-content-boxes").attr("data-animation-delay"), 10)
		}))
	}
}(jQuery), jQuery(window).load(function() {
	"function" == typeof jQuery.fn.equalHeights && (jQuery(".content-boxes-icon-boxed").each(function() {
		jQuery(this).find(".content-box-column .content-wrapper-boxed").equalHeights(), jQuery(this).find(".content-box-column .content-wrapper-boxed").css("overflow", "visible")
	}), jQuery(window).on("resize", function() {
		jQuery(".content-boxes-icon-boxed").each(function() {
			jQuery(this).find(".content-box-column .content-wrapper-boxed").equalHeights(), jQuery(this).find(".content-box-column .content-wrapper-boxed").css("overflow", "visible")
		})
	}), jQuery(".content-boxes-clean-vertical").each(function() {
		jQuery(this).find(".content-box-column .col").equalHeights(), jQuery(this).find(".content-box-column .col").css("overflow", "visible")
	}), jQuery(window).on("resize", function() {
		jQuery(".content-boxes-clean-vertical").each(function() {
			jQuery(this).find(".content-box-column .col").equalHeights(), jQuery(this).find(".content-box-column .col").css("overflow", "visible")
		})
	}), jQuery(".content-boxes-clean-horizontal").each(function() {
		jQuery(this).find(".content-box-column .col").equalHeights(), jQuery(this).find(".content-box-column .col").css("overflow", "visible")
	}), jQuery(window).on("resize", function() {
		jQuery(".content-boxes-clean-horizontal").each(function() {
			jQuery(this).find(".content-box-column .col").equalHeights(), jQuery(this).find(".content-box-column .col").css("overflow", "visible")
		})
	})), jQuery(window).load(function() {
		jQuery(".fusion-modal .fusion-content-boxes").each(function() {
			jQuery(this).appear(function() {
				jQuery(this).animate_content_boxes()
			})
		})
	})
}), jQuery(document).ready(function() {
	jQuery(".link-area-box").on("click", function() {
		jQuery(this).data("link") && ("_blank" === jQuery(this).data("link-target") ? (window.open(jQuery(this).data("link"), "_blank"), jQuery(this).find(".heading-link").removeAttr("href"), jQuery(this).find(".fusion-read-more").removeAttr("href")) : window.location = jQuery(this).data("link"), jQuery(this).find(".heading-link").attr("target", ""), jQuery(this).find(".fusion-read-more").attr("target", ""))
	}), jQuery(".link-type-button").each(function() {
		var n;
		1 <= jQuery(this).parents(".content-boxes-clean-vertical").length && (n = jQuery(".fusion-read-more-button").outerHeight(), jQuery(this).find(".fusion-read-more-button").css("top", n / 2))
	}), jQuery(".link-area-link-icon .fusion-read-more-button, .link-area-link-icon .fusion-read-more, .link-area-link-icon .heading").mouseenter(function() {
		jQuery(this).parents(".link-area-link-icon").addClass("link-area-link-icon-hover")
	}), jQuery(".link-area-link-icon .fusion-read-more-button, .link-area-link-icon .fusion-read-more, .link-area-link-icon .heading").mouseleave(function() {
		jQuery(this).parents(".link-area-link-icon").removeClass("link-area-link-icon-hover")
	}), jQuery(".link-area-box").mouseenter(function() {
		jQuery(this).addClass("link-area-box-hover")
	}), jQuery(".link-area-box").mouseleave(function() {
		jQuery(this).removeClass("link-area-box-hover")
	}), jQuery(".fusion-content-boxes").each(function() {
		var n = getWaypointOffset(jQuery(this));
		jQuery(this).waypoint(function() {
			jQuery(this).animate_content_boxes()
		}, {
			triggerOnce: !0,
			offset: n
		})
	})
});