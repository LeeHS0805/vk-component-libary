import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "./button";

const style = {
  marginRight: "10px",
};
const defaultButton = () => (
  //@ts-ignore
  <Button onClick={action("clicked")}> default button </Button>
);

const buttonWithSize = () => (
  <div>
    <Button size="lg" style={style}>
      large button{" "}
    </Button>
    <Button size="sm"> small button </Button>
  </div>
);

const buttonWithType = () => (
  <>
    <Button btnType="primary" style={style}>
      {" "}
      primary button{" "}
    </Button>
    <Button btnType="danger" style={style}>
      {" "}
      danger button{" "}
    </Button>
    <Button btnType="link" href="https://google.com" style={style}>
      {" "}
      link button{" "}
    </Button>
  </>
);
storiesOf("Button", module)
  .add("Button", defaultButton)
  .add("不同尺寸的 Button", buttonWithSize)
  .add("不同类型的 Button", buttonWithType);
