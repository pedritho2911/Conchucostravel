! function($, window, undefined) {
    function getPixel(a, b) {
        return parseInt(a.css(b), 10) || 0
    }

    function within(a, b, c) {
        return a < b ? b : a > c ? c : a
    }

    function getViewport() {
        var a = window,
            b = "inner";
        return "innerWidth" in window || (b = "client", a = document.documentElement || document.body), {
            width: a[b + "Width"],
            height: a[b + "Height"]
        }
    }

    function removeHash() {
        history && history.pushState && history.pushState("", document.title, window.location.pathname + window.location.search)
    }

    function doAjax(a, b) {
        var a = "//ilightbox.net/getSource/jsonp.php?url=" + encodeURIComponent(a).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A");
        $.ajax({
            url: a,
            dataType: "jsonp"
        }), iLCallback = function(a) {
            b.call(this, a)
        }
    }

    function findImageInElement(a) {
        var b = $("*", a),
            c = new Array;
        return b.each(function() {
            var a = "",
                b = this;
            if ("none" != $(b).css("background-image") ? a = $(b).css("background-image") : void 0 !== $(b).attr("src") && "img" == b.nodeName.toLowerCase() && (a = $(b).attr("src")), -1 == a.indexOf("gradient")) {
                a = a.replace(/url\(\"/g, ""), a = a.replace(/url\(/g, ""), a = a.replace(/\"\)/g, ""), a = a.replace(/\)/g, "");
                for (var d = a.split(","), e = 0; e < d.length; e++)
                    if (d[e].length > 0 && -1 == $.inArray(d[e], c)) {
                        var f = "";
                        browser.msie && browser.version < 9 && (f = "?" + floor(3e3 * random())), c.push(d[e] + f)
                    }
            }
        }), c
    }

    function getExtension(a) {
        var b = a.split(".").pop().toLowerCase(),
            c = -1 !== b.indexOf("?") ? "?" + b.split("?").pop() : "";
        return b.replace(c, "")
    }

    function getTypeByExtension(a) {
        var b = getExtension(a);
        return -1 !== extensions.image.indexOf(b) ? "image" : -1 !== extensions.flash.indexOf(b) ? "flash" : -1 !== extensions.video.indexOf(b) ? "video" : "iframe"
    }

    function percentToValue(a, b) {
        return parseInt(b / 100 * a)
    }

    function parseURI(a) {
        var b = String(a).replace(/^\s+|\s+$/g, "").match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
        return b ? {
            href: b[0] || "",
            protocol: b[1] || "",
            authority: b[2] || "",
            host: b[3] || "",
            hostname: b[4] || "",
            port: b[5] || "",
            pathname: b[6] || "",
            search: b[7] || "",
            hash: b[8] || ""
        } : null
    }

    function absolutizeURI(a, b) {
        return b = parseURI(b || ""), a = parseURI(a || ""), b && a ? (b.protocol || a.protocol) + (b.protocol || b.authority ? b.authority : a.authority) + function(a) {
            var b = [];
            return a.replace(/^(\.\.?(\/|$))+/, "").replace(/\/(\.(\/|$))+/g, "/").replace(/\/\.\.$/, "/../").replace(/\/?[^\/]*/g, function(a) {
                "/.." === a ? b.pop() : b.push(a)
            }), b.join("").replace(/^\//, "/" === a.charAt(0) ? "/" : "")
        }(b.protocol || b.authority || "/" === b.pathname.charAt(0) ? b.pathname : b.pathname ? (a.authority && !a.pathname ? "/" : "") + a.pathname.slice(0, a.pathname.lastIndexOf("/") + 1) + b.pathname : a.pathname) + (b.protocol || b.authority || b.pathname ? b.search : b.search || a.search) + b.hash : null
    }

    function version_compare(a, b, c) {
        this.php_js = this.php_js || {}, this.php_js.ENV = this.php_js.ENV || {};
        var d = 0,
            e = 0,
            f = 0,
            g = {
                dev: -6,
                alpha: -5,
                a: -5,
                beta: -4,
                b: -4,
                RC: -3,
                rc: -3,
                "#": -2,
                p: 1,
                pl: 1
            },
            h = function(a) {
                return a = ("" + a).replace(/[_\-+]/g, "."), a = a.replace(/([^.\d]+)/g, ".$1.").replace(/\.{2,}/g, "."), a.length ? a.split(".") : [-8]
            },
            i = function(a) {
                return a ? isNaN(a) ? g[a] || -7 : parseInt(a, 10) : 0
            };
        for (a = h(a), b = h(b), e = max(a.length, b.length), d = 0; d < e; d++)
            if (a[d] != b[d]) {
                if (a[d] = i(a[d]), b[d] = i(b[d]), a[d] < b[d]) {
                    f = -1;
                    break
                }
                if (a[d] > b[d]) {
                    f = 1;
                    break
                }
            }
        if (!c) return f;
        switch (c) {
            case ">":
            case "gt":
                return f > 0;
            case ">=":
            case "ge":
                return f >= 0;
            case "<=":
            case "le":
                return f <= 0;
            case "==":
            case "=":
            case "eq":
                return 0 === f;
            case "<>":
            case "!=":
            case "ne":
                return 0 !== f;
            case "":
            case "<":
            case "lt":
                return f < 0;
            default:
                return null
        }
    }

    function getScrollXY() {
        var a = 0,
            b = 0;
        return "number" == typeof window.pageYOffset ? (b = window.pageYOffset, a = window.pageXOffset) : document.body && (document.body.scrollLeft || document.body.scrollTop) ? (b = document.body.scrollTop, a = document.body.scrollLeft) : document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop) && (b = document.documentElement.scrollTop, a = document.documentElement.scrollLeft), {
            x: a,
            y: b
        }
    }

    function AC_QuickTimeVersion() {
        return gQTGeneratorVersion
    }

    function _QTComplain(a, b) {
        b = b.replace("%%", a), alert(b)
    }

    function _QTAddAttribute(a, b, c) {
        var d;
        return d = gTagAttrs[a + b], null == d && (d = gTagAttrs[b]), null != d ? (0 == b.indexOf(a) && null == c && (c = b.substring(a.length)), null == c && (c = b), c + '="' + d + '" ') : ""
    }

    function _QTAddObjectAttr(a, b) {
        return 0 == a.indexOf("emb#") ? "" : (0 == a.indexOf("obj#") && null == b && (b = a.substring(4)), _QTAddAttribute("obj#", a, b))
    }

    function _QTAddEmbedAttr(a, b) {
        return 0 == a.indexOf("obj#") ? "" : (0 == a.indexOf("emb#") && null == b && (b = a.substring(4)), _QTAddAttribute("emb#", a, b))
    }

    function _QTAddObjectParam(a, b) {
        var c, d = "",
            e = b ? " />" : ">";
        return -1 == a.indexOf("emb#") && (c = gTagAttrs["obj#" + a], null == c && (c = gTagAttrs[a]), 0 == a.indexOf("obj#") && (a = a.substring(4)), null != c && (d = '  <param name="' + a + '" value="' + c + '"' + e + "\n")), d
    }

    function _QTDeleteTagAttrs() {
        for (var a = 0; a < arguments.length; a++) {
            var b = arguments[a];
            delete gTagAttrs[b], delete gTagAttrs["emb#" + b], delete gTagAttrs["obj#" + b]
        }
    }

    function _QTGenerate(a, b, c) {
        if (4 > c.length || 0 != c.length % 2) return _QTComplain(a, gArgCountErr), "";
        gTagAttrs = [], gTagAttrs.src = c[0], gTagAttrs.width = c[1], gTagAttrs.height = c[2], gTagAttrs.classid = "clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B", gTagAttrs.pluginspage = "http://www.apple.com/quicktime/download/", a = c[3], null != a && "" != a || (a = "6,0,2,0"), gTagAttrs.codebase = "http://www.apple.com/qtactivex/qtplugin.cab#version=" + a;
        for (var d, e = 4; e < c.length; e += 2) d = c[e].toLowerCase(), a = c[e + 1], "name" == d || "id" == d ? gTagAttrs.name = a : gTagAttrs[d] = a;
        c = "<object " + _QTAddObjectAttr("classid") + _QTAddObjectAttr("width") + _QTAddObjectAttr("height") + _QTAddObjectAttr("codebase") + _QTAddObjectAttr("name", "id") + _QTAddObjectAttr("tabindex") + _QTAddObjectAttr("hspace") + _QTAddObjectAttr("vspace") + _QTAddObjectAttr("border") + _QTAddObjectAttr("align") + _QTAddObjectAttr("class") + _QTAddObjectAttr("title") + _QTAddObjectAttr("accesskey") + _QTAddObjectAttr("noexternaldata") + ">\n" + _QTAddObjectParam("src", b), e = "  <embed " + _QTAddEmbedAttr("src") + _QTAddEmbedAttr("width") + _QTAddEmbedAttr("height") + _QTAddEmbedAttr("pluginspage") + _QTAddEmbedAttr("name") + _QTAddEmbedAttr("align") + _QTAddEmbedAttr("tabindex"), _QTDeleteTagAttrs("src", "width", "height", "pluginspage", "classid", "codebase", "name", "tabindex", "hspace", "vspace", "border", "align", "noexternaldata", "class", "title", "accesskey");
        for (d in gTagAttrs) null != (a = gTagAttrs[d]) && (e += _QTAddEmbedAttr(d), c += _QTAddObjectParam(d, b));
        return c + e + "> </embed>\n</object>"
    }

    function QT_GenerateOBJECTText() {
        return _QTGenerate("QT_GenerateOBJECTText", !1, arguments)
    }
    var extensions = {
            flash: ["swf"],
            image: ["bmp", "gif", "jpeg", "jpg", "png", "tiff", "tif", "jfif", "jpe"],
            iframe: ["asp", "aspx", "cgi", "cfm", "htm", "html", "jsp", "php", "pl", "php3", "php4", "php5", "phtml", "rb", "rhtml", "shtml", "txt"],
            video: ["avi", "mov", "mpg", "mpeg", "movie", "mp4", "webm", "ogv", "ogg", "3gp", "m4v"]
        },
        $win = $(window),
        $doc = $(document),
        browser, transform, gpuAcceleration, fullScreenApi = "",
        userAgent = navigator.userAgent || navigator.vendor || window.opera,
        supportTouch = "ontouchstart" in window || navigator.msMaxTouchPoints,
        isMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(userAgent.substr(0, 4)),
        clickEvent = supportTouch ? "click itap" : "click",
        touchStartEvent = supportTouch ? "mousedown.iLightBox touchstart.iLightBox" : "mousedown.iLightBox",
        touchStopEvent = supportTouch ? "mouseup.iLightBox touchend.iLightBox" : "mouseup.iLightBox",
        touchMoveEvent = supportTouch ? "mousemove.iLightBox touchmove.iLightBox" : "mousemove.iLightBox",
        abs = Math.abs,
        sqrt = Math.sqrt,
        round = Math.round,
        max = Math.max,
        min = Math.min,
        floor = Math.floor,
        random = Math.random,
        pluginspages = {
            quicktime: "http://www.apple.com/quicktime/download",
            flash: "http://www.adobe.com/go/getflash"
        },
        iLightBox = function(a, b, c, d) {
            var e = this;
            if (e.options = b, e.selector = a.selector || a, e.context = a.context, e.instant = d, c.length < 1 ? e.attachItems() : e.items = c, e.vars = {
                    total: e.items.length,
                    start: 0,
                    current: null,
                    next: null,
                    prev: null,
                    BODY: $("body"),
                    loadRequests: 0,
                    overlay: $('<div class="ilightbox-overlay"></div>'),
                    loader: $('<div class="ilightbox-loader"><div></div></div>'),
                    toolbar: $('<div class="ilightbox-toolbar"></div>'),
                    innerToolbar: $('<div class="ilightbox-inner-toolbar"></div>'),
                    title: $('<div class="ilightbox-title"></div>'),
                    closeButton: $('<a class="ilightbox-close" title="' + e.options.text.close + '"></a>'),
                    fullScreenButton: $('<a class="ilightbox-fullscreen" title="' + e.options.text.enterFullscreen + '"></a>'),
                    innerPlayButton: $('<a class="ilightbox-play" title="' + e.options.text.slideShow + '"></a>'),
                    innerNextButton: $('<a class="ilightbox-next-button" title="' + e.options.text.next + '"></a>'),
                    innerPrevButton: $('<a class="ilightbox-prev-button" title="' + e.options.text.previous + '"></a>'),
                    holder: $('<div class="ilightbox-holder' + (supportTouch ? " supportTouch" : "") + '" ondragstart="return false;"><div class="ilightbox-container"></div></div>'),
                    nextPhoto: $('<div class="ilightbox-holder' + (supportTouch ? " supportTouch" : "") + ' ilightbox-next" ondragstart="return false;"><div class="ilightbox-container"></div></div>'),
                    prevPhoto: $('<div class="ilightbox-holder' + (supportTouch ? " supportTouch" : "") + ' ilightbox-prev" ondragstart="return false;"><div class="ilightbox-container"></div></div>'),
                    nextButton: $('<a class="ilightbox-button ilightbox-next-button" ondragstart="return false;" title="' + e.options.text.next + '"><span></span></a>'),
                    prevButton: $('<a class="ilightbox-button ilightbox-prev-button" ondragstart="return false;" title="' + e.options.text.previous + '"><span></span></a>'),
                    thumbnails: $('<div class="ilightbox-thumbnails" ondragstart="return false;"><div class="ilightbox-thumbnails-container"><a class="ilightbox-thumbnails-dragger"></a><div class="ilightbox-thumbnails-grid"></div></div></div>'),
                    thumbs: !1,
                    nextLock: !1,
                    prevLock: !1,
                    hashLock: !1,
                    isMobile: !1,
                    mobileMaxWidth: 980,
                    isInFullScreen: !1,
                    isSwipe: !1,
                    mouseID: 0,
                    cycleID: 0,
                    isPaused: 0
                }, e.vars.hideableElements = e.vars.nextButton.add(e.vars.prevButton), e.normalizeItems(), e.availPlugins(), e.options.startFrom = e.options.startFrom > 0 && e.options.startFrom >= e.vars.total ? e.vars.total - 1 : e.options.startFrom, e.options.startFrom = e.options.randomStart ? floor(random() * e.vars.total) : e.options.startFrom, e.vars.start = e.options.startFrom, d ? e.instantCall() : e.patchItemsEvents(), e.options.linkId && (e.hashChangeHandler(), $win.iLightBoxHashChange(function() {
                    e.hashChangeHandler()
                })), supportTouch) {
                var f = /(click|mouseenter|mouseleave|mouseover|mouseout)/gi;
                e.options.caption.show = e.options.caption.show.replace(f, "itap"), e.options.caption.hide = e.options.caption.hide.replace(f, "itap"), e.options.social.show = e.options.social.show.replace(f, "itap"), e.options.social.hide = e.options.social.hide.replace(f, "itap")
            }
            e.options.controls.arrows && $.extend(e.options.styles, {
                nextOffsetX: 0,
                prevOffsetX: 0,
                nextOpacity: 0,
                prevOpacity: 0
            })
        };
    iLightBox.prototype = {
            showLoader: function() {
                var a = this;
                a.vars.loadRequests += 1, "horizontal" == a.options.path.toLowerCase() ? a.vars.loader.addClass("ilightbox-show").stop().animate({
                    top: "-30px"
                }, a.options.show.speed, "easeOutCirc") : a.vars.loader.addClass("ilightbox-show").stop().animate({
                    left: "-30px"
                }, a.options.show.speed, "easeOutCirc")
            },
            hideLoader: function() {
                var a = this;
                a.vars.loadRequests -= 1, a.vars.loadRequests = a.vars.loadRequests < 0 ? 0 : a.vars.loadRequests, "horizontal" == a.options.path.toLowerCase() ? a.vars.loadRequests <= 0 && a.vars.loader.removeClass("ilightbox-show").stop().animate({
                    top: "-192px"
                }, a.options.show.speed, "easeInCirc") : a.vars.loadRequests <= 0 && a.vars.loader.removeClass("ilightbox-show").stop().animate({
                    left: "-192px"
                }, a.options.show.speed, "easeInCirc")
            },
            createUI: function() {
                var a = this;
                a.ui = {
                    currentElement: a.vars.holder,
                    nextElement: a.vars.nextPhoto,
                    prevElement: a.vars.prevPhoto,
                    currentItem: a.vars.current,
                    nextItem: a.vars.next,
                    prevItem: a.vars.prev,
                    hide: function() {
                        a.closeAction()
                    },
                    refresh: function() {
                        arguments.length > 0 ? a.repositionPhoto(!0) : a.repositionPhoto()
                    },
                    fullscreen: function() {
                        a.fullScreenAction()
                    }
                }
            },
            attachItems: function() {
                var iL = this,
                    itemsObject = new Array,
                    items = new Array;
                $(iL.selector, iL.context).each(function() {
                    var t = $(this),
                        URL = t.attr(iL.options.attr) || null,
                        options = t.data("options") && eval("({" + t.data("options") + "})") || {},
                        caption = t.data("caption"),
                        title = t.data("title"),
                        type = t.data("type") || getTypeByExtension(URL);
                    items.push({
                        URL: URL,
                        caption: caption,
                        title: title,
                        type: type,
                        options: options
                    }), iL.instant || itemsObject.push(t)
                }), iL.items = items, iL.itemsObject = itemsObject, iL.vars && (iL.vars.total = items.length)
            },
            normalizeItems: function() {
                var a = this,
                    b = new Array;
                $.each(a.items, function(c, d) {
                    "string" == typeof d && (d = {
                        url: d
                    });
                    var e = d.url || d.URL || null,
                        f = d.options || {},
                        g = d.caption || null,
                        h = d.title || null,
                        i = d.type ? d.type.toLowerCase() : getTypeByExtension(e),
                        j = "object" != typeof e ? getExtension(e) : "";
                    if (f.thumbnail = f.thumbnail || ("image" == i ? e : null), f.videoType = f.videoType || null, f.skin = f.skin || a.options.skin, f.width = f.width || null, f.height = f.height || null, f.mousewheel = void 0 === f.mousewheel || f.mousewheel, f.swipe = void 0 === f.swipe || f.swipe, f.social = void 0 !== f.social ? f.social : a.options.social.buttons && $.extend({}, {}, a.options.social.buttons), "video" == i && (f.html5video = void 0 !== f.html5video ? f.html5video : {}, f.html5video.webm = f.html5video.webm || f.html5video.WEBM || null, f.html5video.controls = void 0 !== f.html5video.controls ? f.html5video.controls : "controls", f.html5video.preload = f.html5video.preload || "metadata", f.html5video.autoplay = void 0 !== f.html5video.autoplay && f.html5video.autoplay), "iframe" === i)
                        if (-1 !== e.indexOf("youtube.com")) {
                            var k = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,
                                l = e.match(k);
                            l && 11 === l[7].length && (f.thumbnail = "//img.youtube.com/vi/" + l[7] + "/mqdefault.jpg")
                        } else -1 !== e.indexOf("vimeo.com") && ($videoID = e.split(/[?#]/)[0].replace(/[^\d]/g, ""), $.getJSON("https://www.vimeo.com/api/v2/video/" + $videoID + ".json?callback=?", {
                            format: "json"
                        }, function(a) {
                            f.thumbnail = a[0].thumbnail_medium
                        }));
                    f.width && f.height || ("video" == i ? (f.width = fusionLightboxVideoVars.lightbox_video_width, f.height = fusionLightboxVideoVars.lightbox_video_height) : "iframe" == i ? (f.width = fusionLightboxVideoVars.lightbox_video_width, f.height = fusionLightboxVideoVars.lightbox_video_height) : "flash" == i && (f.width = fusionLightboxVideoVars.lightbox_video_width, f.height = fusionLightboxVideoVars.lightbox_video_height)), delete d.url, d.index = c, d.URL = e, d.caption = g, d.title = h, d.type = i, d.options = f, d.ext = j, b.push(d)
                }), a.items = b
            },
            instantCall: function() {
                var a = this,
                    b = a.vars.start;
                a.vars.current = b, a.vars.next = a.items[b + 1] ? b + 1 : null, a.vars.prev = a.items[b - 1] ? b - 1 : null, a.addContents(), a.patchEvents()
            },
            addContents: function() {
                var a = this,
                    b = a.vars,
                    c = a.options,
                    d = getViewport(),
                    e = c.path.toLowerCase(),
                    f = b.total > 0 && a.items.filter(function(a, b, d) {
                        return -1 === ["image", "flash", "video"].indexOf(a.type) && void 0 === a.recognized && (c.smartRecognition || a.options.smartRecognition)
                    }),
                    g = f.length > 0;
                c.mobileOptimizer && !c.innerToolbar && (b.isMobile = d.width <= b.mobileMaxWidth), b.overlay.addClass(c.skin).hide().css("opacity", c.overlay.opacity), c.linkId && b.overlay[0].setAttribute("linkid", c.linkId), c.controls.toolbar && (b.toolbar.addClass(c.skin).append(b.closeButton), c.controls.fullscreen && b.toolbar.append(b.fullScreenButton), c.controls.slideshow && b.toolbar.append(b.innerPlayButton), b.total > 1 && b.toolbar.append(b.innerPrevButton).append(b.innerNextButton)), b.BODY.addClass("ilightbox-noscroll").append(b.overlay).append(b.loader).append(b.holder).append(b.nextPhoto).append(b.prevPhoto), c.innerToolbar || b.BODY.append(b.toolbar), c.controls.arrows && b.BODY.append(b.nextButton).append(b.prevButton), c.controls.thumbnail && b.total > 1 && (b.BODY.append(b.thumbnails), b.thumbnails.addClass(c.skin).addClass("ilightbox-" + e), $("div.ilightbox-thumbnails-grid", b.thumbnails).empty(), b.thumbs = !0);
                var h = "horizontal" == c.path.toLowerCase() ? {
                    left: parseInt(d.width / 2 - b.loader.outerWidth() / 2)
                } : {
                    top: parseInt(d.height / 2 - b.loader.outerHeight() / 2)
                };
                b.loader.addClass(c.skin).css(h), b.nextButton.add(b.prevButton).addClass(c.skin), "horizontal" == e && b.loader.add(b.nextButton).add(b.prevButton).addClass("horizontal"), b.BODY[b.isMobile ? "addClass" : "removeClass"]("isMobile"), c.infinite || (b.prevButton.add(b.prevButton).add(b.innerPrevButton).add(b.innerNextButton).removeClass("disabled"), 0 == b.current && b.prevButton.add(b.innerPrevButton).addClass("disabled"), b.current >= b.total - 1 && b.nextButton.add(b.innerNextButton).addClass("disabled")), c.show.effect ? (b.overlay.stop().fadeIn(c.show.speed), b.toolbar.stop().fadeIn(c.show.speed)) : (b.overlay.show(), b.toolbar.show());
                var i = f.length;
                g ? (a.showLoader(), $.each(f, function(d, e) {
                    var f = function(d) {
                        var e = -1,
                            f = (a.items.filter(function(a, b, c) {
                                return a.URL == d.url && (e = b), a.URL == d.url
                            }), a.items[e]);
                        d && $.extend(!0, f, {
                            URL: d.source,
                            type: d.type,
                            recognized: !0,
                            options: {
                                html5video: d.html5video,
                                width: "image" == d.type ? 0 : d.width || f.width,
                                height: "image" == d.type ? 0 : d.height || f.height,
                                thumbnail: f.options.thumbnail || d.thumbnail
                            }
                        }), 0 == --i && (a.hideLoader(), b.dontGenerateThumbs = !1, a.generateThumbnails(), c.show.effect ? setTimeout(function() {
                            a.generateBoxes()
                        }, c.show.speed) : a.generateBoxes())
                    };
                    a.ogpRecognition(this, f)
                })) : c.show.effect ? setTimeout(function() {
                    a.generateBoxes()
                }, c.show.speed) : a.generateBoxes(), a.createUI(), window.iLightBox = {
                    close: function() {
                        a.closeAction()
                    },
                    fullscreen: function() {
                        a.fullScreenAction()
                    },
                    moveNext: function() {
                        a.moveTo("next")
                    },
                    movePrev: function() {
                        a.moveTo("prev")
                    },
                    goTo: function(b) {
                        a.goTo(b)
                    },
                    refresh: function() {
                        a.refresh()
                    },
                    reposition: function() {
                        arguments.length > 0 ? a.repositionPhoto(!0) : a.repositionPhoto()
                    },
                    setOption: function(b) {
                        a.setOption(b)
                    },
                    destroy: function() {
                        a.closeAction(), a.dispatchItemsEvents()
                    }
                }, c.linkId && (b.hashLock = !0, window.location.hash = c.linkId + "/" + b.current, setTimeout(function() {
                    b.hashLock = !1
                }, 55)), c.slideshow.startPaused || (a.resume(), b.innerPlayButton.removeClass("ilightbox-play").addClass("ilightbox-pause")), "function" == typeof a.options.callback.onOpen && a.options.callback.onOpen.call(a)
            },
            loadContent: function(a, b, c) {
                var d, e, f = this;
                switch (f.createUI(), a.speed = c || f.options.effects.loadedFadeSpeed, "current" == b && (a.options.mousewheel ? f.vars.lockWheel = !1 : f.vars.lockWheel = !0, a.options.swipe ? f.vars.lockSwipe = !1 : f.vars.lockSwipe = !0), b) {
                    case "current":
                        d = f.vars.holder, e = f.vars.current;
                        break;
                    case "next":
                        d = f.vars.nextPhoto, e = f.vars.next;
                        break;
                    case "prev":
                        d = f.vars.prevPhoto, e = f.vars.prev
                }
                if (d.removeAttr("style class").addClass("ilightbox-holder" + (supportTouch ? " supportTouch" : "")).addClass(a.options.skin), $("div.ilightbox-inner-toolbar", d).remove(), a.title || f.options.innerToolbar) {
                    var g = f.vars.innerToolbar.clone();
                    if (a.title && f.options.show.title) {
                        var h = f.vars.title.clone();
                        h.empty().html(a.title), g.append(h)
                    }
                    f.options.innerToolbar && g.append(f.vars.total > 1 ? f.vars.toolbar.clone() : f.vars.toolbar), d.prepend(g)
                }
                f.loadSwitcher(a, d, e, b)
            },
            loadSwitcher: function(a, b, c, d) {
                var e = this,
                    f = e.options,
                    g = {
                        element: b,
                        position: c
                    };
                switch (a.type) {
                    case "image":
                        "function" == typeof f.callback.onBeforeLoad && f.callback.onBeforeLoad.call(e, e.ui, c), "function" == typeof a.options.onBeforeLoad && a.options.onBeforeLoad.call(e, g), e.loadImage(a.URL, function(h) {
                            "function" == typeof f.callback.onAfterLoad && f.callback.onAfterLoad.call(e, e.ui, c), "function" == typeof a.options.onAfterLoad && a.options.onAfterLoad.call(e, g);
                            var i = h ? h.width : 400,
                                j = h ? h.height : 200;
                            b.data({
                                naturalWidth: i,
                                naturalHeight: j
                            }), $("div.ilightbox-container", b).empty().append(h ? '<img src="' + a.URL + '" class="ilightbox-image" />' : '<span class="ilightbox-alert">' + f.errors.loadImage + "</span>"), "function" == typeof f.callback.onRender && f.callback.onRender.call(e, e.ui, c), "function" == typeof a.options.onRender && a.options.onRender.call(e, g), e.configureHolder(a, d, b)
                        });
                        break;
                    case "video":
                        b.data({
                            naturalWidth: a.options.width,
                            naturalHeight: a.options.height
                        }), e.addContent(b, a), "function" == typeof f.callback.onRender && f.callback.onRender.call(e, e.ui, c), "function" == typeof a.options.onRender && a.options.onRender.call(e, g), e.configureHolder(a, d, b);
                        break;
                    case "iframe":
                        for (var h = a.URL.substring(a.URL.indexOf("?") + 1).split("&"), i = {}, j = 0; j < h.length; ++j) {
                            var k = h[j].split("=");
                            2 == k.length && ("w" == k[0] && (k[0] = "width"), "h" == k[0] && (k[0] = "height"), i[k[0]] = decodeURIComponent(k[1].replace(/\+/g, " ")))
                        }
                        e.showLoader(), b.data({
                            naturalWidth: a.options.width,
                            naturalHeight: a.options.height
                        });
                        var l = e.addContent(b, a);
                        "function" == typeof f.callback.onRender && f.callback.onRender.call(e, e.ui, c), "function" == typeof a.options.onRender && a.options.onRender.call(e, g), "function" == typeof f.callback.onBeforeLoad && f.callback.onBeforeLoad.call(e, e.ui, c), "function" == typeof a.options.onBeforeLoad && a.options.onBeforeLoad.call(e, g), e.configureHolder(a, d, b), l.bind("load", function() {
                            "function" == typeof f.callback.onAfterLoad && f.callback.onAfterLoad.call(e, e.ui, c), "function" == typeof a.options.onAfterLoad && a.options.onAfterLoad.call(e, g), e.hideLoader(), l.unbind("load")
                        });
                        break;
                    case "inline":
                        var l = $(a.URL),
                            m = e.addContent(b, a),
                            n = findImageInElement(b);
                        b.data({
                            naturalWidth: e.items[c].options.width || l.outerWidth(),
                            naturalHeight: e.items[c].options.height || l.outerHeight()
                        }), m.children().eq(0).show(), "function" == typeof f.callback.onRender && f.callback.onRender.call(e, e.ui, c), "function" == typeof a.options.onRender && a.options.onRender.call(e, g), "function" == typeof f.callback.onBeforeLoad && f.callback.onBeforeLoad.call(e, e.ui, c), "function" == typeof a.options.onBeforeLoad && a.options.onBeforeLoad.call(e, g), e.loadImage(n, function() {
                            "function" == typeof f.callback.onAfterLoad && f.callback.onAfterLoad.call(e, e.ui, c), "function" == typeof a.options.onAfterLoad && a.options.onAfterLoad.call(e, g), e.configureHolder(a, d, b)
                        });
                        break;
                    case "flash":
                        var l = e.addContent(b, a);
                        b.data({
                            naturalWidth: e.items[c].options.width || l.outerWidth(),
                            naturalHeight: e.items[c].options.height || l.outerHeight()
                        }), "function" == typeof f.callback.onRender && f.callback.onRender.call(e, e.ui, c), "function" == typeof a.options.onRender && a.options.onRender.call(e, g), e.configureHolder(a, d, b);
                        break;
                    case "ajax":
                        var o = a.options.ajax || {};
                        "function" == typeof f.callback.onBeforeLoad && f.callback.onBeforeLoad.call(e, e.ui, c), "function" == typeof a.options.onBeforeLoad && a.options.onBeforeLoad.call(e, g), e.showLoader(), $.ajax({
                            url: a.URL || f.ajaxSetup.url,
                            data: o.data || null,
                            dataType: o.dataType || "html",
                            type: o.type || f.ajaxSetup.type,
                            cache: o.cache || f.ajaxSetup.cache,
                            crossDomain: o.crossDomain || f.ajaxSetup.crossDomain,
                            global: o.global || f.ajaxSetup.global,
                            ifModified: o.ifModified || f.ajaxSetup.ifModified,
                            username: o.username || f.ajaxSetup.username,
                            password: o.password || f.ajaxSetup.password,
                            beforeSend: o.beforeSend || f.ajaxSetup.beforeSend,
                            complete: o.complete || f.ajaxSetup.complete,
                            success: function(h, i, j) {
                                e.hideLoader();
                                var k = $(h),
                                    l = $("div.ilightbox-container", b),
                                    m = e.items[c].options.width || parseInt(k[0].getAttribute("width")),
                                    n = e.items[c].options.height || parseInt(k[0].getAttribute("height")),
                                    p = k[0].getAttribute("width") && k[0].getAttribute("height") ? {
                                        overflow: "hidden"
                                    } : {};
                                l.empty().append($('<div class="ilightbox-wrapper"></div>').css(p).html(k)), b.show().data({
                                    naturalWidth: m || l.outerWidth(),
                                    naturalHeight: n || l.outerHeight()
                                }).hide(), "function" == typeof f.callback.onRender && f.callback.onRender.call(e, e.ui, c), "function" == typeof a.options.onRender && a.options.onRender.call(e, g);
                                var q = findImageInElement(b);
                                e.loadImage(q, function() {
                                    "function" == typeof f.callback.onAfterLoad && f.callback.onAfterLoad.call(e, e.ui, c), "function" == typeof a.options.onAfterLoad && a.options.onAfterLoad.call(e, g), e.configureHolder(a, d, b)
                                }), f.ajaxSetup.success(h, i, j), "function" == typeof o.success && o.success(h, i, j)
                            },
                            error: function(h, i, j) {
                                "function" == typeof f.callback.onAfterLoad && f.callback.onAfterLoad.call(e, e.ui, c), "function" == typeof a.options.onAfterLoad && a.options.onAfterLoad.call(e, g), e.hideLoader(), $("div.ilightbox-container", b).empty().append('<span class="ilightbox-alert">' + f.errors.loadContents + "</span>"), e.configureHolder(a, d, b), f.ajaxSetup.error(h, i, j), "function" == typeof o.error && o.error(h, i, j)
                            }
                        });
                        break;
                    case "html":
                        var l, p = a.URL;
                        if (container = $("div.ilightbox-container", b), p[0].nodeName) l = p.clone();
                        else {
                            var q = $(p);
                            l = q.selector ? $("<div>" + q + "</div>") : q
                        }
                        var r = e.items[c].options.width || parseInt(l.attr("width")),
                            s = e.items[c].options.height || parseInt(l.attr("height"));
                        e.addContent(b, a), l.appendTo(document.documentElement).hide(), "function" == typeof f.callback.onRender && f.callback.onRender.call(e, e.ui, c), "function" == typeof a.options.onRender && a.options.onRender.call(e, g);
                        var n = findImageInElement(b);
                        "function" == typeof f.callback.onBeforeLoad && f.callback.onBeforeLoad.call(e, e.ui, c), "function" == typeof a.options.onBeforeLoad && a.options.onBeforeLoad.call(e, g), e.loadImage(n, function() {
                            "function" == typeof f.callback.onAfterLoad && f.callback.onAfterLoad.call(e, e.ui, c), "function" == typeof a.options.onAfterLoad && a.options.onAfterLoad.call(e, g), b.show().data({
                                naturalWidth: r || container.outerWidth(),
                                naturalHeight: s || container.outerHeight()
                            }).hide(), l.remove(), e.configureHolder(a, d, b)
                        })
                }
            },
            configureHolder: function(a, b, c) {
                var d = this,
                    e = d.vars,
                    f = d.options;
                if ("current" != b && ("next" == b ? c.addClass("ilightbox-next") : c.addClass("ilightbox-prev")), "current" == b) var g = e.current;
                else if ("next" == b) var h = f.styles.nextOpacity,
                    g = e.next;
                else var h = f.styles.prevOpacity,
                    g = e.prev;
                var i = {
                    element: c,
                    position: g
                };
                d.items[g].options.width = d.items[g].options.width || 0, d.items[g].options.height = d.items[g].options.height || 0, "current" == b ? f.show.effect ? c.css(transform, gpuAcceleration).fadeIn(a.speed, function() {
                    if (c.css(transform, ""), a.caption) {
                        d.setCaption(a, c);
                        var b = $("div.ilightbox-caption", c),
                            e = parseInt(b.outerHeight() / c.outerHeight() * 100);
                        f.caption.start & e <= 50 && b.fadeIn(f.effects.fadeSpeed)
                    }
                    var h = a.options.social;
                    h && (d.setSocial(h, a.URL, c), f.social.start && $("div.ilightbox-social", c).fadeIn(f.effects.fadeSpeed)), d.generateThumbnails(), "function" == typeof f.callback.onShow && f.callback.onShow.call(d, d.ui, g), "function" == typeof a.options.onShow && a.options.onShow.call(d, i)
                }) : (c.show(), d.generateThumbnails(), "function" == typeof f.callback.onShow && f.callback.onShow.call(d, d.ui, g), "function" == typeof a.options.onShow && a.options.onShow.call(d, i)) : f.show.effect ? c.fadeTo(a.speed, h, function() {
                    "next" == b ? e.nextLock = !1 : e.prevLock = !1, d.generateThumbnails(), "function" == typeof f.callback.onShow && f.callback.onShow.call(d, d.ui, g), "function" == typeof a.options.onShow && a.options.onShow.call(d, i)
                }) : (c.css({
                    opacity: h
                }).show(), "next" == b ? e.nextLock = !1 : e.prevLock = !1, d.generateThumbnails(), "function" == typeof f.callback.onShow && f.callback.onShow.call(d, d.ui, g), "function" == typeof a.options.onShow && a.options.onShow.call(d, i)), setTimeout(function() {
                    d.repositionPhoto()
                }, 0)
            },
            generateBoxes: function() {
                var a = this,
                    b = a.vars,
                    c = a.options;
                c.infinite && b.total >= 3 ? (b.current == b.total - 1 && (b.next = 0), 0 == b.current && (b.prev = b.total - 1)) : c.infinite = !1, a.loadContent(a.items[b.current], "current", c.show.speed), a.items[b.next] && a.loadContent(a.items[b.next], "next", c.show.speed), a.items[b.prev] && a.loadContent(a.items[b.prev], "prev", c.show.speed)
            },
            generateThumbnails: function() {
                var a = this,
                    b = a.vars,
                    c = a.options,
                    d = null;
                if (b.thumbs && !a.vars.dontGenerateThumbs) {
                    var e = b.thumbnails,
                        f = $("div.ilightbox-thumbnails-container", e),
                        g = $("div.ilightbox-thumbnails-grid", f),
                        h = 0;
                    g.removeAttr("style").empty(), $.each(a.items, function(i, j) {
                        var k = b.current == i ? "ilightbox-active" : "",
                            l = b.current == i ? c.thumbnails.activeOpacity : c.thumbnails.normalOpacity,
                            m = j.options.thumbnail,
                            n = $('<div class="ilightbox-thumbnail"></div>'),
                            o = $('<div class="ilightbox-thumbnail-icon"></div>');
                        n.css({
                            opacity: 0
                        }).addClass(k), "video" != j.type && "flash" != j.type || void 0 !== j.options.icon ? j.options.icon && (o.addClass("ilightbox-thumbnail-" + j.options.icon), n.append(o)) : (o.addClass("ilightbox-thumbnail-video"), n.append(o)), m && a.loadImage(m, function(b) {
                            h++, b ? n.data({
                                naturalWidth: b.width,
                                naturalHeight: b.height
                            }).append('<img src="' + m + '" border="0" />') : n.data({
                                naturalWidth: c.thumbnails.maxWidth,
                                naturalHeight: c.thumbnails.maxHeight
                            }), clearTimeout(d), d = setTimeout(function() {
                                a.positionThumbnails(e, f, g)
                            }, 20), setTimeout(function() {
                                n.fadeTo(c.effects.loadedFadeSpeed, l)
                            }, 20 * h)
                        }), g.append(n)
                    }), a.vars.dontGenerateThumbs = !0
                }
            },
            positionThumbnails: function(a, b, c) {
                var d = this,
                    e = d.vars,
                    f = d.options,
                    g = getViewport(),
                    h = f.path.toLowerCase();
                a || (a = e.thumbnails), b || (b = $("div.ilightbox-thumbnails-container", a)), c || (c = $("div.ilightbox-thumbnails-grid", b));
                var i = $(".ilightbox-thumbnail", c),
                    j = "horizontal" == h ? g.width - f.styles.pageOffsetX : i.eq(0).outerWidth() - f.styles.pageOffsetX,
                    k = "horizontal" == h ? i.eq(0).outerHeight() - f.styles.pageOffsetY : g.height - f.styles.pageOffsetY,
                    l = "horizontal" == h ? 0 : j,
                    m = "horizontal" == h ? k : 0,
                    n = $(".ilightbox-active", c),
                    o = {};
                arguments.length < 3 && (i.css({
                    opacity: f.thumbnails.normalOpacity
                }), n.css({
                    opacity: f.thumbnails.activeOpacity
                })), i.each(function(a) {
                    var b = $(this),
                        c = b.data(),
                        e = "horizontal" == h ? 0 : f.thumbnails.maxWidth;
                    height = "horizontal" == h ? f.thumbnails.maxHeight : 0, dims = d.getNewDimenstions(e, height, c.naturalWidth, c.naturalHeight, !0), b.css({
                        width: dims.width,
                        height: dims.height
                    }), "horizontal" == h && b.css({
                        float: "left"
                    }), "horizontal" == h ? l += b.outerWidth(!0) : m += b.outerHeight()
                }), o = {
                    width: l,
                    height: m
                }, c.css(o), o = {};
                var p = c.offset(),
                    q = n.length ? n.offset() : {
                        top: parseInt(k / 2),
                        left: parseInt(j / 2)
                    };
                p.top = p.top - $doc.scrollTop(), p.left = p.left - $doc.scrollLeft(), q.top = q.top - p.top - $doc.scrollTop(), q.left = q.left - p.left - $doc.scrollLeft(), "horizontal" == h ? (o.top = 0, o.left = parseInt(j / 2 - q.left - n.outerWidth() / 2)) : (o.top = parseInt(k / 2 - q.top - n.outerHeight() / 2), o.left = 0), arguments.length < 3 ? c.stop().animate(o, f.effects.repositionSpeed, "easeOutCirc") : c.css(o)
            },
            loadImage: function(a, b) {
                $.isArray(a) || (a = [a]);
                var c = this,
                    d = a.length;
                d > 0 ? (c.showLoader(), $.each(a, function(e, f) {
                    var g = new Image;
                    g.onload = function() {
                        0 == (d -= 1) && (c.hideLoader(), b(g))
                    }, g.onerror = g.onabort = function() {
                        0 == (d -= 1) && (c.hideLoader(), b(!1))
                    }, g.src = a[e]
                })) : b(!1)
            },
            patchItemsEvents: function() {
                var a = this,
                    b = a.vars,
                    c = supportTouch ? "click.iL itap.iL" : "click.iL",
                    d = supportTouch ? "click.iL itap.iL" : "itap.iL";
                if (a.context && a.selector) {
                    var e = $(a.selector, a.context);
                    $(a.context).on(c, a.selector, function() {
                        var c = $(this),
                            d = e.index(c);
                        return b.current = d, b.next = a.items[d + 1] ? d + 1 : null, b.prev = a.items[d - 1] ? d - 1 : null, a.addContents(), a.patchEvents(), !1
                    }).on(d, a.selector, function() {
                        return !1
                    })
                } else $.each(a.itemsObject, function(e, f) {
                    f.on(c, function() {
                        return b.current = e, b.next = a.items[e + 1] ? e + 1 : null, b.prev = a.items[e - 1] ? e - 1 : null, a.addContents(), a.patchEvents(), !1
                    }).on(d, function() {
                        return !1
                    })
                })
            },
            dispatchItemsEvents: function() {
                var a = this;
                a.vars, a.options;
                a.context && a.selector ? $(a.context).off(".iL", a.selector) : $.each(a.itemsObject, function(a, b) {
                    b.off(".iL")
                })
            },
            refresh: function() {
                var a = this;
                a.dispatchItemsEvents(), a.attachItems(),
                    a.normalizeItems(), a.patchItemsEvents()
            },
            patchEvents: function() {
                function a(a) {
                    c.isMobile || (c.mouseID || c.hideableElements.show(), c.mouseID = clearTimeout(c.mouseID), -1 === i.indexOf(a.target) && (c.mouseID = setTimeout(function() {
                        c.hideableElements.hide(), c.mouseID = clearTimeout(c.mouseID)
                    }, 3e3)))
                }
                var b = this,
                    c = b.vars,
                    d = b.options,
                    e = d.path.toLowerCase(),
                    f = $(".ilightbox-holder"),
                    g = fullScreenApi.fullScreenEventName + ".iLightBox",
                    h = verticalDistanceThreshold = 100,
                    i = [c.nextButton[0], c.prevButton[0], c.nextButton[0].firstChild, c.prevButton[0].firstChild];
                $win.bind("resize.iLightBox", function() {
                    var a = getViewport();
                    d.mobileOptimizer && !d.innerToolbar && (c.isMobile = a.width <= c.mobileMaxWidth), c.BODY[c.isMobile ? "addClass" : "removeClass"]("isMobile"), b.repositionPhoto(null), supportTouch && (clearTimeout(c.setTime), c.setTime = setTimeout(function() {
                        var a = getScrollXY().y;
                        window.scrollTo(0, a - 30), window.scrollTo(0, a + 30), window.scrollTo(0, a)
                    }, 2e3)), c.thumbs && b.positionThumbnails()
                }).bind("keydown.iLightBox", function(a) {
                    if (d.controls.keyboard) switch (a.keyCode) {
                        case 13:
                            a.shiftKey && d.keyboard.shift_enter && b.fullScreenAction();
                            break;
                        case 27:
                            d.keyboard.esc && b.closeAction();
                            break;
                        case 37:
                            d.keyboard.left && !c.lockKey && b.moveTo("prev");
                            break;
                        case 38:
                            d.keyboard.up && !c.lockKey && b.moveTo("prev");
                            break;
                        case 39:
                            d.keyboard.right && !c.lockKey && b.moveTo("next");
                            break;
                        case 40:
                            d.keyboard.down && !c.lockKey && b.moveTo("next")
                    }
                }), fullScreenApi.supportsFullScreen && $win.bind(g, function() {
                    b.doFullscreen()
                });
                var j = [d.caption.show + ".iLightBox", d.caption.hide + ".iLightBox", d.social.show + ".iLightBox", d.social.hide + ".iLightBox"].filter(function(a, b, c) {
                        return c.lastIndexOf(a) === b
                    }),
                    k = "";
                $.each(j, function(a, b) {
                    0 != a && (k += " "), k += b
                }), $doc.on(clickEvent, ".ilightbox-overlay", function() {
                    d.overlay.blur && b.closeAction()
                }).on(clickEvent, ".ilightbox-next, .ilightbox-next-button", function() {
                    b.moveTo("next")
                }).on(clickEvent, ".ilightbox-prev, .ilightbox-prev-button", function() {
                    b.moveTo("prev")
                }).on(clickEvent, ".ilightbox-thumbnail", function() {
                    var a = $(this),
                        d = $(".ilightbox-thumbnail", c.thumbnails),
                        e = d.index(a);
                    e != c.current && b.goTo(e)
                }).on(k, ".ilightbox-holder:not(.ilightbox-next, .ilightbox-prev)", function(a) {
                    var b = $("div.ilightbox-caption", c.holder),
                        e = $("div.ilightbox-social", c.holder),
                        f = d.effects.fadeSpeed;
                    c.nextLock || c.prevLock ? (a.type != d.caption.show || b.is(":visible") ? a.type == d.caption.hide && b.is(":visible") && b.fadeOut(f) : b.fadeIn(f), a.type != d.social.show || e.is(":visible") ? a.type == d.social.hide && e.is(":visible") && e.fadeOut(f) : e.fadeIn(f)) : (a.type != d.caption.show || b.is(":visible") ? a.type == d.caption.hide && b.is(":visible") && b.stop().fadeOut(f) : b.stop().fadeIn(f), a.type != d.social.show || e.is(":visible") ? a.type == d.social.hide && e.is(":visible") && e.stop().fadeOut(f) : e.stop().fadeIn(f))
                }).on("mouseenter.iLightBox mouseleave.iLightBox", ".ilightbox-wrapper", function(a) {
                    "mouseenter" == a.type ? c.lockWheel = !0 : c.lockWheel = !1
                }).on(clickEvent, ".ilightbox-toolbar a.ilightbox-close, .ilightbox-toolbar a.ilightbox-fullscreen, .ilightbox-toolbar a.ilightbox-play, .ilightbox-toolbar a.ilightbox-pause", function() {
                    var a = $(this);
                    a.hasClass("fusion-updated") || (a.hasClass("ilightbox-fullscreen") ? b.fullScreenAction() : a.hasClass("ilightbox-play") ? (b.resume(), a.addClass("ilightbox-pause").removeClass("ilightbox-play")) : a.hasClass("ilightbox-pause") ? (b.pause(), a.addClass("ilightbox-play").removeClass("ilightbox-pause")) : b.closeAction(), a.addClass("fusion-updated"), setTimeout(function() {
                        a.removeClass("fusion-updated")
                    }, 100))
                }).on(touchMoveEvent, ".ilightbox-overlay, .ilightbox-thumbnails-container", function(a) {
                    a.preventDefault()
                }), d.controls.arrows && !supportTouch && $doc.on("mousemove.iLightBox", a), d.controls.slideshow && d.slideshow.pauseOnHover && $doc.on("mouseenter.iLightBox mouseleave.iLightBox", ".ilightbox-holder:not(.ilightbox-next, .ilightbox-prev)", function(a) {
                    "mouseenter" == a.type && c.cycleID ? b.pause() : "mouseleave" == a.type && c.isPaused && b.resume()
                });
                var l = $(".ilightbox-overlay, .ilightbox-holder, .ilightbox-thumbnails");
                d.controls.mousewheel && l.on("mousewheel.iLightBox", function(a, d) {
                    c.lockWheel || (a.preventDefault(), d < 0 ? b.moveTo("next") : d > 0 && b.moveTo("prev"))
                }), d.controls.swipe && f.on(touchStartEvent, function(a) {
                    function g(a) {
                        var b = $(this),
                            c = p[a],
                            d = [q.coords[0] - k.coords[0], q.coords[1] - k.coords[1]];
                        b[0].style["horizontal" == e ? "left" : "top"] = ("horizontal" == e ? c.left - d[0] : c.top - d[1]) + "px"
                    }

                    function i(a) {
                        if (q) {
                            var b = a.originalEvent.touches ? a.originalEvent.touches[0] : a;
                            k = {
                                time: (new Date).getTime(),
                                coords: [b.pageX - n, b.pageY - m]
                            }, f.each(g), a.preventDefault()
                        }
                    }

                    function j() {
                        f.each(function() {
                            var a = $(this),
                                b = a.data("offset") || {
                                    top: a.offset().top - m,
                                    left: a.offset().left - n
                                },
                                c = b.top,
                                d = b.left;
                            a.css(transform, gpuAcceleration).stop().animate({
                                top: c,
                                left: d
                            }, 500, "easeOutCirc", function() {
                                a.css(transform, "")
                            })
                        })
                    }
                    if (!(c.nextLock || c.prevLock || 1 == c.total || c.lockSwipe)) {
                        c.BODY.addClass("ilightbox-closedhand");
                        var k, l = a.originalEvent.touches ? a.originalEvent.touches[0] : a,
                            m = $doc.scrollTop(),
                            n = $doc.scrollLeft(),
                            o = [f.eq(0).offset(), f.eq(1).offset(), f.eq(2).offset()],
                            p = [{
                                top: o[0].top - m,
                                left: o[0].left - n
                            }, {
                                top: o[1].top - m,
                                left: o[1].left - n
                            }, {
                                top: o[2].top - m,
                                left: o[2].left - n
                            }],
                            q = {
                                time: (new Date).getTime(),
                                coords: [l.pageX - n, l.pageY - m]
                            };
                        f.bind(touchMoveEvent, i), $doc.one(touchStopEvent, function(a) {
                            f.unbind(touchMoveEvent, i), c.BODY.removeClass("ilightbox-closedhand"), q && k && ("horizontal" == e && k.time - q.time < 1e3 && abs(q.coords[0] - k.coords[0]) > h && abs(q.coords[1] - k.coords[1]) < verticalDistanceThreshold ? q.coords[0] > k.coords[0] ? c.current != c.total - 1 || d.infinite ? (c.isSwipe = !0, b.moveTo("next")) : j() : 0 != c.current || d.infinite ? (c.isSwipe = !0, b.moveTo("prev")) : j() : "vertical" == e && k.time - q.time < 1e3 && abs(q.coords[1] - k.coords[1]) > h && abs(q.coords[0] - k.coords[0]) < verticalDistanceThreshold ? q.coords[1] > k.coords[1] ? c.current != c.total - 1 || d.infinite ? (c.isSwipe = !0, b.moveTo("next")) : j() : 0 != c.current || d.infinite ? (c.isSwipe = !0, b.moveTo("prev")) : j() : j()), q = k = undefined
                        })
                    }
                })
            },
            goTo: function(a) {
                var b = this,
                    c = b.vars,
                    d = b.options,
                    e = a - c.current;
                if (d.infinite && (a == c.total - 1 && 0 == c.current && (e = -1), c.current == c.total - 1 && 0 == a && (e = 1)), 1 == e) b.moveTo("next");
                else if (-1 == e) b.moveTo("prev");
                else {
                    if (c.nextLock || c.prevLock) return !1;
                    "function" == typeof d.callback.onBeforeChange && d.callback.onBeforeChange.call(b, b.ui), d.linkId && (c.hashLock = !0, window.location.hash = d.linkId + "/" + a), b.items[a] && (b.items[a].options.mousewheel ? b.vars.lockWheel = !1 : c.lockWheel = !0, b.items[a].options.swipe ? c.lockSwipe = !1 : c.lockSwipe = !0), $.each([c.holder, c.nextPhoto, c.prevPhoto], function(a, b) {
                        b.css(transform, gpuAcceleration).fadeOut(d.effects.loadedFadeSpeed)
                    }), c.current = a, c.next = a + 1, c.prev = a - 1, b.createUI(), setTimeout(function() {
                        b.generateBoxes()
                    }, d.effects.loadedFadeSpeed + 50), $(".ilightbox-thumbnail", c.thumbnails).removeClass("ilightbox-active").eq(a).addClass("ilightbox-active"), b.positionThumbnails(), d.linkId && setTimeout(function() {
                        c.hashLock = !1
                    }, 55), d.infinite || (c.nextButton.add(c.prevButton).add(c.innerPrevButton).add(c.innerNextButton).removeClass("disabled"), 0 == c.current && c.prevButton.add(c.innerPrevButton).addClass("disabled"), c.current >= c.total - 1 && c.nextButton.add(c.innerNextButton).addClass("disabled")), b.resetCycle(), "function" == typeof d.callback.onAfterChange && d.callback.onAfterChange.call(b, b.ui)
                }
            },
            moveTo: function(a) {
                var b = this,
                    c = b.vars,
                    d = b.options,
                    e = d.path.toLowerCase(),
                    f = getViewport(),
                    g = d.effects.switchSpeed,
                    h = b.vars.holder,
                    i = h.find("iframe").length ? h.find("iframe").attr("src") : "";
                if (i && -1 !== i.indexOf("vimeo.com") && h.find("iframe").attr("src", i), c.nextLock || c.prevLock) return !1;
                var j = "next" == a ? c.next : c.prev;
                if (d.linkId && (c.hashLock = !0, window.location.hash = d.linkId + "/" + j), "next" == a) {
                    if (!b.items[j]) return !1;
                    var k = c.nextPhoto,
                        l = c.holder,
                        m = c.prevPhoto,
                        n = "ilightbox-prev",
                        o = "ilightbox-next"
                } else if ("prev" == a) {
                    if (!b.items[j]) return !1;
                    var k = c.prevPhoto,
                        l = c.holder,
                        m = c.nextPhoto,
                        n = "ilightbox-next",
                        o = "ilightbox-prev"
                }
                "function" == typeof d.callback.onBeforeChange && d.callback.onBeforeChange.call(b, b.ui), "next" == a ? c.nextLock = !0 : c.prevLock = !0;
                var p = $("div.ilightbox-caption", l),
                    q = $("div.ilightbox-social", l);
                if (p.length && p.stop().fadeOut(g, function() {
                        $(this).remove()
                    }), q.length && q.stop().fadeOut(g, function() {
                        $(this).remove()
                    }), b.items[j].caption) {
                    b.setCaption(b.items[j], k);
                    var r = $("div.ilightbox-caption", k),
                        s = parseInt(r.outerHeight() / k.outerHeight() * 100);
                    d.caption.start && s <= 50 && r.fadeIn(g)
                }
                var t = b.items[j].options.social;
                t && (b.setSocial(t, b.items[j].URL, k), d.social.start && $("div.ilightbox-social", k).fadeIn(d.effects.fadeSpeed)), $.each([k, l, m], function(a, b) {
                    b.removeClass("ilightbox-next ilightbox-prev")
                });
                var u = k.data("offset"),
                    v = f.width - d.styles.pageOffsetX,
                    w = f.height - d.styles.pageOffsetY,
                    x = u.newDims.width,
                    y = u.newDims.height,
                    z = u.thumbsOffset,
                    A = u.diff,
                    B = parseInt(w / 2 - y / 2 - A.H - z.H / 2),
                    C = parseInt(v / 2 - x / 2 - A.W - z.W / 2);
                k.css(transform, gpuAcceleration).animate({
                    top: B,
                    left: C,
                    opacity: 1
                }, g, c.isSwipe ? "easeOutCirc" : "easeInOutCirc", function() {
                    k.css(transform, "")
                }), $("div.ilightbox-container", k).animate({
                    width: x,
                    height: y
                }, g, c.isSwipe ? "easeOutCirc" : "easeInOutCirc");
                var D = l.data("offset"),
                    E = D.object;
                A = D.diff, x = D.newDims.width, y = D.newDims.height, x = parseInt(x * d.styles["next" == a ? "prevScale" : "nextScale"]), y = parseInt(y * d.styles["next" == a ? "prevScale" : "nextScale"]), B = "horizontal" == e ? parseInt(w / 2 - E.offsetY - y / 2 - A.H - z.H / 2) : parseInt(w - E.offsetX - A.H - z.H / 2), "prev" == a ? C = "horizontal" == e ? parseInt(v - E.offsetX - A.W - z.W / 2) : parseInt(v / 2 - x / 2 - A.W - E.offsetY - z.W / 2) : (B = "horizontal" == e ? B : parseInt(E.offsetX - A.H - y - z.H / 2), C = "horizontal" == e ? parseInt(E.offsetX - A.W - x - z.W / 2) : parseInt(v / 2 - E.offsetY - x / 2 - A.W - z.W / 2)), $("div.ilightbox-container", l).animate({
                    width: x,
                    height: y
                }, g, c.isSwipe ? "easeOutCirc" : "easeInOutCirc"), l.addClass(n).css(transform, gpuAcceleration).animate({
                    top: B,
                    left: C,
                    opacity: d.styles.prevOpacity
                }, g, c.isSwipe ? "easeOutCirc" : "easeInOutCirc", function() {
                    l.css(transform, ""), $(".ilightbox-thumbnail", c.thumbnails).removeClass("ilightbox-active").eq(j).addClass("ilightbox-active"), b.positionThumbnails(), b.items[j] && (b.items[j].options.mousewheel ? c.lockWheel = !1 : c.lockWheel = !0, b.items[j].options.swipe ? c.lockSwipe = !1 : c.lockSwipe = !0), c.isSwipe = !1, "next" == a ? (c.nextPhoto = m, c.prevPhoto = l, c.holder = k, c.nextPhoto.hide(), c.next = c.next + 1, c.prev = c.current, c.current = c.current + 1, d.infinite && (c.current > c.total - 1 && (c.current = 0), c.current == c.total - 1 && (c.next = 0), 0 == c.current && (c.prev = c.total - 1)), b.createUI(), b.items[c.next] ? b.loadContent(b.items[c.next], "next") : c.nextLock = !1) : (c.prevPhoto = m, c.nextPhoto = l, c.holder = k, c.prevPhoto.hide(), c.next = c.current, c.current = c.prev, c.prev = c.current - 1, d.infinite && (c.current == c.total - 1 && (c.next = 0), 0 == c.current && (c.prev = c.total - 1)), b.createUI(), b.items[c.prev] ? b.loadContent(b.items[c.prev], "prev") : c.prevLock = !1), d.linkId && setTimeout(function() {
                        c.hashLock = !1
                    }, 55), d.infinite || (c.nextButton.add(c.prevButton).add(c.innerPrevButton).add(c.innerNextButton).removeClass("disabled"), 0 == c.current && c.prevButton.add(c.innerPrevButton).addClass("disabled"), c.current >= c.total - 1 && c.nextButton.add(c.innerNextButton).addClass("disabled")), b.repositionPhoto(), b.resetCycle(), "function" == typeof d.callback.onAfterChange && d.callback.onAfterChange.call(b, b.ui)
                }), B = "horizontal" == e ? getPixel(m, "top") : "next" == a ? parseInt(-w / 2 - m.outerHeight()) : parseInt(2 * B), C = "horizontal" == e ? "next" == a ? parseInt(-v / 2 - m.outerWidth()) : parseInt(2 * C) : getPixel(m, "left"), m.css(transform, gpuAcceleration).animate({
                    top: B,
                    left: C,
                    opacity: d.styles.nextOpacity
                }, g, c.isSwipe ? "easeOutCirc" : "easeInOutCirc", function() {
                    m.css(transform, "")
                }).addClass(o)
            },
            setCaption: function(a, b) {
                var c = $('<div class="ilightbox-caption"></div>');
                a.caption && (c.html(a.caption), $("div.ilightbox-container", b).append(c))
            },
            normalizeSocial: function(a, b) {
                var c = this,
                    d = (c.vars, c.options),
                    e = window.location.href;
                return $.each(a, function(c, f) {
                    if (!f) return !0;
                    var g, h, i = c.toLowerCase();
                    switch (i) {
                        case "facebook":
                            g = "http://www.facebook.com/share.php?v=4&src=bm&u={URL}", h = "Share on Facebook";
                            break;
                        case "twitter":
                            g = "http://twitter.com/home?status={URL}", h = "Share on Twitter";
                            break;
                        case "googleplus":
                            g = "https://plus.google.com/share?url={URL}", h = "Share on Google+";
                            break;
                        case "delicious":
                            g = "http://delicious.com/post?url={URL}", h = "Share on Delicious";
                            break;
                        case "digg":
                            g = "http://digg.com/submit?phase=2&url={URL}", h = "Share on Digg";
                            break;
                        case "reddit":
                            g = "http://reddit.com/submit?url={URL}", h = "Share on reddit"
                    }
                    a[c] = {
                        URL: f.URL && absolutizeURI(e, f.URL) || d.linkId && window.location.href || "string" != typeof b && e || b && absolutizeURI(e, b) || e,
                        source: f.source || g || f.URL && absolutizeURI(e, f.URL) || b && absolutizeURI(e, b),
                        text: f.text || h || "Share on " + c,
                        width: void 0 === f.width || isNaN(f.width) ? 640 : parseInt(f.width),
                        height: f.height || 360
                    }
                }), a
            },
            setSocial: function(a, b, c) {
                var d = this,
                    e = $('<div class="ilightbox-social"></div>'),
                    f = "<ul>";
                a = d.normalizeSocial(a, b), $.each(a, function(a, b) {
                    var c = (a.toLowerCase(), b.source.replace(/\{URL\}/g, encodeURIComponent(b.URL).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/%20/g, "+")));
                    f += '<li class="' + a + '"><a href="' + c + '" onclick="javascript:window.open(this.href' + (b.width <= 0 || b.height <= 0 ? "" : ", '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=" + b.height + ",width=" + b.width + ",left=40,top=40'") + ');return false;" title="' + b.text + '" target="_blank"></a></li>'
                }), f += "</ul>", e.html(f), $("div.ilightbox-container", c).append(e)
            },
            fullScreenAction: function() {
                var a = this;
                a.vars;
                fullScreenApi.supportsFullScreen ? fullScreenApi.isFullScreen() ? fullScreenApi.cancelFullScreen(document.documentElement) : fullScreenApi.requestFullScreen(document.documentElement) : a.doFullscreen()
            },
            doFullscreen: function() {
                var a = this,
                    b = a.vars,
                    c = getViewport(),
                    d = a.options;
                if (d.fullAlone) {
                    var e = b.holder,
                        f = a.items[b.current],
                        g = c.width,
                        h = c.height,
                        i = [e, b.nextPhoto, b.prevPhoto, b.nextButton, b.prevButton, b.overlay, b.toolbar, b.thumbnails, b.loader],
                        j = [b.loader, b.thumbnails];
                    if (b.isInFullScreen) b.isInFullScreen = b.lockKey = b.lockWheel = b.lockSwipe = !1, b.overlay.css({
                        opacity: a.options.overlay.opacity
                    }), $.each(j, function(a, b) {
                        b.show()
                    }), b.fullScreenButton.attr("title", d.text.enterFullscreen), e.data({
                        naturalWidth: e.data("naturalWidthOld"),
                        naturalHeight: e.data("naturalHeightOld"),
                        naturalWidthOld: null,
                        naturalHeightOld: null
                    }), $.each(i, function(a, b) {
                        b.removeClass("ilightbox-fullscreen")
                    }), "function" == typeof d.callback.onExitFullScreen && d.callback.onExitFullScreen.call(a, a.ui);
                    else {
                        if (b.isInFullScreen = b.lockKey = b.lockWheel = b.lockSwipe = !0, b.overlay.css({
                                opacity: 1
                            }), $.each(j, function(a, b) {
                                b.hide()
                            }), b.fullScreenButton.attr("title", d.text.exitFullscreen), -1 != d.fullStretchTypes.indexOf(f.type)) e.data({
                            naturalWidthOld: e.data("naturalWidth"),
                            naturalHeightOld: e.data("naturalHeight"),
                            naturalWidth: g,
                            naturalHeight: h
                        });
                        else {
                            var c = f.options.fullViewPort || d.fullViewPort || "",
                                k = g,
                                l = h,
                                m = e.data("naturalWidth"),
                                n = e.data("naturalHeight");
                            if ("fill" == c.toLowerCase())(l = k / m * n) < h && (k = h / n * m, l = h);
                            else if ("fit" == c.toLowerCase()) {
                                var o = a.getNewDimenstions(k, l, m, n, !0);
                                k = o.width, l = o.height
                            } else if ("stretch" == c.toLowerCase()) k = k, l = l;
                            else {
                                var p = m > k || n > l,
                                    o = a.getNewDimenstions(k, l, m, n, p);
                                k = o.width, l = o.height
                            }
                            e.data({
                                naturalWidthOld: e.data("naturalWidth"),
                                naturalHeightOld: e.data("naturalHeight"),
                                naturalWidth: k,
                                naturalHeight: l
                            })
                        }
                        $.each(i, function(a, b) {
                            b.addClass("ilightbox-fullscreen")
                        }), "function" == typeof d.callback.onEnterFullScreen && d.callback.onEnterFullScreen.call(a, a.ui)
                    }
                } else b.isInFullScreen ? b.isInFullScreen = !1 : b.isInFullScreen = !0;
                a.repositionPhoto(!0)
            },
            closeAction: function() {
                var a = this,
                    b = a.vars,
                    c = a.options;
                $win.unbind(".iLightBox"), $doc.off(".iLightBox"), $doc.off(clickEvent, ".ilightbox-overlay"), $doc.off(clickEvent, ".ilightbox-next, .ilightbox-next-button"), $doc.off(clickEvent, ".ilightbox-prev, .ilightbox-prev-button"), $doc.off(clickEvent, ".ilightbox-thumbnail"), $doc.off(clickEvent, ".ilightbox-toolbar a.ilightbox-close, .ilightbox-toolbar a.ilightbox-fullscreen, .ilightbox-toolbar a.ilightbox-play, .ilightbox-toolbar a.ilightbox-pause"), b.isInFullScreen && fullScreenApi.cancelFullScreen(document.documentElement), $(".ilightbox-overlay, .ilightbox-holder, .ilightbox-thumbnails").off(".iLightBox"), c.hide.effect ? b.overlay.stop().fadeOut(c.hide.speed, function() {
                    b.overlay.remove(), b.BODY.removeClass("ilightbox-noscroll").off(".iLightBox")
                }) : (b.overlay.remove(), b.BODY.removeClass("ilightbox-noscroll").off(".iLightBox"));
                var d = [b.toolbar, b.holder, b.nextPhoto, b.prevPhoto, b.nextButton, b.prevButton, b.loader, b.thumbnails];
                $.each(d, function(a, b) {
                    b.removeAttr("style").remove()
                }), b.prevButton.removeClass("disabled"), b.nextButton.removeClass("disabled"), b.dontGenerateThumbs = b.isInFullScreen = !1, window.iLightBox = null, c.linkId && (b.hashLock = !0, removeHash(), setTimeout(function() {
                    b.hashLock = !1
                }, 55)), "function" == typeof c.callback.onHide && c.callback.onHide.call(a, a.ui)
            },
            repositionPhoto: function() {
                var a = this,
                    b = a.vars,
                    c = a.options,
                    d = c.path.toLowerCase(),
                    e = getViewport(),
                    f = e.width,
                    g = e.height,
                    h = b.isInFullScreen && c.fullAlone || b.isMobile ? 0 : "horizontal" == d ? 0 : b.thumbnails.outerWidth(),
                    i = b.isMobile ? b.toolbar.outerHeight() : b.isInFullScreen && c.fullAlone ? 0 : "horizontal" == d ? b.thumbnails.outerHeight() : 0,
                    j = b.isInFullScreen && c.fullAlone ? f : f - c.styles.pageOffsetX,
                    k = b.isInFullScreen && c.fullAlone ? g : g - c.styles.pageOffsetY,
                    l = "horizontal" == d ? parseInt(a.items[b.next] || a.items[b.prev] ? 2 * (c.styles.nextOffsetX + c.styles.prevOffsetX) : j / 10 <= 30 ? 30 : j / 10) : parseInt(j / 10 <= 30 ? 30 : j / 10) + h,
                    m = "horizontal" == d ? parseInt(k / 10 <= 30 ? 30 : k / 10) + i : parseInt(a.items[b.next] || a.items[b.prev] ? 2 * (c.styles.nextOffsetX + c.styles.prevOffsetX) : k / 10 <= 30 ? 30 : k / 10),
                    n = {
                        type: "current",
                        width: j,
                        height: k,
                        item: a.items[b.current],
                        offsetW: l,
                        offsetH: m,
                        thumbsOffsetW: h,
                        thumbsOffsetH: i,
                        animate: arguments.length,
                        holder: b.holder
                    };
                a.repositionEl(n), a.items[b.next] && (n = $.extend(n, {
                    type: "next",
                    item: a.items[b.next],
                    offsetX: c.styles.nextOffsetX,
                    offsetY: c.styles.nextOffsetY,
                    holder: b.nextPhoto
                }), a.repositionEl(n)), a.items[b.prev] && (n = $.extend(n, {
                    type: "prev",
                    item: a.items[b.prev],
                    offsetX: c.styles.prevOffsetX,
                    offsetY: c.styles.prevOffsetY,
                    holder: b.prevPhoto
                }), a.repositionEl(n));
                var o = "horizontal" == d ? {
                    left: parseInt(j / 2 - b.loader.outerWidth() / 2)
                } : {
                    top: parseInt(k / 2 - b.loader.outerHeight() / 2)
                };
                b.loader.css(o)
            },
            repositionEl: function(a) {
                var b = this,
                    c = b.vars,
                    d = b.options,
                    e = d.path.toLowerCase(),
                    f = "current" == a.type && c.isInFullScreen && d.fullAlone ? a.width : a.width - a.offsetW,
                    g = "current" == a.type && c.isInFullScreen && d.fullAlone ? a.height : a.height - a.offsetH,
                    h = a.item,
                    i = a.item.options,
                    j = a.holder,
                    k = a.offsetX || 0,
                    l = a.offsetY || 0,
                    m = a.thumbsOffsetW,
                    n = a.thumbsOffsetH;
                "current" == a.type ? ("number" == typeof i.width && i.width && (f = c.isInFullScreen && d.fullAlone && (-1 != d.fullStretchTypes.indexOf(h.type) || i.fullViewPort || d.fullViewPort) ? f : i.width > f ? f : i.width), "number" == typeof i.height && i.height && (g = c.isInFullScreen && d.fullAlone && (-1 != d.fullStretchTypes.indexOf(h.type) || i.fullViewPort || d.fullViewPort) ? g : i.height > g ? g : i.height)) : ("number" == typeof i.width && i.width && (f = i.width > f ? f : i.width), "number" == typeof i.height && i.height && (g = i.height > g ? g : i.height)), g = parseInt(g - $(".ilightbox-inner-toolbar", j).outerHeight());
                var o = "string" == typeof i.width && -1 != i.width.indexOf("%") ? percentToValue(parseInt(i.width.replace("%", "")), a.width) : j.data("naturalWidth"),
                    p = "string" == typeof i.height && -1 != i.height.indexOf("%") ? percentToValue(parseInt(i.height.replace("%", "")), a.height) : j.data("naturalHeight"),
                    q = "string" == typeof i.width && -1 != i.width.indexOf("%") || "string" == typeof i.height && -1 != i.height.indexOf("%") ? {
                        width: o,
                        height: p
                    } : b.getNewDimenstions(f, g, o, p),
                    r = $.extend({}, q, {});
                "prev" == a.type || "next" == a.type ? (o = parseInt(q.width * ("next" == a.type ? d.styles.nextScale : d.styles.prevScale)), p = parseInt(q.height * ("next" == a.type ? d.styles.nextScale : d.styles.prevScale))) : (o = q.width, p = q.height);
                var s = parseInt((getPixel(j, "padding-left") + getPixel(j, "padding-right") + getPixel(j, "border-left-width") + getPixel(j, "border-right-width")) / 2),
                    t = parseInt((getPixel(j, "padding-top") + getPixel(j, "padding-bottom") + getPixel(j, "border-top-width") + getPixel(j, "border-bottom-width") + ($(".ilightbox-inner-toolbar", j).outerHeight() || 0)) / 2);
                switch (a.type) {
                    case "current":
                        var u = parseInt(a.height / 2 - p / 2 - t - n / 2),
                            v = parseInt(a.width / 2 - o / 2 - s - m / 2);
                        break;
                    case "next":
                        var u = "horizontal" == e ? parseInt(a.height / 2 - l - p / 2 - t - n / 2) : parseInt(a.height - k - t - n / 2),
                            v = "horizontal" == e ? parseInt(a.width - k - s - m / 2) : parseInt(a.width / 2 - o / 2 - s - l - m / 2);
                        break;
                    case "prev":
                        var u = "horizontal" == e ? parseInt(a.height / 2 - l - p / 2 - t - n / 2) : parseInt(k - t - p - n / 2),
                            v = "horizontal" == e ? parseInt(k - s - o - m / 2) : parseInt(a.width / 2 - l - o / 2 - s - m / 2)
                }
                j.data("offset", {
                    top: u,
                    left: v,
                    newDims: r,
                    diff: {
                        W: s,
                        H: t
                    },
                    thumbsOffset: {
                        W: m,
                        H: n
                    },
                    object: a
                }), a.animate > 0 && d.effects.reposition ? (j.css(transform, gpuAcceleration).stop().animate({
                    top: u,
                    left: v
                }, d.effects.repositionSpeed, "easeOutCirc", function() {
                    j.css(transform, "")
                }), $("div.ilightbox-container", j).stop().animate({
                    width: o,
                    height: p
                }, d.effects.repositionSpeed, "easeOutCirc"), $("div.ilightbox-inner-toolbar", j).stop().animate({
                    width: o
                }, d.effects.repositionSpeed, "easeOutCirc", function() {
                    $(this).css("overflow", "visible")
                })) : (j.css({
                    top: u,
                    left: v
                }), $("div.ilightbox-container", j).css({
                    width: o,
                    height: p
                }), $("div.ilightbox-inner-toolbar", j).css({
                    width: o
                }))
            },
            resume: function(a) {
                var b = this,
                    c = b.vars,
                    d = b.options;
                !d.slideshow.pauseTime || d.controls.slideshow && c.total <= 1 || a < c.isPaused || (c.isPaused = 0, c.cycleID && (c.cycleID = clearTimeout(c.cycleID)), c.cycleID = setTimeout(function() {
                    c.current == c.total - 1 ? b.goTo(0) : b.moveTo("next")
                }, d.slideshow.pauseTime))
            },
            pause: function(a) {
                var b = this,
                    c = b.vars;
                b.options;
                a < c.isPaused || (c.isPaused = a || 100, c.cycleID && (c.cycleID = clearTimeout(c.cycleID)))
            },
            resetCycle: function() {
                var a = this,
                    b = a.vars;
                a.options.controls.slideshow && b.cycleID && !b.isPaused && a.resume()
            },
            getNewDimenstions: function(a, b, c, d, e) {
                var f = this;
                return factor = a ? b ? min(a / c, b / d) : a / c : b / d, e || (factor > f.options.maxScale ? factor = f.options.maxScale : factor < f.options.minScale && (factor = f.options.minScale)), {
                    width: f.options.keepAspectRatio ? round(c * factor) : a,
                    height: f.options.keepAspectRatio ? round(d * factor) : b,
                    ratio: factor
                }
            },
            setOption: function(a) {
                var b = this;
                b.options = $.extend(!0, b.options, a || {}), b.refresh()
            },
            availPlugins: function() {
                var a = this,
                    b = document.createElement("video");
                a.plugins = {
                    flash: !isMobile,
                    quicktime: parseInt(PluginDetect.getVersion("QuickTime")) >= 0,
                    html5H264: !(!b.canPlayType || !b.canPlayType("video/mp4").replace(/no/, "")),
                    html5WebM: !(!b.canPlayType || !b.canPlayType("video/webm").replace(/no/, "")),
                    html5Vorbis: !(!b.canPlayType || !b.canPlayType("video/ogg").replace(/no/, "")),
                    html5QuickTime: !(!b.canPlayType || !b.canPlayType("video/quicktime").replace(/no/, ""))
                }
            },
            addContent: function(a, b) {
                var c, d = this;
                switch (b.type) {
                    case "video":
                        var e = !1,
                            f = b.videoType,
                            g = b.options.html5video;
                        ("video/mp4" == f || "mp4" == b.ext || "m4v" == b.ext || g.h264) && d.plugins.html5H264 ? (b.ext = "mp4", b.URL = g.h264 || b.URL) : g.webm && d.plugins.html5WebM ? (b.ext = "webm", b.URL = g.webm || b.URL) : g.ogg && d.plugins.html5Vorbis && (b.ext = "ogv", b.URL = g.ogg || b.URL), !d.plugins.html5H264 || "video/mp4" != f && "mp4" != b.ext && "m4v" != b.ext ? !d.plugins.html5WebM || "video/webm" != f && "webm" != b.ext ? !d.plugins.html5Vorbis || "video/ogg" != f && "ogv" != b.ext ? !d.plugins.html5QuickTime || "video/quicktime" != f && "mov" != b.ext && "qt" != b.ext || (e = !0, f = "video/quicktime") : (e = !0, f = "video/ogg") : (e = !0, f = "video/webm") : (e = !0, f = "video/mp4"), e ? c = $("<video />", {
                            width: "100%",
                            height: "100%",
                            preload: g.preload,
                            autoplay: g.autoplay,
                            poster: g.poster,
                            controls: g.controls
                        }).append($("<source />", {
                            src: b.URL,
                            type: f
                        })) : d.plugins.quicktime ? (c = $("<object />", {
                            type: "video/quicktime",
                            pluginspage: pluginspages.quicktime
                        }).attr({
                            data: b.URL,
                            width: "100%",
                            height: "100%"
                        }).append($("<param />", {
                            name: "src",
                            value: b.URL
                        })).append($("<param />", {
                            name: "autoplay",
                            value: "false"
                        })).append($("<param />", {
                            name: "loop",
                            value: "false"
                        })).append($("<param />", {
                            name: "scale",
                            value: "tofit"
                        })), browser.msie && (c = QT_GenerateOBJECTText(b.URL, "100%", "100%", "", "SCALE", "tofit", "AUTOPLAY", "false", "LOOP", "false"))) : c = $("<span />", {
                            class: "ilightbox-alert",
                            html: d.options.errors.missingPlugin.replace("{pluginspage}", pluginspages.quicktime).replace("{type}", "QuickTime")
                        });
                        break;
                    case "flash":
                        if (d.plugins.flash) {
                            var h = "",
                                i = 0;
                            b.options.flashvars ? $.each(b.options.flashvars, function(a, b) {
                                0 != i && (h += "&"), h += a + "=" + encodeURIComponent(b), i++
                            }) : h = null, c = $("<embed />").attr({
                                type: "application/x-shockwave-flash",
                                src: b.URL,
                                width: "number" == typeof b.options.width && b.options.width && "1" == d.options.minScale && "1" == d.options.maxScale ? b.options.width : "100%",
                                height: "number" == typeof b.options.height && b.options.height && "1" == d.options.minScale && "1" == d.options.maxScale ? b.options.height : "100%",
                                quality: "high",
                                bgcolor: "#000000",
                                play: "true",
                                loop: "true",
                                menu: "true",
                                wmode: "transparent",
                                scale: "showall",
                                allowScriptAccess: "always",
                                allowFullScreen: "true",
                                flashvars: h,
                                fullscreen: "yes"
                            })
                        } else c = $("<span />", {
                            class: "ilightbox-alert",
                            html: d.options.errors.missingPlugin.replace("{pluginspage}", pluginspages.flash).replace("{type}", "Adobe Flash player")
                        });
                        break;
                    case "iframe":
                        var j = b.URL.substring(b.URL.indexOf("?") + 1).split("&"),
                            k = "?";
                        if (-1 != b.URL.indexOf("vimeo.com")) {
                            var l = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/,
                                m = b.URL.match(l);
                            if (m) {
                                k = "?title=0&amp;byline=0&amp;portrait=0";
                                for (var n = 0; n < j.length; ++n) {
                                    var o = j[n].split("=");
                                    1 < o[0].length && 2 === o.length && -1 === k.indexOf(o[0]) && (k += "&" + o[0] + "=" + decodeURIComponent(o[1].replace(/\+/g, " ")))
                                }
                                var p = "//player.vimeo.com/video/" + m[3] + k
                            } else var p = b.URL
                        } else {
                            var l = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,
                                m = b.URL.match(l);
                            if (m) {
                                k = "?enablejsapi=1";
                                for (var n = 0; n < j.length; ++n) {
                                    var o = j[n].split("=");
                                    1 < o[0].length && 2 === o.length && -1 === k.indexOf(o[0]) && (k += "&" + o[0] + "=" + decodeURIComponent(o[1].replace(/\+/g, " ")))
                                }
                                var p = "//www.youtube.com/embed/" + m[7] + k
                            } else var p = b.URL
                        }
                        c = $("<iframe />").attr({
                            width: "number" == typeof b.options.width && b.options.width && "1" == d.options.minScale && "1" == d.options.maxScale ? b.options.width : "100%",
                            height: "number" == typeof b.options.height && b.options.height && "1" == d.options.minScale && "1" == d.options.maxScale ? b.options.height : "100%",
                            src: p,
                            frameborder: 0,
                            hspace: 0,
                            vspace: 0,
                            scrolling: supportTouch ? "auto" : "scroll",
                            webkitAllowFullScreen: "",
                            mozallowfullscreen: "",
                            allowFullScreen: ""
                        });
                        break;
                    case "inline":
                        c = $('<div class="ilightbox-wrapper"></div>').html($(b.URL).clone(!0));
                        break;
                    case "html":
                        var c, q = b.URL;
                        if (q[0].nodeName) c = $('<div class="ilightbox-wrapper"></div>').html(q);
                        else {
                            var r = $(b.URL),
                                s = r.selector ? $("<div>" + r + "</div>") : r;
                            c = $('<div class="ilightbox-wrapper"></div>').html(s)
                        }
                }
                return $("div.ilightbox-container", a).empty().html(c), "video" === c[0].tagName.toLowerCase() && browser.webkit && setTimeout(function() {
                    var a = c[0].currentSrc + "?" + floor(3e4 * random());
                    c[0].currentSrc = a, c[0].src = a
                }), c
            },
            ogpRecognition: function(a, b) {
                var c = this,
                    d = a.URL;
                c.showLoader(), doAjax(d, function(a) {
                    if (c.hideLoader(), a) {
                        var d = new Object;
                        if (d.length = !1, d.url = a.url, 200 == a.status) {
                            for (var e = a.results, f = e.type, g = e.source, h = e.url.substring(e.url.indexOf("?") + 1).split("&"), i = g.src, j = 0; j < h.length; ++j) - 1 === i.indexOf(h[j]) && (i += "&" + h[j]);
                            d.source = i, d.width = g.width && parseInt(g.width) || 0, d.height = g.height && parseInt(g.height) || 0, d.type = f, d.thumbnail = g.thumbnail || e.images[0], d.html5video = e.html5video || {}, d.length = !0, "application/x-shockwave-flash" == g.type ? d.type = "flash" : -1 != g.type.indexOf("video/") ? d.type = "video" : -1 != g.type.indexOf("/html") ? d.type = "iframe" : -1 != g.type.indexOf("image/") && (d.type = "image")
                        } else if (void 0 !== a.response) throw a.response;
                        b.call(this, !!d.length && d)
                    }
                })
            },
            hashChangeHandler: function(a) {
                var b = this,
                    c = b.vars,
                    d = b.options,
                    e = a || window.location.href,
                    f = parseURI(e).hash,
                    g = f.split("/"),
                    h = g[1];
                if (!(c.hashLock || "#" + d.linkId != g[0] && f.length > 1))
                    if (h) {
                        var i = g[1] || 0;
                        if (b.items[i]) {
                            var j = $(".ilightbox-overlay");
                            j.length && j.attr("linkid") == d.linkId ? b.goTo(i) : b.itemsObject[i].trigger(supportTouch ? "click itap" : "click")
                        } else {
                            var j = $(".ilightbox-overlay");
                            j.length && b.closeAction()
                        }
                    } else {
                        var j = $(".ilightbox-overlay");
                        j.length && b.closeAction()
                    }
            }
        }, $.fn.iLightBox = function() {
            var a = arguments,
                b = $.isPlainObject(a[0]) ? a[0] : a[1],
                c = $.isArray(a[0]) || "string" == typeof a[0] ? a[0] : a[1];
            b || (b = {});
            var d = $.extend(!0, {
                    attr: "href",
                    path: "vertical",
                    skin: "dark",
                    linkId: !1,
                    infinite: !1,
                    startFrom: 0,
                    randomStart: !1,
                    keepAspectRatio: !0,
                    maxScale: 1,
                    minScale: .2,
                    innerToolbar: !1,
                    smartRecognition: !1,
                    mobileOptimizer: !0,
                    fullAlone: !0,
                    fullViewPort: null,
                    fullStretchTypes: "flash, video",
                    overlay: {
                        blur: !0,
                        opacity: .85
                    },
                    controls: {
                        arrows: !1,
                        slideshow: !1,
                        toolbar: !0,
                        fullscreen: !0,
                        thumbnail: !0,
                        keyboard: !0,
                        mousewheel: !0,
                        swipe: !0
                    },
                    keyboard: {
                        left: !0,
                        right: !0,
                        up: !0,
                        down: !0,
                        esc: !0,
                        shift_enter: !0
                    },
                    show: {
                        effect: !0,
                        speed: 300,
                        title: !0
                    },
                    hide: {
                        effect: !0,
                        speed: 300
                    },
                    caption: {
                        start: !0,
                        show: "mouseenter",
                        hide: "mouseleave"
                    },
                    social: {
                        start: !0,
                        show: "mouseenter",
                        hide: "mouseleave",
                        buttons: !1
                    },
                    styles: {
                        pageOffsetX: 0,
                        pageOffsetY: 0,
                        nextOffsetX: 45,
                        nextOffsetY: 0,
                        nextOpacity: 1,
                        nextScale: 1,
                        prevOffsetX: 45,
                        prevOffsetY: 0,
                        prevOpacity: 1,
                        prevScale: 1
                    },
                    thumbnails: {
                        maxWidth: 120,
                        maxHeight: 80,
                        normalOpacity: 1,
                        activeOpacity: .6
                    },
                    effects: {
                        reposition: !0,
                        repositionSpeed: 200,
                        switchSpeed: 500,
                        loadedFadeSpeed: 180,
                        fadeSpeed: 200
                    },
                    slideshow: {
                        pauseTime: 5e3,
                        pauseOnHover: !1,
                        startPaused: !0
                    },
                    text: {
                        close: "Press Esc to close",
                        enterFullscreen: "Enter Fullscreen (Shift+Enter)",
                        exitFullscreen: "Exit Fullscreen (Shift+Enter)",
                        slideShow: "Slideshow",
                        next: "Next",
                        previous: "Previous"
                    },
                    errors: {
                        loadImage: "An error occurred when trying to load photo.",
                        loadContents: "An error occurred when trying to load contents.",
                        missingPlugin: "The content your are attempting to view requires the <a href='{pluginspage}' target='_blank'>{type} plugin</a>."
                    },
                    ajaxSetup: {
                        url: "",
                        beforeSend: function(a, b) {},
                        cache: !1,
                        complete: function(a, b) {},
                        crossDomain: !1,
                        error: function(a, b, c) {},
                        success: function(a, b, c) {},
                        global: !0,
                        ifModified: !1,
                        username: null,
                        password: null,
                        type: "GET"
                    },
                    callback: {}
                }, b),
                e = !(!$.isArray(c) && "string" != typeof c);
            if (c = $.isArray(c) ? c : new Array, "string" == typeof a[0] && (c[0] = a[0]), version_compare($.fn.jquery, "1.8", ">=")) {
                var f = new iLightBox($(this), d, c, e);
                return {
                    close: function() {
                        f.closeAction()
                    },
                    fullscreen: function() {
                        f.fullScreenAction()
                    },
                    moveNext: function() {
                        f.moveTo("next")
                    },
                    movePrev: function() {
                        f.moveTo("prev")
                    },
                    goTo: function(a) {
                        f.goTo(a)
                    },
                    refresh: function() {
                        f.refresh()
                    },
                    reposition: function() {
                        arguments.length > 0 ? f.repositionPhoto(!0) : f.repositionPhoto()
                    },
                    setOption: function(a) {
                        f.setOption(a)
                    },
                    destroy: function() {
                        f.closeAction(), f.dispatchItemsEvents()
                    }
                }
            }
            throw "The jQuery version that was loaded is too old. iLightBox requires jQuery 1.8+"
        }, $.iLightBox = function() {
            return $.fn.iLightBox(arguments[0], arguments[1])
        }, $.extend($.easing, {
            easeInCirc: function(a, b, c, d, e) {
                return -d * (sqrt(1 - (b /= e) * b) - 1) + c
            },
            easeOutCirc: function(a, b, c, d, e) {
                return d * sqrt(1 - (b = b / e - 1) * b) + c
            },
            easeInOutCirc: function(a, b, c, d, e) {
                return (b /= e / 2) < 1 ? -d / 2 * (sqrt(1 - b * b) - 1) + c : d / 2 * (sqrt(1 - (b -= 2) * b) + 1) + c
            }
        }),
        function() {
            $.each("touchstart touchmove touchend tap taphold swipeleft swiperight scrollstart scrollstop".split(" "), function(a, b) {
                $.fn[b] = function(a) {
                    return a ? this.bind(b, a) : this.trigger(b)
                }, $.attrFn && ($.attrFn[b] = !0)
            });
            var a = {
                startEvent: "touchstart.iTap",
                endEvent: "touchend.iTap"
            };
            $.event.special.itap = {
                setup: function() {
                    var b, c, d = this,
                        e = $(this);
                    e.bind(a.startEvent, function(f) {
                        b = getScrollXY(), e.one(a.endEvent, function(a) {
                            c = getScrollXY();
                            var e = a || window.event;
                            a = $.event.fix(e), a.type = "itap", b && c && b.x == c.x && b.y == c.y && ($.event.dispatch || $.event.handle).call(d, a), b = c = undefined
                        })
                    })
                },
                teardown: function() {
                    $(this).unbind(a.startEvent)
                }
            }
        }(),
        function() {
            if (fullScreenApi = {
                    supportsFullScreen: !1,
                    isFullScreen: function() {
                        return !1
                    },
                    requestFullScreen: function() {},
                    cancelFullScreen: function() {},
                    fullScreenEventName: "",
                    prefix: ""
                }, browserPrefixes = "webkit moz o ms khtml".split(" "), void 0 !== document.cancelFullScreen) fullScreenApi.supportsFullScreen = !0;
            else
                for (var a = 0, b = browserPrefixes.length; a < b; a++)
                    if (fullScreenApi.prefix = browserPrefixes[a], void 0 !== document[fullScreenApi.prefix + "CancelFullScreen"]) {
                        fullScreenApi.supportsFullScreen = !0;
                        break
                    }
            fullScreenApi.supportsFullScreen && (fullScreenApi.fullScreenEventName = fullScreenApi.prefix + "fullscreenchange", fullScreenApi.isFullScreen = function() {
                switch (this.prefix) {
                    case "":
                        return document.fullScreen;
                    case "webkit":
                        return document.webkitIsFullScreen;
                    default:
                        return document[this.prefix + "FullScreen"]
                }
            }, fullScreenApi.requestFullScreen = function(a) {
                return "" === this.prefix ? a.requestFullScreen() : a[this.prefix + "RequestFullScreen"]()
            }, fullScreenApi.cancelFullScreen = function(a) {
                return "" === this.prefix ? document.cancelFullScreen() : document[this.prefix + "CancelFullScreen"]()
            })
        }(),
        function() {
            var a = function(a) {
                a = a.toLowerCase();
                var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
                return {
                    browser: b[1] || "",
                    version: b[2] || "0"
                }
            }(navigator.userAgent);
            browser = {}, a.browser && (browser[a.browser] = !0, browser.version = a.version), browser.chrome ? browser.webkit = !0 : browser.webkit && (browser.safari = !0)
        }(),
        function() {
            function a(a) {
                for (var d = 0, e = b.length; d < e; d++) {
                    var f = b[d] ? b[d] + a.charAt(0).toUpperCase() + a.slice(1) : a;
                    if (c.style[f] !== undefined) return f
                }
            }
            var b = ["", "webkit", "moz", "ms", "o"],
                c = document.createElement("div");
            transform = a("transform") || "", gpuAcceleration = a("perspective") ? "translateZ(0) " : ""
        }();
    var PluginDetect = {
        version: "0.7.9",
        name: "PluginDetect",
        handler: function(a, b, c) {
            return function() {
                a(b, c)
            }
        },
        openTag: "<",
        isDefined: function(a) {
            return void 0 !== a
        },
        isArray: function(a) {
            return /array/i.test(Object.prototype.toString.call(a))
        },
        isFunc: function(a) {
            return "function" == typeof a
        },
        isString: function(a) {
            return "string" == typeof a
        },
        isNum: function(a) {
            return "number" == typeof a
        },
        isStrNum: function(a) {
            return "string" == typeof a && /\d/.test(a)
        },
        getNumRegx: /[\d][\d\.\_,-]*/,
        splitNumRegx: /[\.\_,-]/g,
        getNum: function(a, b) {
            var c = this,
                d = c.isStrNum(a) ? (c.isDefined(b) ? new RegExp(b) : c.getNumRegx).exec(a) : null;
            return d ? d[0] : null
        },
        compareNums: function(a, b, c) {
            var d, e, f, g = this,
                h = parseInt;
            if (g.isStrNum(a) && g.isStrNum(b)) {
                if (g.isDefined(c) && c.compareNums) return c.compareNums(a, b);
                for (d = a.split(g.splitNumRegx), e = b.split(g.splitNumRegx), f = 0; f < min(d.length, e.length); f++) {
                    if (h(d[f], 10) > h(e[f], 10)) return 1;
                    if (h(d[f], 10) < h(e[f], 10)) return -1
                }
            }
            return 0
        },
        formatNum: function(a, b) {
            var c, d, e = this;
            if (!e.isStrNum(a)) return null;
            for (e.isNum(b) || (b = 4), b--, d = a.replace(/\s/g, "").split(e.splitNumRegx).concat(["0", "0", "0", "0"]), c = 0; c < 4; c++) /^(0+)(.+)$/.test(d[c]) && (d[c] = RegExp.$2), (c > b || !/\d/.test(d[c])) && (d[c] = "0");
            return d.slice(0, 4).join(",")
        },
        $$hasMimeType: function(a) {
            return function(b) {
                if (!a.isIE && b) {
                    var c, d, e, f = a.isArray(b) ? b : a.isString(b) ? [b] : [];
                    for (e = 0; e < f.length; e++)
                        if (a.isString(f[e]) && /[^\s]/.test(f[e]) && (c = navigator.mimeTypes[f[e]], (d = c ? c.enabledPlugin : 0) && (d.name || d.description))) return c
                }
                return null
            }
        },
        findNavPlugin: function(a, b, c) {
            var d, e, f, g = this,
                h = new RegExp(a, "i"),
                i = !g.isDefined(b) || b ? /\d/ : 0,
                j = c ? new RegExp(c, "i") : 0,
                k = navigator.plugins;
            for (d = 0; d < k.length; d++)
                if (f = k[d].description || "", e = k[d].name || "", (h.test(f) && (!i || i.test(RegExp.leftContext + RegExp.rightContext)) || h.test(e) && (!i || i.test(RegExp.leftContext + RegExp.rightContext))) && (!j || !j.test(f) && !j.test(e))) return k[d];
            return null
        },
        getMimeEnabledPlugin: function(a, b, c) {
            var d, e, f, g, h = this,
                i = new RegExp(b, "i"),
                j = c ? new RegExp(c, "i") : 0,
                k = h.isString(a) ? [a] : a;
            for (g = 0; g < k.length; g++)
                if ((d = h.hasMimeType(k[g])) && (d = d.enabledPlugin) && (f = d.description || "", e = d.name || "", (i.test(f) || i.test(e)) && (!j || !j.test(f) && !j.test(e)))) return d;
            return 0
        },
        getPluginFileVersion: function(a, b) {
            var c, d, e, f, g = this,
                h = -1;
            if (g.OS > 2 || !a || !a.version || !(c = g.getNum(a.version))) return b;
            if (!b) return c;
            for (c = g.formatNum(c), b = g.formatNum(b), d = b.split(g.splitNumRegx), e = c.split(g.splitNumRegx), f = 0; f < d.length; f++) {
                if (h > -1 && f > h && "0" != d[f]) return b;
                if (e[f] != d[f] && (-1 == h && (h = f), "0" != d[f])) return b
            }
            return c
        },
        AXO: window.ActiveXObject,
        getAXO: function(a) {
            var b = null,
                c = this;
            try {
                b = new c.AXO(a)
            } catch (a) {}
            return b
        },
        convertFuncs: function(a) {
            var b, c, d = /^[\$][\$]/;
            for (b in a)
                if (d.test(b)) try {
                    c = b.slice(2), c.length > 0 && !a[c] && (a[c] = a[b](a), delete a[b])
                } catch (a) {}
        },
        initObj: function(a, b, c) {
            var d, e;
            if (a) {
                if (1 == a[b[0]] || c)
                    for (d = 0; d < b.length; d += 2) a[b[d]] = b[d + 1];
                for (d in a)(e = a[d]) && 1 == e[b[0]] && this.initObj(e, b)
            }
        },
        initScript: function() {
            var a, b = this,
                c = navigator,
                d = document,
                e = c.userAgent || "",
                f = c.vendor || "",
                g = c.platform || "",
                h = c.product || "";
            b.initObj(b, ["$", b]);
            for (a in b.Plugins) b.Plugins[a] && b.initObj(b.Plugins[a], ["$", b, "$$", b.Plugins[a]], 1);
            if (b.convertFuncs(b), b.OS = 100, g) {
                var i = ["Win", 1, "Mac", 2, "Linux", 3, "FreeBSD", 4, "iPhone", 21.1, "iPod", 21.2, "iPad", 21.3, "Win.*CE", 22.1, "Win.*Mobile", 22.2, "Pocket\\s*PC", 22.3, "", 100];
                for (a = i.length - 2; a >= 0; a -= 2)
                    if (i[a] && new RegExp(i[a], "i").test(g)) {
                        b.OS = i[a + 1];
                        break
                    }
            }
            if (b.head = d.getElementsByTagName("head")[0] || d.getElementsByTagName("body")[0] || d.body || null, b.isIE = new Function("return/*@cc_on!@*/!1")(), b.verIE = b.isIE && /MSIE\s*(\d+\.?\d*)/i.test(e) ? parseFloat(RegExp.$1, 10) : null, b.verIEfull = null, b.docModeIE = null, b.isIE) {
                var j, k = document.createElement("div");
                try {
                    k.style.behavior = "url(#default#clientcaps)", b.verIEfull = k.getComponentVersion("{89820200-ECBD-11CF-8B85-00AA005B4383}", "componentid").replace(/,/g, ".")
                } catch (a) {}
                j = parseFloat(b.verIEfull || "0", 10), b.docModeIE = d.documentMode || (/back/i.test(d.compatMode || "") ? 5 : j) || b.verIE, b.verIE = j || b.docModeIE
            }
            if (b.ActiveXEnabled = !1, b.isIE) {
                var a, l = ["Msxml2.XMLHTTP", "Msxml2.DOMDocument", "Microsoft.XMLDOM", "ShockwaveFlash.ShockwaveFlash", "TDCCtl.TDCCtl", "Shell.UIHelper", "Scripting.Dictionary", "wmplayer.ocx"];
                for (a = 0; a < l.length; a++)
                    if (b.getAXO(l[a])) {
                        b.ActiveXEnabled = !0;
                        break
                    }
            }
            b.isGecko = /Gecko/i.test(h) && /Gecko\s*\/\s*\d/i.test(e), b.verGecko = b.isGecko ? b.formatNum(/rv\s*\:\s*([\.\,\d]+)/i.test(e) ? RegExp.$1 : "0.9") : null, b.isChrome = /Chrome\s*\/\s*(\d[\d\.]*)/i.test(e), b.verChrome = b.isChrome ? b.formatNum(RegExp.$1) : null, b.isSafari = (/Apple/i.test(f) || !f && !b.isChrome) && /Safari\s*\/\s*(\d[\d\.]*)/i.test(e), b.verSafari = b.isSafari && /Version\s*\/\s*(\d[\d\.]*)/i.test(e) ? b.formatNum(RegExp.$1) : null, b.isOpera = /Opera\s*[\/]?\s*(\d+\.?\d*)/i.test(e), b.verOpera = b.isOpera && (/Version\s*\/\s*(\d+\.?\d*)/i.test(e), !0) ? parseFloat(RegExp.$1, 10) : null, b.addWinEvent("load", b.handler(b.runWLfuncs, b))
        },
        init: function(a) {
            var b, a, c = this,
                d = {
                    status: -3,
                    plugin: 0
                };
            return c.isString(a) ? 1 == a.length ? (c.getVersionDelimiter = a, d) : (a = a.toLowerCase().replace(/\s/g, ""), (b = c.Plugins[a]) && b.getVersion ? (d.plugin = b, c.isDefined(b.installed) || (b.installed = null, b.version = null, b.version0 = null, b.getVersionDone = null, b.pluginName = a), c.garbage = !1, c.isIE && !c.ActiveXEnabled && "java" !== a ? (d.status = -2, d) : (d.status = 1, d)) : d) : d
        },
        fPush: function(a, b) {
            var c = this;
            c.isArray(b) && (c.isFunc(a) || c.isArray(a) && a.length > 0 && c.isFunc(a[0])) && b.push(a)
        },
        callArray: function(a) {
            var b, c = this;
            if (c.isArray(a))
                for (b = 0; b < a.length; b++) {
                    if (null === a[b]) return;
                    c.call(a[b]), a[b] = null
                }
        },
        call: function(a) {
            var b = this,
                c = b.isArray(a) ? a.length : -1;
            c > 0 && b.isFunc(a[0]) ? a[0](b, c > 1 ? a[1] : 0, c > 2 ? a[2] : 0, c > 3 ? a[3] : 0) : b.isFunc(a) && a(b)
        },
        getVersionDelimiter: ",",
        $$getVersion: function(a) {
            return function(b, c, d) {
                var e, f, g = a.init(b);
                return g.status < 0 ? null : (e = g.plugin, 1 != e.getVersionDone && (e.getVersion(null, c, d), null === e.getVersionDone && (e.getVersionDone = 1)), a.cleanup(), f = e.version || e.version0, f = f ? f.replace(a.splitNumRegx, a.getVersionDelimiter) : f)
            }
        },
        cleanup: function() {
            var a = this;
            a.garbage && a.isDefined(window.CollectGarbage) && window.CollectGarbage()
        },
        isActiveXObject: function(a, b) {
            var c = this,
                d = !1,
                e = '<object width="1" height="1" style="display:none" ' + a.getCodeBaseVersion(b) + ">" + a.HTML + c.openTag + "/object>";
            if (!c.head) return d;
            c.head.insertBefore(document.createElement("object"), c.head.firstChild), c.head.firstChild.outerHTML = e;
            try {
                c.head.firstChild.classid = a.classID
            } catch (a) {}
            try {
                c.head.firstChild.object && (d = !0)
            } catch (a) {}
            try {
                d && c.head.firstChild.readyState < 4 && (c.garbage = !0)
            } catch (a) {}
            return c.head.removeChild(c.head.firstChild), d
        },
        codebaseSearch: function(a, b) {
            var c = this;
            if (!c.ActiveXEnabled || !a) return null;
            a.BIfuncs && a.BIfuncs.length && null !== a.BIfuncs[a.BIfuncs.length - 1] && c.callArray(a.BIfuncs);
            var d, e = a.SEARCH;
            if (c.isStrNum(b)) return !!(e.match && e.min && c.compareNums(b, e.min) <= 0) || !(e.match && e.max && c.compareNums(b, e.max) >= 0) && (d = c.isActiveXObject(a, b), d && (!e.min || c.compareNums(b, e.min) > 0) && (e.min = b), d || e.max && !(c.compareNums(b, e.max) < 0) || (e.max = b), d);
            var f, g, h, i, j, k = [0, 0, 0, 0],
                l = [].concat(e.digits),
                m = e.min ? 1 : 0,
                n = function(b, d) {
                    var e = [].concat(k);
                    return e[b] = d, c.isActiveXObject(a, e.join(","))
                };
            if (e.max) {
                for (i = e.max.split(c.splitNumRegx), f = 0; f < i.length; f++) i[f] = parseInt(i[f], 10);
                i[0] < l[0] && (l[0] = i[0])
            }
            if (e.min) {
                for (j = e.min.split(c.splitNumRegx), f = 0; f < j.length; f++) j[f] = parseInt(j[f], 10);
                j[0] > k[0] && (k[0] = j[0])
            }
            if (j && i)
                for (f = 1; f < j.length && j[f - 1] == i[f - 1]; f++) i[f] < l[f] && (l[f] = i[f]), j[f] > k[f] && (k[f] = j[f]);
            if (e.max)
                for (f = 1; f < l.length; f++)
                    if (i[f] > 0 && 0 == l[f] && l[f - 1] < e.digits[f - 1]) {
                        l[f - 1] += 1;
                        break
                    }
            for (f = 0; f < l.length; f++) {
                for (h = {}, g = 0; g < 20 && !(l[f] - k[f] < 1) && (d = round((l[f] + k[f]) / 2), !h["a" + d]); g++) h["a" + d] = 1, n(f, d) ? (k[f] = d, m = 1) : l[f] = d;
                if (l[f] = k[f], !m && n(f, k[f]) && (m = 1), !m) break
            }
            return m ? k.join(",") : null
        },
        addWinEvent: function(a, b) {
            var c, d = this,
                e = window;
            d.isFunc(b) && (e.addEventListener ? e.addEventListener(a, b, !1) : e.attachEvent ? e.attachEvent("on" + a, b) : (c = e["on" + a], e["on" + a] = d.winHandler(b, c)))
        },
        winHandler: function(a, b) {
            return function() {
                a(), "function" == typeof b && b()
            }
        },
        WLfuncs0: [],
        WLfuncs: [],
        runWLfuncs: function(a) {
            a.winLoaded = !0, a.callArray(a.WLfuncs0), a.callArray(a.WLfuncs), a.onDoneEmptyDiv && a.onDoneEmptyDiv()
        },
        winLoaded: !1,
        $$onWindowLoaded: function(a) {
            return function(b) {
                a.winLoaded ? a.call(b) : a.fPush(b, a.WLfuncs)
            }
        },
        div: null,
        divID: "plugindetect",
        divWidth: 50,
        pluginSize: 1,
        emptyDiv: function() {
            var a, b, c, d, e, f = this;
            if (f.div && f.div.childNodes)
                for (a = f.div.childNodes.length - 1; a >= 0; a--) {
                    if ((c = f.div.childNodes[a]) && c.childNodes)
                        for (b = c.childNodes.length - 1; b >= 0; b--) {
                            e = c.childNodes[b];
                            try {
                                c.removeChild(e)
                            } catch (a) {}
                        }
                    if (c) try {
                        f.div.removeChild(c)
                    } catch (a) {}
                }
            if (f.div || (d = document.getElementById(f.divID)) && (f.div = d), f.div && f.div.parentNode) {
                try {
                    f.div.parentNode.removeChild(f.div)
                } catch (a) {}
                f.div = null
            }
        },
        DONEfuncs: [],
        onDoneEmptyDiv: function() {
            var a, b, c = this;
            if (c.winLoaded && (!c.WLfuncs || !c.WLfuncs.length || null === c.WLfuncs[c.WLfuncs.length - 1])) {
                for (a in c)
                    if ((b = c[a]) && b.funcs) {
                        if (3 == b.OTF) return;
                        if (b.funcs.length && null !== b.funcs[b.funcs.length - 1]) return
                    }
                for (a = 0; a < c.DONEfuncs.length; a++) c.callArray(c.DONEfuncs);
                c.emptyDiv()
            }
        },
        getWidth: function(a) {
            if (a) {
                var b = a.scrollWidth || a.offsetWidth;
                if (this.isNum(b)) return b
            }
            return -1
        },
        getTagStatus: function(a, b, c, d) {
            var e = this,
                f = a.span,
                g = e.getWidth(f),
                h = c.span,
                i = e.getWidth(h),
                j = b.span,
                k = e.getWidth(j);
            if (!(f && h && j && e.getDOMobj(a))) return -2;
            if (i < k || g < 0 || i < 0 || k < 0 || k <= e.pluginSize || e.pluginSize < 1) return 0;
            if (g >= k) return -1;
            try {
                if (g == e.pluginSize && (!e.isIE || 4 == e.getDOMobj(a).readyState)) {
                    if (!a.winLoaded && e.winLoaded) return 1;
                    if (a.winLoaded && e.isNum(d) && (e.isNum(a.count) || (a.count = d), d - a.count >= 10)) return 1
                }
            } catch (a) {}
            return 0
        },
        getDOMobj: function(a, b) {
            var c = this,
                d = a ? a.span : 0,
                e = d && d.firstChild ? 1 : 0;
            try {
                e && b && c.div.focus()
            } catch (a) {}
            return e ? d.firstChild : null
        },
        setStyle: function(a, b) {
            var c, d = a.style;
            if (d && b)
                for (c = 0; c < b.length; c += 2) try {
                    d[b[c]] = b[c + 1]
                } catch (a) {}
        },
        insertDivInBody: function(a, b) {
            var c = this,
                d = "pd33993399",
                e = null,
                f = b ? window.top.document : window.document,
                g = f.getElementsByTagName("body")[0] || f.body;
            if (!g) try {
                f.write('<div id="' + d + '">.' + c.openTag + "/div>"), e = f.getElementById(d)
            } catch (a) {}(g = f.getElementsByTagName("body")[0] || f.body) && (g.insertBefore(a, g.firstChild), e && g.removeChild(e))
        },
        insertHTML: function(a, b, c, d, e) {
            var f, g, h, i = document,
                j = this,
                k = i.createElement("span"),
                l = ["outlineStyle", "none", "borderStyle", "none", "padding", "0px", "margin", "0px", "visibility", "visible"];
            if (j.isDefined(d) || (d = ""), j.isString(a) && /[^\s]/.test(a)) {
                for (a = a.toLowerCase().replace(/\s/g, ""), f = j.openTag + a + ' width="' + j.pluginSize + '" height="' + j.pluginSize + '" ', f += 'style="outline-style:none;border-style:none;padding:0px;margin:0px;visibility:visible;display:inline;" ', g = 0; g < b.length; g += 2) /[^\s]/.test(b[g + 1]) && (f += b[g] + '="' + b[g + 1] + '" ');
                for (f += ">", g = 0; g < c.length; g += 2) /[^\s]/.test(c[g + 1]) && (f += j.openTag + 'param name="' + c[g] + '" value="' + c[g + 1] + '" />');
                f += d + j.openTag + "/" + a + ">"
            } else f = d;
            if (j.div || (h = i.getElementById(j.divID), h ? j.div = h : (j.div = i.createElement("div"), j.div.id = j.divID), j.setStyle(j.div, l.concat(["width", j.divWidth + "px", "height", j.pluginSize + 3 + "px", "fontSize", j.pluginSize + 3 + "px", "lineHeight", j.pluginSize + 3 + "px", "verticalAlign", "baseline", "display", "block"])), h || (j.setStyle(j.div, ["position", "absolute", "right", "0px", "top", "0px"]), j.insertDivInBody(j.div))), j.div && j.div.parentNode) {
                j.setStyle(k, l.concat(["fontSize", j.pluginSize + 3 + "px", "lineHeight", j.pluginSize + 3 + "px", "verticalAlign", "baseline", "display", "inline"]));
                try {
                    k.innerHTML = f
                } catch (a) {}
                try {
                    j.div.appendChild(k)
                } catch (a) {}
                return {
                    span: k,
                    winLoaded: j.winLoaded,
                    tagName: a,
                    outerHTML: f
                }
            }
            return {
                span: null,
                winLoaded: j.winLoaded,
                tagName: "",
                outerHTML: f
            }
        },
        Plugins: {
            quicktime: {
                mimeType: ["video/quicktime", "application/x-quicktimeplayer", "image/x-macpaint", "image/x-quicktime"],
                progID: "QuickTimeCheckObject.QuickTimeCheck.1",
                progID0: "QuickTime.QuickTime",
                classID: "clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B",
                minIEver: 7,
                HTML: '<param name="src" value="" /><param name="controller" value="false" />',
                getCodeBaseVersion: function(a) {
                    return 'codebase="#version=' + a + '"'
                },
                SEARCH: {
                    min: 0,
                    max: 0,
                    match: 0,
                    digits: [16, 128, 128, 0]
                },
                getVersion: function(a) {
                    var b, c = this,
                        d = c.$,
                        e = null,
                        f = null;
                    if (d.isIE) {
                        if (d.isStrNum(a) && (b = a.split(d.splitNumRegx), b.length > 3 && parseInt(b[3], 10) > 0 && (b[3] = "9999"), a = b.join(",")), d.isStrNum(a) && d.verIE >= c.minIEver && c.canUseIsMin() > 0) return c.installed = c.isMin(a), void(c.getVersionDone = 0);
                        c.getVersionDone = 1, !e && d.verIE >= c.minIEver && (e = c.CDBASE2VER(d.codebaseSearch(c))), e || (f = d.getAXO(c.progID)) && f.QuickTimeVersion && (e = f.QuickTimeVersion.toString(16), e = parseInt(e.charAt(0), 16) + "." + parseInt(e.charAt(1), 16) + "." + parseInt(e.charAt(2), 16))
                    } else d.hasMimeType(c.mimeType) && (f = 3 != d.OS ? d.findNavPlugin("QuickTime.*Plug-?in", 0) : null) && f.name && (e = d.getNum(f.name));
                    c.installed = e ? 1 : f ? 0 : -1, c.version = d.formatNum(e, 3)
                },
                cdbaseUpper: ["7,60,0,0", "0,0,0,0"],
                cdbaseLower: ["7,50,0,0", null],
                cdbase2ver: [function(a, b) {
                    var c = b.split(a.$.splitNumRegx);
                    return [c[0], c[1].charAt(0), c[1].charAt(1), c[2]].join(",")
                }, null],
                CDBASE2VER: function(a) {
                    var b, c = this,
                        d = c.$,
                        e = c.cdbaseUpper,
                        f = c.cdbaseLower;
                    if (a)
                        for (a = d.formatNum(a), b = 0; b < e.length; b++)
                            if (e[b] && d.compareNums(a, e[b]) < 0 && f[b] && d.compareNums(a, f[b]) >= 0 && c.cdbase2ver[b]) return c.cdbase2ver[b](c, a);
                    return a
                },
                canUseIsMin: function() {
                    var a, b = this,
                        c = b.$,
                        d = b.canUseIsMin,
                        e = b.cdbaseUpper,
                        f = b.cdbaseLower;
                    if (!d.value)
                        for (d.value = -1, a = 0; a < e.length; a++) {
                            if (e[a] && c.codebaseSearch(b, e[a])) {
                                d.value = 1;
                                break
                            }
                            if (f[a] && c.codebaseSearch(b, f[a])) {
                                d.value = -1;
                                break
                            }
                        }
                    return b.SEARCH.match = 1 == d.value ? 1 : 0, d.value
                },
                isMin: function(a) {
                    var b = this;
                    return b.$.codebaseSearch(b, a) ? .7 : -1
                }
            },
            flash: {
                mimeType: "application/x-shockwave-flash",
                progID: "ShockwaveFlash.ShockwaveFlash",
                classID: "clsid:D27CDB6E-AE6D-11CF-96B8-444553540000",
                getVersion: function() {
                    var a, b, c, d, e = function(a) {
                            if (!a) return null;
                            var b = /[\d][\d\,\.\s]*[rRdD]{0,1}[\d\,]*/.exec(a);
                            return b ? b[0].replace(/[rRdD\.]/g, ",").replace(/\s/g, "") : null
                        },
                        f = this,
                        g = f.$,
                        h = null,
                        i = null,
                        j = null;
                    if (g.isIE) {
                        for (a = 15; a > 2; a--)
                            if (i = g.getAXO(f.progID + "." + a)) {
                                j = a.toString();
                                break
                            }
                        if (i || (i = g.getAXO(f.progID)), "6" == j) try {
                            i.AllowScriptAccess = "always"
                        } catch (a) {
                            return "6,0,21,0"
                        }
                        try {
                            h = e(i.GetVariable("$version"))
                        } catch (a) {}!h && j && (h = j)
                    } else {
                        if (c = g.hasMimeType(f.mimeType)) {
                            b = g.getDOMobj(g.insertHTML("object", ["type", f.mimeType], [], "", f));
                            try {
                                h = g.getNum(b.GetVariable("$version"))
                            } catch (a) {}
                        }
                        h || (d = c ? c.enabledPlugin : null, d && d.description && (h = e(d.description)), h && (h = g.getPluginFileVersion(d, h)))
                    }
                    return f.installed = h ? 1 : -1, f.version = g.formatNum(h), !0
                }
            },
            shockwave: {
                mimeType: "application/x-director",
                progID: "SWCtl.SWCtl",
                classID: "clsid:166B1BCA-3F9C-11CF-8075-444553540000",
                getVersion: function() {
                    var a, b = null,
                        c = null,
                        d = this,
                        e = d.$;
                    if (e.isIE) {
                        try {
                            c = e.getAXO(d.progID).ShockwaveVersion("")
                        } catch (a) {}
                        e.isString(c) && c.length > 0 ? b = e.getNum(c) : e.getAXO(d.progID + ".8") ? b = "8" : e.getAXO(d.progID + ".7") ? b = "7" : e.getAXO(d.progID + ".1") && (b = "6")
                    } else a = e.findNavPlugin("Shockwave\\s*for\\s*Director"), a && a.description && e.hasMimeType(d.mimeType) && (b = e.getNum(a.description)), b && (b = e.getPluginFileVersion(a, b));
                    d.installed = b ? 1 : -1, d.version = e.formatNum(b)
                }
            },
            zz: 0
        }
    };
    PluginDetect.initScript();
    var gArgCountErr = 'The "%%" function requires an even number of arguments.\nArguments should be in the form "atttributeName", "attributeValue", ...',
        gTagAttrs = null,
        gQTGeneratorVersion = 1;
    ! function() {
        function a(a) {
            return a = a || location.href, "#" + a.replace(/^[^#]*#?(.*)$/, "$1")
        }
        var b, c = document,
            d = $.event.special,
            e = c.documentMode,
            f = "oniLightBoxHashChange" in window && (void 0 === e || 7 < e);
        $.fn.iLightBoxHashChange = function(a) {
            return a ? this.bind("iLightBoxHashChange", a) : this.trigger("iLightBoxHashChange")
        }, $.fn.iLightBoxHashChange.delay = 50, d.iLightBoxHashChange = $.extend(d.iLightBoxHashChange, {
            setup: function() {
                if (f) return !1;
                $(b.start)
            },
            teardown: function() {
                if (f) return !1;
                $(b.stop)
            }
        }), b = function() {
            function b() {
                var c = a(),
                    e = j(g);
                c !== g ? (i(g = c, e), $(window).trigger("iLightBoxHashChange")) : e !== g && (location.href = location.href.replace(/#.*/, "") + e), d = setTimeout(b, $.fn.iLightBoxHashChange.delay)
            }
            var d, e = {},
                g = a(),
                h = function(a) {
                    return a
                },
                i = h,
                j = h;
            return e.start = function() {
                d || b()
            }, e.stop = function() {
                d && clearTimeout(d), d = void 0
            }, browser.msie && !f && function() {
                var d, f;
                e.start = function() {
                    d || (f = (f = $.fn.iLightBoxHashChange.src) && f + a(), d = $('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
                        f || i(a()), b()
                    }).attr("src", f || "javascript:0").insertAfter("body")[0].contentWindow, c.onpropertychange = function() {
                        try {
                            "title" === event.propertyName && (d.document.title = c.title)
                        } catch (a) {}
                    })
                }, e.stop = h, j = function() {
                    return a(d.location.href)
                }, i = function(a, b) {
                    var e = d.document,
                        f = $.fn.iLightBoxHashChange.domain;
                    a !== b && (e.title = c.title, e.open(), f && e.write('<script>document.domain="' + f + '"<\/script>'), e.close(), d.location.hash = a)
                }
            }(), e
        }()
    }(), Array.prototype.filter || (Array.prototype.filter = function(a) {
        "use strict";
        if (null == this) throw new TypeError;
        var b = Object(this),
            c = b.length >>> 0;
        if ("function" != typeof a) throw new TypeError;
        for (var d = [], e = arguments[1], f = 0; f < c; f++)
            if (f in b) {
                var g = b[f];
                a.call(e, g, f, b) && d.push(g)
            }
        return d
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function(a, b) {
        var c;
        if (null == this) throw new TypeError('"this" is null or not defined');
        var d = Object(this),
            e = d.length >>> 0;
        if (0 === e) return -1;
        var f = +b || 0;
        if (abs(f) === 1 / 0 && (f = 0), f >= e) return -1;
        for (c = max(f >= 0 ? f : e - abs(f), 0); c < e;) {
            if (c in d && d[c] === a) return c;
            c++
        }
        return -1
    }), Array.prototype.lastIndexOf || (Array.prototype.lastIndexOf = function(a) {
        "use strict";
        if (null == this) throw new TypeError;
        var b = Object(this),
            c = b.length >>> 0;
        if (0 === c) return -1;
        var d = c;
        arguments.length > 1 && (d = Number(arguments[1]), d != d ? d = 0 : 0 != d && d != 1 / 0 && d != -1 / 0 && (d = (d > 0 || -1) * floor(abs(d))));
        for (var e = d >= 0 ? min(d, c - 1) : c - abs(d); e >= 0; e--)
            if (e in b && b[e] === a) return e;
        return -1
    })
}(jQuery, this);