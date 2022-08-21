import React, { createContext, useState } from "react";
import classnames from "classnames";
export var MenuContext = createContext({ index: "0" });
var Menu = function (props) {
    var defaultIndex = props.defaultIndex, className = props.className, mode = props.mode, style = props.style, children = props.children, defaultOpenSubMenus = props.defaultOpenSubMenus, onSelect = props.onSelect;
    var _a = useState(defaultIndex), currentActiveIndex = _a[0], setCurrentActiveIndex = _a[1];
    var classes = classnames("vk-menu", className, {
        "menu-vertical": mode === "vertical",
        "menu-horizontal": mode !== "vertical",
    });
    var handleClick = function (index) {
        setCurrentActiveIndex(index);
        if (onSelect)
            onSelect(index);
    };
    var passContext = {
        index: currentActiveIndex ? currentActiveIndex : "0",
        mode: mode,
        defaultOpenSubMenus: defaultOpenSubMenus,
        onSelect: handleClick,
    };
    var renderChildren = function () {
        return React.Children.map(children, function (child, index) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === "MenuItem" || displayName === "SubMenu") {
                return React.cloneElement(childElement, {
                    index: "".concat(index),
                });
            }
            else {
                console.error("Warning: Menu has a child which is not a MenuItem component");
            }
        });
    };
    return (React.createElement("ul", { className: classes, style: style, "data-testid": "test-menu" },
        React.createElement(MenuContext.Provider, { value: passContext }, renderChildren())));
};
Menu.defaultProps = {
    defaultIndex: "0",
    mode: "horizontal",
    defaultOpenSubMenus: [],
};
export default Menu;
