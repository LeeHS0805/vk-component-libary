import React, { useContext, useEffect } from "react";
import classnames from "classnames";
import { MenuContext } from "./menu";

export interface menuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const MenuItem: React.FC<menuItemProps> = (props) => {
  const { index, disabled, className, style, children } = props;
  const menuContext = useContext(MenuContext);
  const classes = classnames("menu-item", className, {
    "is-disabled": disabled,
    "is-active": menuContext.index === index,
  });
  const handleClick = () => {
    if (menuContext.onSelect && !disabled && typeof index === "string") {
      menuContext.onSelect(index);
    }
  };
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};

MenuItem.displayName = "MenuItem";
export default MenuItem;
