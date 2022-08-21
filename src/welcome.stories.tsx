import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("Welcome page", module).add(
  "welcome",
  () => {
    return (
      <>
        <h1>欢迎来到 LeeHS's React 组件库</h1>
        <h3>安装方法</h3>
        <code>npm install vk-component-libary --save</code>
      </>
    );
  },
  { info: { disable: true } }
);
