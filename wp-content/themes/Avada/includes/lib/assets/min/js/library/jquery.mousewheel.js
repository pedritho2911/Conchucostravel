! function(a) {
    function b(b) {
        var c = b || window.event,
            d = [].slice.call(arguments, 1),
            e = 0,
            f = 0,
            g = 0;
        return b = a.event.fix(c), b.type = "mousewheel", c.wheelDelta && (e = c.wheelDelta / 120), c.detail && (e = -c.detail / 3), g = e, void 0 !== c.axis && c.axis === c.HORIZONTAL_AXIS && (g = 0, f = -1 * e), void 0 !== c.wheelDeltaY && (g = c.wheelDeltaY / 120), void 0 !== c.wheelDeltaX && (f = -1 * c.wheelDeltaX / 120), d.unshift(b, e, f, g), (a.event.dispatch || a.event.handle).apply(this, d)
    }
    var c = ["DOMMouseScroll", "mousewheel"];
    if (a.event.fixHooks)
        for (var d = c.length; d;) a.event.fixHooks[c[--d]] = a.event.mouseHooks;
    a.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener)
                for (var a = c.length; a;) this.addEventListener(c[--a], b, !1);
            else this.onmousewheel = b
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var a = c.length; a;) this.removeEventListener(c[--a], b, !1);
            else this.onmousewheel = null
        }
    }, a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
}(jQuery);