import "./App.css";
import Button from "./Components/Button/button";
import React from "react";
import Menu from "./Components/Menu/menu";
import MenuItem from "./Components/Menu/menuItem";
import SubMenu from "./Components/Menu/subMenu";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Components/Icon/icon";
library.add(fas);
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement(Icon, { icon: "bell", size: "1x", theme: "primary" }),
        React.createElement(Button, { size: "sm", btnType: "link", disabled: false, href: "1" }, "1212222"),
        React.createElement(Menu, { mode: "horizontal", defaultOpenSubMenus: ["2"], onSelect: function (index) {
                console.log(index);
            } },
            React.createElement(MenuItem, null, "1111"),
            React.createElement(MenuItem, null, "1112"),
            React.createElement(SubMenu, { title: "111" },
                React.createElement(MenuItem, { index: "2-0" }, "1111"),
                React.createElement(MenuItem, { index: "2-1" }, "1112"))),
        React.createElement(Menu, { mode: "vertical", defaultOpenSubMenus: ["2"], onSelect: function (index) {
                console.log(index);
            } },
            React.createElement(MenuItem, null, "1111"),
            React.createElement(MenuItem, null, "1112"),
            React.createElement(SubMenu, { title: "111" },
                React.createElement(MenuItem, { index: "2-0" }, "1111"),
                React.createElement(MenuItem, { index: "2-1" }, "1112")))));
}
export default App;
