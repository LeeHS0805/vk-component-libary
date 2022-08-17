import React, { useContext, useState } from "react";
import classnames from "classnames";
import { MenuContext } from "./menu";
import { menuItemProps } from "./menuItem";
import Icon from "../Icon/icon";
import Transition from "../Transition";

export interface SubMenuProps {
  index?: string;
  title?: string;
  className?: string;
  children?: React.ReactNode;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const context = useContext(MenuContext);
  const { index = "", title, className, children } = props;
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>;
  const isOpen =
    index && context.mode === "vertical"
      ? openedSubMenus.includes(index)
      : false;
  const [menuOpen, setOpen] = useState(isOpen);

  const computedActiveClassState = (contextIndex: string, index: string) => {
    return contextIndex === index || contextIndex.startsWith(index);
  };
  const classes = classnames("menu-item submenu-item", className, {
    "is-active": computedActiveClassState(context.index, index),
    "is-vertical": context.mode === "vertical",
    "is-opened": menuOpen,
  });

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(!menuOpen);
  };

  let timer: any;
  const handleMouse = (
    e: React.MouseEvent,
    toggle: boolean,
    wait: number = 150
  ) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setOpen(toggle);
    }, wait);
  };

  const clickEvent =
    context.mode === "vertical"
      ? {
          onClick: handleClick,
        }
      : {};
  const hoverEvent =
    context.mode !== "vertical"
      ? {
          onMouseEnter: (e: React.MouseEvent) => handleMouse(e, true),
          onMouseLeave: (e: React.MouseEvent) => handleMouse(e, false),
        }
      : {};

  const renderChildren = () => {
    const subMenuClasses = classnames("vk-submenu", {
      "vk-menu-opened": menuOpen,
    });

    const childrenComponent = React.Children.map(children, (child, index) => {
      const childrenElement =
        child as React.FunctionComponentElement<menuItemProps>;
      if (childrenElement.type.displayName === "MenuItem") {
        return childrenElement;
      } else {
        console.error(
          "Warning: SubMenu has a child which is not a MenuItem component"
        );
      }
    });
    return (
      <Transition
        in={menuOpen}
        timeout={300}
        animation="zoom-in-top"
        appear
        unmountOnExit
      >
        <ul className={subMenuClasses}>{childrenComponent}</ul>
      </Transition>
    );
  };
  return (
    <li
      key={index}
      className={classes}
      {...hoverEvent}
      data-testid="test-sub-menu"
    >
      <div className="submenu-title" {...clickEvent}>
        {title}
        <Icon icon="angle-down" className="arrow-icon" />
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = "SubMenu";

export default SubMenu;
