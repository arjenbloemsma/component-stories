import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";

import 'bootstrap/dist/css/bootstrap.css';

import MultiSelectDropDown from "../components/MultiSelectDropDown";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
  ));

const list = [
  { value: "One", selected: true },
  { value: "Two" },
  { value: "Three" },
  { value: "Four", label: "Four Label" }
];
storiesOf("MultiSelectDropDown", module).add("simple list", () => (
  <MultiSelectDropDown
    label="Empty dropdown"
    hidden={false}
    options={list}
    initialValues={["c"]}
  />
));
