! function(a) {
	"use strict";
	a.fn.initWaypoint = function() {
		a().waypoint && a(".fusion-animated").each(function() {
			var i = getWaypointOffset(a(this));
			"top-out-of-view" === i && (i = getAdminbarHeight() + ("function" == typeof getStickyHeaderHeight ? getStickyHeaderHeight() : "0")), a(this).waypoint(function() {
				var i, t, n;
				a(this).parents(".fusion-delayed-animation").length || (a(this).css("visibility", "visible"), i = a(this).data("animationtype"), t = a(this).data("animationduration"), a(this).addClass(i), t && (a(this).css("-moz-animation-duration", t + "s"), a(this).css("-webkit-animation-duration", t + "s"), a(this).css("-ms-animation-duration", t + "s"), a(this).css("-o-animation-duration", t + "s"), a(this).css("animation-duration", t + "s"), n = a(this), setTimeout(function() {
					n.removeClass(i)
				}, 1e3 * t)))
			}, {
				triggerOnce: !0,
				offset: i
			})
		})
	}
}(jQuery), jQuery(document).ready(function() {
	"1" != fusionAnimationsVars.disable_mobile_animate_css && cssua.ua.mobile ? jQuery("body").addClass("dont-animate") : jQuery("body").addClass("do-animate")
}), jQuery(window).load(function() {
	setTimeout(function() {
		jQuery(window).initWaypoint()
	}, 300)
});