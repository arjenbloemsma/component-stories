import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";

import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-multiselect/css/bootstrap-multiselect.css'
import MultiSelectDropDown from "../components/MultiSelectDropDown";

const handleChange = (e) => console.log("Chnages!");

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
  { key: 1, value: "One" },
  { key: 2, value: "Two" },
  { key: 3, value: "Three" },
  { key: 4, value: "Four" }
];

storiesOf("MultiSelectDropDown", module)
.add("Simple list", () => (
  <MultiSelectDropDown
    label="Dropdown simple list 1"
    hidden={false}
    options={list}
    onChange={handleChange}
  />
))
.add("Simple list, with item 3 checked", () => (
  <MultiSelectDropDown
    label="Dropdown simple list 2"
    hidden={false}
    options={list}
    initialValues={[3]}
  />
))
.add("Simple list, with items 1 and 3 checked", () => (
  <MultiSelectDropDown
    label="Dropdown simple list 3"
    hidden={false}
    options={list}
    initialValues={[1,3]}
  />
))
.add("Simple list, both key and value ar shown", () => (
  <MultiSelectDropDown
    label="Dropdown simple list 4"
    hidden={false}
    options={list}
    initialValues={[1,3]}
    showKey={true}
  />
));