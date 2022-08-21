import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Upload } from "./upload";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Icon from "../Icon/icon";
library.add(fas);
const SimpleUpload = () => {
  return (
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      onChange={action("changed")}
      onRemove={action("removed")}
      drag
    >
      <Icon icon="upload" size="4x" theme="secondary" />
      <br />
      <br />
      <p>Drag file over to upload</p>
    </Upload>
  );
};

storiesOf("Upload component", module).add("Upload", SimpleUpload);
