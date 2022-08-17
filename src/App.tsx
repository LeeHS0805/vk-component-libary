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
  return (
    <div className="App">
      <Icon icon="bell" size="1x" theme="primary" />
      <Button size={"sm"} btnType={"link"} disabled={false} href={"1"}>
        1212222
      </Button>
      <Menu
        mode="horizontal"
        defaultOpenSubMenus={["2"]}
        onSelect={(index) => {
          console.log(index);
        }}
      >
        <MenuItem>1111</MenuItem>
        <MenuItem>1112</MenuItem>
        <SubMenu title="111">
          <MenuItem index="2-0">1111</MenuItem>
          <MenuItem index="2-1">1112</MenuItem>
        </SubMenu>
      </Menu>
      <Menu
        mode="vertical"
        defaultOpenSubMenus={["2"]}
        onSelect={(index) => {
          console.log(index);
        }}
      >
        <MenuItem>1111</MenuItem>
        <MenuItem>1112</MenuItem>
        <SubMenu title="111">
          <MenuItem index="2-0">1111</MenuItem>
          <MenuItem index="2-1">1112</MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default App;
