var isMenuHide = true;
var isLogoMenuHide = true;
var isSpaceNarrow = false;
var isMobile = false;
(function (a) {
    a(window).on("load", function () {
        var showMenuDIV_ElementId = a(document.getElementById("showMenu"));
        var headerDropDownMenuDIV_ClassId = document.getElementsByClassName("header-dropdown-menu-item");
        var itemDropDownMenuUL_ClassName = document.getElementsByClassName("item-dropdown-menu");
        var headerDropDownDIV_ControlsPlusButton_ClassName = document.getElementsByClassName("header-dropdown-menu-item-icon");
        var forMenuTypeDIV_UnderHeaderNavigationDiv_ClassName = document.querySelector(".for-menu-type");
        var m = document.querySelector(".header-logo-menu");
        var l = document.querySelector(".space");
        var s = a(".space-collapsed");
        var k = a(".space-collapsed-products");
        var c = a(".space-collapsed-personas");
        var t = a(".space-collapsed-context");
        var d = document.getElementsByClassName("inner-block");
        var h = a(".city-block");
        var j = document.querySelector(".space-collapsed-close-btn");
        var p = document.querySelector(".space-collapsed-close-btn-products");
        var g = document.querySelector(".space-collapsed-close-btn-personas");
        var f = document.querySelector(".space-collapsed-close-btn-context");
        Array.prototype.forEach.call(headerDropDownMenuDIV_ClassId, function (headerDropDown_ClassItem) {
            headerDropDown_ClassItem.onclick = processClickedHeaderDropDownMenuItem
        });
        forMenuTypeDIV_UnderHeaderNavigationDiv_ClassName.onclick = function (y) {
            m.style.left = y.currentTarget.getBoundingClientRect().left + "px";
            isLogoMenuHide ? a(".header-logo-menu").fadeIn("fast") : a(".header-logo-menu").fadeOut("fast");
            isLogoMenuHide = !isLogoMenuHide
        };
        showMenuDIV_ElementId.on("click", function () {
            isMenuHide ? showMenuDIV_ElementId.html('<img src="images/java_script_menu_mgr/close-btn.svg">') : showMenuDIV_ElementId.html('<img src="images/java_script_menu_mgr/burger-menu.svg">');
            isMenuHide ? a(".header-dropdown-menu").fadeIn("fast") : a(".header-dropdown-menu").fadeOut("fast");
            if (isMenuHide) {
                Array.prototype.forEach.call(itemDropDownMenuUL_ClassName, function (y) {
                    y.style.display = "none";
                });
                Array.prototype.forEach.call(headerDropDownDIV_ControlsPlusButton_ClassName, function (y) {
                    y.innerHTML = '<img src="images/java_script_menu_mgr/plus_btn.svg" class="plus-icon">'
                })
            }
            isMenuHide = !isMenuHide
        });

        function processClickedHeaderDropDownMenuItem(clickedElement) {
            var A;
            var z;
            var currentlyClickedMenuItem = clickedElement.currentTarget;
            Array.prototype.forEach.call(currentlyClickedMenuItem.children, function (C) {
                if (C.className === "header-dropdown-menu-item-icon") {
                    z = C
                }
            });
            Array.prototype.forEach.call(headerDropDownDIV_ControlsPlusButton_ClassName, function (C) {
                if (C === z) {
                    C.innerHTML = C.innerHTML === '<img src="images/java_script_menu_mgr/arrow-down.svg" class="arrow-icon">' ? '<img src="images/java_script_menu_mgr/plus_btn.svg" class="plus-icon">' : '<img src="images/java_script_menu_mgr/arrow-down.svg" class="arrow-icon">'
                } else {
                    C.innerHTML = '<img src="images/java_script_menu_mgr/plus_btn.svg" class="plus-icon">'
                }
            });
            Array.prototype.forEach.call(currentlyClickedMenuItem.parentElement.children, function (C) {
                if (C.className === "item-dropdown-menu") {
                    A = C
                }
            });
            Array.prototype.forEach.call(itemDropDownMenuUL_ClassName, function (C) {
                if (C === A) {
                    C.style.display = C.style.display === "block" ? "none" : "block"
                } else {
                    C.style.display = "none"
                }
            })
        }

        if (j) {
            j.addEventListener("click", e)
        }
        if (p) {
            p.addEventListener("click", b)
        }
        if (g) {
            g.addEventListener("click", i)
        }
        if (f) {
            f.addEventListener("click", o)
        }
        if (window.innerWidth < 680) {
            isMobile = true
        } else {
            isMobile = false
        }
        Array.prototype.forEach.call(d, function (y) {
            y.addEventListener("click", w)
        });

        function w(z) {
            function y(B) {
                var C = [];
                while (B) {
                    C.push(B);
                    if (B.tagName === "HTML") {
                        C.push(document);
                        C.push(window);
                        return C
                    }
                    B = B.parentElement
                }
            }

            var A = z.path || (z.composedPath && z.composedPath()) || y(z.target);
            Array.prototype.forEach.call(A, function (B) {
                if (B.className !== undefined) {
                    if (B.className.indexOf("inner-block-hover-products") != -1) {
                        console.log(B.className);
                        if (B.className === "inner-block-hover inner-block-hover-products") {
                            s.css("display", "none");
                            c.css("display", "none");
                            t.css("display", "none");
                            k.css("display", "block");
                            console.log("true includes");
                            if (!isMobile) {
                                Array.prototype.forEach.call(d, function (C) {
                                    C.classList.remove("inner-block-active");
                                    C.style.padding = "10px 0 55px 0"
                                })
                            } else {
                                a(z.currentTarget).after(k);
                                k.css("display", "block");
                                Array.prototype.forEach.call(d, function (C) {
                                    C.classList.remove("inner-block-active")
                                })
                            }
                            if (!isSpaceNarrow && !isMobile) {
                                Array.prototype.forEach.call(l.children, function (C) {
                                    C.classList.add("space-narrow")
                                });
                                h.css("display", "none");
                                isSpaceNarrow = true;
                                isSpaceNarrow ? a(".space-collapsed-products").fadeIn("fast") : a(".space-collapsed-products").fadeOut("fast")
                            }
                            z.currentTarget.classList.add("inner-block-active")
                        }
                    } else {
                        if (B.className.indexOf("inner-block-hover-personas") != -1) {
                            console.log(B.className);
                            if (B.className === "inner-block-hover inner-block-hover-personas") {
                                s.css("display", "none");
                                k.css("display", "none");
                                t.css("display", "none");
                                c.css("display", "block");
                                console.log("true includes");
                                if (!isMobile) {
                                    Array.prototype.forEach.call(d, function (C) {
                                        C.classList.remove("inner-block-active");
                                        C.style.padding = "10px 0 55px 0"
                                    })
                                } else {
                                    a(z.currentTarget).after(c);
                                    c.css("display", "block");
                                    Array.prototype.forEach.call(d, function (C) {
                                        C.classList.remove("inner-block-active")
                                    })
                                }
                                if (!isSpaceNarrow && !isMobile) {
                                    Array.prototype.forEach.call(l.children, function (C) {
                                        C.classList.add("space-narrow")
                                    });
                                    h.css("display", "none");
                                    isSpaceNarrow = true;
                                    isSpaceNarrow ? a(".space-collapsed-personas").fadeIn("fast") : a(".space-collapsed-personas").fadeOut("fast")
                                }
                                z.currentTarget.classList.add("inner-block-active")
                            }
                        } else {
                            if (B.className.indexOf("inner-block-hover-context") != -1) {
                                console.log(B.className);
                                if (B.className === "inner-block-hover inner-block-hover-context") {
                                    s.css("display", "none");
                                    k.css("display", "none");
                                    c.css("display", "none");
                                    t.css("display", "block");
                                    console.log("true includes");
                                    if (!isMobile) {
                                        Array.prototype.forEach.call(d, function (C) {
                                            C.classList.remove("inner-block-active");
                                            C.style.padding = "10px 0 55px 0"
                                        })
                                    } else {
                                        a(z.currentTarget).after(t);
                                        t.css("display", "block");
                                        Array.prototype.forEach.call(d, function (C) {
                                            C.classList.remove("inner-block-active")
                                        })
                                    }
                                    if (!isSpaceNarrow && !isMobile) {
                                        Array.prototype.forEach.call(l.children, function (C) {
                                            C.classList.add("space-narrow")
                                        });
                                        h.css("display", "none");
                                        isSpaceNarrow = true;
                                        isSpaceNarrow ? a(".space-collapsed-context").fadeIn("fast") : a(".space-collapsed-context").fadeOut("fast")
                                    }
                                    z.currentTarget.classList.add("inner-block-active")
                                }
                            } else {
                                if (B.className === "inner-block-hover") {
                                    k.css("display", "none");
                                    c.css("display", "none");
                                    t.css("display", "none");
                                    s.css("display", "block");
                                    console.log("false includes");
                                    if (!isMobile) {
                                        Array.prototype.forEach.call(d, function (C) {
                                            C.classList.remove("inner-block-active");
                                            C.style.padding = "10px 0 55px 0"
                                        })
                                    } else {
                                        a(z.currentTarget).after(s);
                                        k.css("display", "none");
                                        c.css("display", "none");
                                        t.css("display", "none");
                                        s.css("display", "block");
                                        Array.prototype.forEach.call(d, function (C) {
                                            C.classList.remove("inner-block-active")
                                        })
                                    }
                                    if (!isSpaceNarrow && !isMobile) {
                                        Array.prototype.forEach.call(l.children, function (C) {
                                            C.classList.add("space-narrow")
                                        });
                                        h.css("display", "none");
                                        isSpaceNarrow = true;
                                        isSpaceNarrow ? a(".space-collapsed").fadeIn("fast") : a(".space-collapsed").fadeOut("fast")
                                    }
                                    z.currentTarget.classList.add("inner-block-active")
                                }
                            }
                        }
                    }
                }
            })
        }

        function e(z) {
            s.css("display", "none");
            k.css("display", "none");
            if (isMobile) {
                var A = document.querySelector(".space-collapsed");
                a(A).remove();
                var y = document.querySelector(".space-collapsed-products");
                a(y).remove();
                Array.prototype.forEach.call(d, function (B) {
                    B.classList.remove("inner-block-active")
                })
            } else {
                Array.prototype.forEach.call(l.children, function (B) {
                    B.classList.remove("space-narrow")
                });
                h.css("display", "block");
                Array.prototype.forEach.call(d, function (B) {
                    B.classList.remove("inner-block-active");
                    B.style.padding = "10px 0 110px 0"
                });
                isSpaceNarrow = false
            }
        }

        function b(z) {
            console.log(z);
            k.css("display", "none");
            if (isMobile) {
                var y = document.querySelector(".space-collapsed-products");
                a(y).remove();
                Array.prototype.forEach.call(d, function (A) {
                    A.classList.remove("inner-block-active")
                })
            } else {
                Array.prototype.forEach.call(l.children, function (A) {
                    A.classList.remove("space-narrow")
                });
                h.css("display", "block");
                Array.prototype.forEach.call(d, function (A) {
                    A.classList.remove("inner-block-active");
                    A.style.padding = "10px 0 110px 0"
                });
                isSpaceNarrow = false
            }
        }

        function i(z) {
            console.log(z);
            c.css("display", "none");
            if (isMobile) {
                var y = document.querySelector(".space-collapsed-personas");
                a(y).remove();
                Array.prototype.forEach.call(d, function (A) {
                    A.classList.remove("inner-block-active")
                })
            } else {
                Array.prototype.forEach.call(l.children, function (A) {
                    A.classList.remove("space-narrow")
                });
                h.css("display", "block");
                Array.prototype.forEach.call(d, function (A) {
                    A.classList.remove("inner-block-active");
                    A.style.padding = "10px 0 110px 0"
                });
                isSpaceNarrow = false
            }
        }

        function o(z) {
            console.log(z);
            t.css("display", "none");
            if (isMobile) {
                var y = document.querySelector(".space-collapsed-context");
                a(y).remove();
                Array.prototype.forEach.call(d, function (A) {
                    A.classList.remove("inner-block-active")
                })
            } else {
                Array.prototype.forEach.call(l.children, function (A) {
                    A.classList.remove("space-narrow")
                });
                h.css("display", "block");
                Array.prototype.forEach.call(d, function (A) {
                    A.classList.remove("inner-block-active");
                    A.style.padding = "10px 0 110px 0"
                });
                isSpaceNarrow = false
            }
        }
    })
}(jQuery));