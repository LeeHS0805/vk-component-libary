var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useContext, useState } from "react";
import classnames from "classnames";
import { MenuContext } from "./menu";
import Icon from "../Icon/icon";
import Transition from "../Transition";
var SubMenu = function (props) {
    var context = useContext(MenuContext);
    var _a = props.index, index = _a === void 0 ? "" : _a, title = props.title, className = props.className, children = props.children;
    var openedSubMenus = context.defaultOpenSubMenus;
    var isOpen = index && context.mode === "vertical"
        ? openedSubMenus.includes(index)
        : false;
    var _b = useState(isOpen), menuOpen = _b[0], setOpen = _b[1];
    var computedActiveClassState = function (contextIndex, index) {
        return contextIndex === index || contextIndex.startsWith(index);
    };
    var classes = classnames("menu-item submenu-item", className, {
        "is-active": computedActiveClassState(context.index, index),
        "is-vertical": context.mode === "vertical",
        "is-opened": menuOpen,
    });
    var handleClick = function (e) {
        e.preventDefault();
        setOpen(!menuOpen);
    };
    var timer;
    var handleMouse = function (e, toggle, wait) {
        if (wait === void 0) { wait = 150; }
        clearTimeout(timer);
        e.preventDefault();
        timer = setTimeout(function () {
            setOpen(toggle);
        }, wait);
    };
    var clickEvent = context.mode === "vertical"
        ? {
            onClick: handleClick,
        }
        : {};
    var hoverEvent = context.mode !== "vertical"
        ? {
            onMouseEnter: function (e) { return handleMouse(e, true); },
            onMouseLeave: function (e) { return handleMouse(e, false); },
        }
        : {};
    var renderChildren = function () {
        var subMenuClasses = classnames("vk-submenu", {
            "vk-menu-opened": menuOpen,
        });
        var childrenComponent = React.Children.map(children, function (child, index) {
            var childrenElement = child;
            if (childrenElement.type.displayName === "MenuItem") {
                return childrenElement;
            }
            else {
                console.error("Warning: SubMenu has a child which is not a MenuItem component");
            }
        });
        return (React.createElement(Transition, { in: menuOpen, timeout: 300, animation: "zoom-in-top", appear: true, unmountOnExit: true },
            React.createElement("ul", { className: subMenuClasses }, childrenComponent)));
    };
    return (React.createElement("li", __assign({ key: index, className: classes }, hoverEvent, { "data-testid": "test-sub-menu" }),
        React.createElement("div", __assign({ className: "submenu-title" }, clickEvent),
            title,
            React.createElement(Icon, { icon: "angle-down", className: "arrow-icon" })),
        renderChildren()));
};
SubMenu.displayName = "SubMenu";
export default SubMenu;
