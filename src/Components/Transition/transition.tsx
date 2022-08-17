import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";
import { TransitionChildren } from "react-transition-group/Transition";
import { menuItemProps } from "../Menu/menuItem";

type AnimationName =
  | "zoom-in-top"
  | "zoom-in-left"
  | "zoom-in-bottom"
  | "zoom-in-right";

type TransitionProps = CSSTransitionProps & {
  animation?: AnimationName;
  wrapper?: boolean;
};

const Transition: React.FC<TransitionProps> = (props) => {
  const { children, classNames, animation, wrapper, ...restProps } = props;
  return (
    <CSSTransition
      classNames={classNames ? classNames : animation}
      {...restProps}
    >
      {wrapper ? (
        <div>{children as React.FunctionComponentElement<TransitionProps>}</div>
      ) : (
        children
      )}
    </CSSTransition>
  );
};
Transition.defaultProps = {
  unmountOnExit: true,
  appear: true,
};

export default Transition;
