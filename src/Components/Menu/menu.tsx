import React, { createContext, FC, useState } from "react";
import classnames from "classnames";
import { menuItemProps } from "./menuItem";

type MenuMode = "horizontal" | "vertical";
type selectedCallback = (selectedIndex: string) => void;

export interface MenuProps {
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: selectedCallback;
  defaultOpenSubMenus?: string[];
  children?: React.ReactNode;
}

interface IMenuContext {
  index: string;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
  onSelect?: selectedCallback;
}

export const MenuContext = createContext<IMenuContext>({ index: "0" });

const Menu: FC<MenuProps> = (props) => {
  const {
    defaultIndex,
    className,
    mode,
    style,
    children,
    defaultOpenSubMenus,
    onSelect,
  } = props;
  const [currentActiveIndex, setCurrentActiveIndex] = useState(defaultIndex);
  const classes = classnames("vk-menu", className, {
    "menu-vertical": mode === "vertical",
    "menu-horizontal": mode !== "vertical",
  });
  const handleClick = (index: string) => {
    setCurrentActiveIndex(index);
    if (onSelect) onSelect(index);
  };
  const passContext: IMenuContext = {
    index: currentActiveIndex ? currentActiveIndex : "0",
    mode,
    defaultOpenSubMenus,
    onSelect: handleClick,
  };
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<menuItemProps>;
      const { displayName } = childElement.type;
      if (displayName === "MenuItem" || displayName === "SubMenu") {
        return React.cloneElement(childElement, {
          index: `${index}`,
        });
      } else {
        console.error(
          "Warning: Menu has a child which is not a MenuItem component"
        );
      }
    });
  };
  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: "0",
  mode: "horizontal",
  defaultOpenSubMenus: [],
};
export default Menu;
