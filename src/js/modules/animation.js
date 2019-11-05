'use strict';
//канвас 
let zoomAmount, isLoaded, imageScale, dispSpeed = 1;
let isEdge = false;
window.CanvasSlideshow = function(t) {
    var e = this;
    (t = t || {}).texts = t.hasOwnProperty("texts") ? t.texts : [], t.autoPlay = !t.hasOwnProperty("autoPlay") || t.autoPlay, t.autoPlaySpeed = t.hasOwnProperty("autoPlaySpeed") ? t.autoPlaySpeed : [10, 3], t.fullScreen = !t.hasOwnProperty(
        "fullScreen") || t.fullScreen, t.displaceScale = t.hasOwnProperty("displaceScale") ? t.displaceScale : [200, 70], t.displacementImage = t.hasOwnProperty("displacementImage") ? t.displacementImage : "", t.navElement = t.hasOwnProperty(
        "navElement") ? t.navElement : document.querySelectorAll(".scene-nav"), t.displaceAutoFit = !!t.hasOwnProperty("displaceAutoFit") && t.displaceAutoFit, t.wacky = !!t.hasOwnProperty("wacky") && t.wacky, t.interactive = !!t.hasOwnProperty(
        "interactive") && t.interactive, t.interactionEvent = t.hasOwnProperty("interactionEvent") ? t.interactionEvent : "", t.displaceScaleTo = !1 === t.autoPlay ? [0, 0] : [20, 20], t.textColor = t.hasOwnProperty("textColor") ? t.textColor :
        "#fff", t.displacementCenter = !!t.hasOwnProperty("displacementCenter") && t.displacementCenter, t.dispatchPointerOver = !!t.hasOwnProperty("dispatchPointerOver") && t.dispatchPointerOver;
    var r = new PIXI.autoDetectRenderer(innerWidth, innerHeight, {
        transparent: !0,
        backgroundColor: 14137509
        }),
        i = new PIXI.Container,
        n = new PIXI.Sprite.fromImage('img/clouds.jpg'),
        o = new PIXI.filters.DisplacementFilter(n);
    this.initPixi = function() {
        document.body.appendChild(r.view), r.view.style.objectFit = "cover", r.view.style.width = "100%", r.view.style.height = "100%", r.view.style.top = "0", r.view.style.left = "0", n.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT, i
        .filters = [o], n.scale.x = 2, n.scale.y = 2, n.rotation = 250, o.scale.set(t.displaceScale[0], t.displaceScale[1]), i.addChild(n)
    };
    var s = new PIXI.Texture.fromImage('img/bg-ipad.jpg'),
        a = new PIXI.Sprite(s);
    a.anchor.set(0.5), a.width = 840, a.height = 670, a.position.x = innerWidth / 2, a.y = innerHeight / 2, i.addChild(a);
    var u = new PIXI.ticker.Ticker;
    u.autoStart = !0, u.add(function(e) {
        const s = o.scale.x;
        n.x += t.autoPlaySpeed[0] * e, n.y += t.autoPlaySpeed[1], s > 0 && (o.scale.set(s - t.autoPlaySpeed[2] * dispSpeed), dispSpeed = (.99 * dispSpeed).toFixed(3));
        const u = (window.pageYOffset || document.documentElement.scrollTop) / (document.body.offsetHeight - innerHeight) * 100;
        zoomAmount = -.01 * u, isLoaded && a.scale.x <= 1 && !imageScale ? imageScale = {
        x: a.scale.x,
        y: a.scale.y
        } : imageScale && (isEdge ? (zoomAmount = 0 / (document.body.offsetHeight - innerHeight) * .01 * 100, a.scale.set(imageScale.x * ((23.25 - 7 * zoomAmount * 1.5) / 10).toFixed(3), imageScale.y * ((15.5 - 7 * zoomAmount) / 10).toFixed(
        3))) : a.scale.set(imageScale.x * ((23.25 - 7 * zoomAmount * 1.5) / 10).toFixed(3), imageScale.y * ((15.5 - 7 * zoomAmount) / 10).toFixed(3))), r.render(i), isLoaded = !0
    }), this.init = function() {
        e.initPixi()
    };
    var l = setInterval(function() {
        true && true && (e.init(), clearInterval(l))
    }, 50)
    },
    function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("ScrollBooster", [], e) : "object" == typeof exports ? exports.ScrollBooster = e() : t.ScrollBooster = e()
    }("undefined" != typeof self ? self : this, function() {
    return function(t) {
        var e = {};

        function r(i) {
        if (e[i]) return e[i].exports;
        var n = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(n.exports, n, n.exports, r), n.l = !0, n.exports
        }
        return r.m = t, r.c = e, r.d = function(t, e, i) {
        r.o(t, e) || Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
        }, r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return r.d(e, "a", e), e
        }, r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
        }, r.p = "/dist/", r(r.s = 0)
    }([function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
        value: !0
        });
        var i = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
            }
            return t
        },
        n = function() {
            function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
            }
            return function(e, r, i) {
            return r && t(e.prototype, r), i && t(e, i), e
            }
        }();
        var o = function() {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), e.viewport && e.viewport instanceof Element) {
            var r = {
                handle: e.viewport,
                content: e.viewport.children[0],
                bounce: !0,
                onUpdate: function() {}
            };
            this.props = i({}, r, e), this.props.content ? (this.viewport = {
                width: this.props.viewport.clientWidth,
                height: this.props.viewport.clientHeight
            }, this.content = {
                width: s(this.props.content),
                height: a(this.props.content)
            }, this.position = {
                x: 0,
                y: 0
            }, this.velocity = {
                x: 0,
                y: 0
            }, this.friction = .95, this.isDragging = !1, this.dragStartPosition = {
                x: 0,
                y: 0
            }, this.dragPosition = i({}, this.position), this.isScrollEnabled = !!this.props.emulateScroll, this.isScrolling = !1, this.scrollOffset = {
                x: 0,
                y: 0
            }, this.bounce = this.props.bounce, this.boundX = {
                from: Math.min(-this.content.width + this.viewport.width, 0),
                to: 0
            }, this.boundY = {
                from: Math.min(-this.content.height + this.viewport.height, 0),
                to: 0
            }, this.mode = {
                x: "x" == this.props.mode,
                y: "y" == this.props.mode,
                xy: "x" !== this.props.mode && "y" !== this.props.mode
            }, this.isRunning = !1, this.rafID = null, this.events = {}, this.animate(), this.handleEvents()) : console.error("Viewport does not have any content")
            } else console.error('"viewport" config property must be present and must be Element')
        }
        return n(t, [{
            key: "run",
            value: function() {
            var t = this;
            this.isRunning = !0, cancelAnimationFrame(this.rafID), this.rafID = requestAnimationFrame(function() {
                return t.animate()
            })
            }
        }, {
            key: "animate",
            value: function() {
            var t = this;
            this.isRunning && (this.update(), this.notify(), this.rafID = requestAnimationFrame(function() {
                return t.animate()
            }))
            }
        }, {
            key: "update",
            value: function() {
            this.applyBoundForce(), this.applyDragForce(), this.applyScrollForce(), this.velocity.x *= this.friction, this.velocity.y *= this.friction, this.mode.y || (this.position.x += this.velocity.x), this.mode.x || (this
                .position.y += this.velocity.y), this.bounce && !this.isScrolling || (this.position.x = Math.max(Math.min(this.position.x, this.boundX.to), this.boundX.from), this.position.y = Math.max(Math.min(this.position.y,
                this.boundY.to), this.boundY.from)), !this.isDragging && !this.isScrolling && Math.abs(this.velocity.x) < .005 && Math.abs(this.velocity.y) < .005 && (this.isRunning = !1)
            }
        }, {
            key: "applyForce",
            value: function(t) {
            this.velocity.x += t.x, this.velocity.y += t.y
            }
        }, {
            key: "applyBoundForce",
            value: function() {
            if (this.bounce && !this.isDragging) {
                var t = this.position.x < this.boundX.from,
                e = this.position.x > this.boundX.to,
                r = this.position.y < this.boundY.from,
                i = this.position.y > this.boundY.to,
                n = {
                    x: 0,
                    y: 0
                };
                if (t || e) {
                var o = (t ? this.boundX.from : this.boundX.to) - this.position.x,
                    s = .1 * o,
                    a = this.position.x + (this.velocity.x + s) / (1 - this.friction);
                t && a < this.boundX.from || e && a > this.boundX.to || (s = .1 * o - this.velocity.x), n.x = s
                }
                if (r || i) {
                var u = (r ? this.boundY.from : this.boundY.to) - this.position.y,
                    l = .1 * u,
                    h = this.position.y + (this.velocity.y + l) / (1 - this.friction);
                r && h < this.boundY.from || i && h > this.boundY.to || (l = .1 * u - this.velocity.y), n.y = l
                }
                this.applyForce(n)
            }
            }
        }, {
            key: "applyDragForce",
            value: function() {
            if (this.isDragging) {
                var t = this.dragPosition.x - this.position.x,
                e = this.dragPosition.y - this.position.y,
                r = {
                    x: t - this.velocity.x,
                    y: e - this.velocity.y
                };
                this.applyForce(r)
            }
            }
        }, {
            key: "applyScrollForce",
            value: function() {
            if (this.isScrolling) {
                var t = {
                x: this.scrollOffset.x - this.velocity.x,
                y: this.scrollOffset.y - this.velocity.y
                };
                this.scrollOffset.x = 0, this.scrollOffset.y = 0, this.applyForce(t)
            }
            }
        }, {
            key: "setPosition",
            value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? [arguments[0], arguments[1]] : {};
            this.velocity.x = 0, this.velocity.y = 0, this.position.x = -t[0] || 0, this.position.y = -t[1] || 0, this.run()
            }
        }, {
            key: "getUpdate",
            value: function() {
            return {
                position: {
                x: -this.position.x,
                y: -this.position.y
                },
                viewport: i({}, this.viewport),
                content: i({}, this.content)
            }
            }
        }, {
            key: "notify",
            value: function() {
            this.props.onUpdate(this.getUpdate())
            }
        }, {
            key: "updateMetrics",
            value: function() {
            this.viewport.width = this.props.viewport.clientWidth, this.viewport.height = this.props.viewport.clientHeight, this.content.width = s(this.props.content), this.content.height = a(this.props.content), this.boundX
                .from = Math.min(-this.content.width + this.viewport.width, 0), this.boundY.from = Math.min(-this.content.height + this.viewport.height, 0), this.run()
            }
        }, {
            key: "handleEvents",
            value: function() {
            var t = this,
                e = this.props.viewport,
                r = {
                x: 0,
                y: 0
                },
                i = {
                x: 0,
                y: 0
                },
                n = !1,
                o = function(e) {
                var r = void 0,
                    o = void 0;
                n ? (r = e.touches[0].pageX, o = e.touches[0].pageY) : (r = e.pageX, o = e.pageY);
                var s = r - i.x,
                    a = o - i.y;
                t.dragPosition.x = t.dragStartPosition.x + s, t.dragPosition.y = t.dragStartPosition.y + a, n || e.preventDefault()
                };
            this.events.pointerdown = function(s) {
                var a = void 0,
                u = void 0,
                l = void 0,
                h = void 0;
                (n = !(!s.touches || !s.touches[0])) ? (a = s.touches[0].pageX, u = s.touches[0].pageY, l = s.touches[0].clientX, h = s.touches[0].clientY) : (a = s.pageX, u = s.pageY, l = s.clientX, h = s.clientY);
                var c = e.getBoundingClientRect();
                if (!(l - c.left >= e.clientLeft + e.clientWidth || h - c.top >= e.clientTop + e.clientHeight)) {
                t.isDragging = !0, (r.x || r.y) && (t.position.x = r.x, t.position.y = r.y, r.x = 0, r.y = 0), i.x = a, i.y = u, t.dragStartPosition.x = t.position.x, t.dragStartPosition.y = t.position.y, o(s), t.run();
                var f, d = void 0;
                f = function(e) {
                    t.isDragging = !1, n ? (window.removeEventListener("touchmove", o), window.removeEventListener("touchend", d)) : (window.removeEventListener("mousemove", o), window.removeEventListener("mouseup", d))
                }, n ? (d = window.addEventListener("touchend", f), window.addEventListener("touchmove", o)) : (d = window.addEventListener("mouseup", f), window.addEventListener("mousemove", o))
                }
            };
            var s = null;
            this.events.wheel = function(e) {
                t.velocity.x = 0, t.isScrollEnabled && (t.isScrolling = !0, t.scrollOffset.x = -e.deltaX, t.scrollOffset.y = -e.deltaY, t.run(), clearTimeout(s), s = setTimeout(function() {
                    return t.isScrolling = !1
                }, 80), e.preventDefault())
                }, this.events.scroll = function(e) {
                var i = t.props.viewport.scrollLeft,
                    n = t.props.viewport.scrollTop;
                Math.abs(t.position.x + i) > 3 && (t.position.x = -i, t.velocity.x = 0), Math.abs(t.position.y + n) > 3 && (t.position.y = -n, t.velocity.y = 0), r.x = -t.props.viewport.scrollLeft, r.y = -t.props.viewport
                    .scrollTop
                }, this.events.resize = this.updateMetrics.bind(this), this.props.handle.addEventListener("mousedown", this.events.pointerdown), this.props.handle.addEventListener("touchstart", this.events.pointerdown), this.props
                .viewport.addEventListener("wheel", this.events.wheel), this.props.viewport.addEventListener("scroll", this.events.scroll), window.addEventListener("resize", this.events.resize)
            }
        }, {
            key: "destroy",
            value: function() {
            this.props.handle.removeEventListener("mousedown", this.events.pointerdown), this.props.handle.removeEventListener("touchstart", this.events.pointerdown), this.props.viewport.removeEventListener("wheel", this.events
                .wheel), this.props.viewport.removeEventListener("scroll", this.events.scroll), window.removeEventListener("resize", this.events.resize)
            }
        }]), t
        }();

        function s(t) {
        return Math.max(t.offsetWidth, t.scrollWidth)
        }

        function a(t) {
        return Math.max(t.offsetHeight, t.scrollHeight)
        }
        e.default = o, t.exports = e.default
    }])
});

//инициализация канваса
new CanvasSlideshow({
    autoPlay: true,
    autoPlaySpeed: [1, 4, 2.2],
    displaceScale: [200, 50]
});

//инициализация анимации
new WOW().init();

//прокрутка меню
$(function() {
    function scrollBlock() {
    var windowTop = $(window).scrollTop();
    var promoTop = Math.floor($('#promo').offset().top);
    var discographyTop = Math.floor($('#discography').offset().top);
    var aboutTop = Math.floor($('#about').offset().top);
    var collaboratorsTop = Math.floor($('#collaborators').offset().top);
    var contactsTop = Math.floor($('#contacts').offset().top);

    if (windowTop >= contactsTop) {
        $(".header__menu-item").removeClass('header__menu-item--active');
        $('a[href="#contacts"').parent().addClass('header__menu-item--active');
    } else if (windowTop >= collaboratorsTop) {
        $(".header__menu-item").removeClass('header__menu-item--active');
        $('a[href="#collaborators"').parent().addClass('header__menu-item--active');
    } else if (windowTop >= aboutTop) {
        $(".header__menu-item").removeClass('header__menu-item--active');
        $('a[href="#about"').parent().addClass('header__menu-item--active');
    } else if (windowTop >= discographyTop) {
        $(".header__menu-item").removeClass('header__menu-item--active');
        $('a[href="#discography"').parent().addClass('header__menu-item--active');
    } else if (windowTop > 0) {
        $(".header__menu-item").removeClass('header__menu-item--active');
        $('a[href="#promo"').parent().addClass('header__menu-item--active');
    }
    }

    scrollBlock();
    $(window).on('scroll', scrollBlock);
    $(".header__menu-item a").click(function() {
    var elementClick = $(this).attr("href");
    $(".header__menu-item").removeClass('header__menu-item--active');
    $(this).parent().addClass('header__menu-item--active');
    var destination = $(elementClick).offset().top;
    $('html, body').animate({
        scrollTop: destination
    }, 500);
    return false;
    });

    //анимация для песен
    $('.songs-block a').on('click', function(evt){
        evt.preventDefault();
        var currentSong = $(this).attr('href');
        var songsTop = Math.floor($('.songs-block').offset().top);
            $('.song').hide();
            $(currentSong).show();
            $('html, body').animate({scrollTop: songsTop}, 500);
    });

    $('.discography__album-songs a').on('click', function(evt){
        evt.preventDefault();
        var currentSong = $(this).attr('href');
        var songsTop = Math.floor($('.songs-block').offset().top);
        if ($('.songs-block').height() > 2) {
            $('.song').hide();
            $(currentSong).show();
            $('html, body').animate({scrollTop: songsTop}, 500);
        } else {
            $('html, body').animate({scrollTop: songsTop}, 500);
            $( ".songs-block" ).animate({minHeight: "100vh"}, 500 );
            $(currentSong).animate({marginTop: "100vh"}, 500 ).show(0).animate({marginTop: "0"}, 500 );                     

        }
    })
});
