import React from "react";
export interface menuItemProps {
    index?: string;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
declare const MenuItem: React.FC<menuItemProps>;
export default MenuItem;
