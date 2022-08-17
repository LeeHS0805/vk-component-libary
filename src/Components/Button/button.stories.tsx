import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "./button";

export const defaultButton = () => <Button> default button </Button>;

export const buttonWithSize = () => (
  <>
    <Button size="lg"> large button </Button>
    <Button size="sm"> small button </Button>
  </>
);

export const buttonWithType = () => (
  <>
    <Button btnType="default"> default button </Button>
    <Button btnType="primary"> primary button </Button>
    <Button btnType="danger"> danger button </Button>
    <Button btnType="link" href="">
      {" "}
      link button{" "}
    </Button>
  </>
);

storiesOf("Button", module)
  .add("默认的 Button", defaultButton)
  .add("不同尺寸的 Button", buttonWithSize)
  .add("不同类型的 Button", buttonWithType);
