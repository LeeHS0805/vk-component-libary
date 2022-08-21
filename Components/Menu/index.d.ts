import { FC } from "react";
import { MenuProps } from "./menu";
import { SubMenuProps } from "./subMenu";
import { menuItemProps } from "./menuItem";
export declare type IMenuComponent = FC<MenuProps> & {
    Item: FC<menuItemProps>;
    SubMenu: FC<SubMenuProps>;
};
declare const TransMenu: IMenuComponent;
export default TransMenu;
