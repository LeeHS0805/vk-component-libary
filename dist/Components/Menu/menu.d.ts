import React, { FC } from "react";
declare type MenuMode = "horizontal" | "vertical";
declare type selectedCallback = (selectedIndex: string) => void;
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
export declare const MenuContext: React.Context<IMenuContext>;
declare const Menu: FC<MenuProps>;
export default Menu;
