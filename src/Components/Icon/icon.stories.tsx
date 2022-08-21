import React from "react";
import { storiesOf } from "@storybook/react";
import Icon from "./icon";
import Button from "../Button/button";
const style = {
  marginRight: "30px",
};
const defaultIcon = () => (
  <div style={{ display: "flex" }}>
    <Icon icon="check" size="3x" style={style} />
    <Icon icon="anchor" size="3x" style={style} />
    <Icon icon="trash" size="3x" style={style} />
    <Icon icon="times" size="3x" style={style} />
    <Button btnType="primary" disabled={false} size="lg">
      <Icon
        icon="check"
        style={{
          margin: "0 15px",
        }}
      />
      check
    </Button>
  </div>
);

const iconWithTheme = () => (
  <div style={{ display: "flex" }}>
    <Icon icon="check" size="3x" theme="success" style={style} />
    <Icon icon="times" size="3x" theme="danger" style={style} />
    <Icon icon="anchor" size="3x" theme="primary" style={style} />
    <Icon icon="exclamation-circle" size="3x" theme="warning" />
  </div>
);

const iconWithAction = () => (
  <div style={{ display: "flex" }}>
    <Icon icon="spinner" size="3x" spin theme="primary" style={style} />
    <Icon icon="spinner" pulse size="3x" theme="success" />
  </div>
);

storiesOf("Icon", module)
  .add("Icon", defaultIcon)
  .add("不同主题的 Icon", iconWithTheme)
  .add("Loading Icon", iconWithAction);
