import React, { useContext } from "react";
import classnames from "classnames";
import { MenuContext } from "./menu";
var MenuItem = function (props) {
    var index = props.index, disabled = props.disabled, className = props.className, style = props.style, children = props.children;
    var menuContext = useContext(MenuContext);
    var classes = classnames("menu-item", className, {
        "is-disabled": disabled,
        "is-active": menuContext.index === index,
    });
    var handleClick = function () {
        if (menuContext.onSelect && !disabled && typeof index === "string") {
            menuContext.onSelect(index);
        }
    };
    return (React.createElement("li", { className: classes, style: style, onClick: handleClick }, children));
};
MenuItem.displayName = "MenuItem";
export default MenuItem;
