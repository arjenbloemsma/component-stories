import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withConsole } from '@storybook/addon-console';
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

  storiesOf("Button", module)
  .add("console test", () => (
    <Button onClick={() => console.log('Data:', 1, 3, 4)}>😀 😎</Button>
  ));

const list = [
  { key: 1, value: "One" },
  { key: 2, value: "Two" },
  { key: 3, value: "Three" },
  { key: 4, value: "Four" }
];

const groupedList = [
  {label:'Incoming Payment Methods', children: [
    { key: 1, value: "One" },
    { key: 2, value: "Two" },
    { key: 3, value: "Three" },
    { key: 4, value: "Four" }
  ]}, 
  {label:'Outgoing Payment Methods', children: [
    { key: 5, value: "Five" },
    { key: 6, value: "Six" },
    { key: 7, value: "Seven" }
  ]}
]

storiesOf("MultiSelectDropDown", module)
.addDecorator((storyFn, context) => withConsole()(storyFn)(context))
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
.add("Simple list, both key and value are shown", () => (
  <MultiSelectDropDown
    label="Dropdown simple list 4"
    hidden={false}
    options={list}
    initialValues={[1,3]}
    showkey={true}
  />
))
.add("Simple list, hidden", () => (
  <MultiSelectDropDown
    label="Dropdown simple list 5"
    hidden={true}
    options={list}
    initialValues={[1,3]}
  />
))
.add("Grouped list, none selected", () => (
  <MultiSelectDropDown
    label="Dropdown simple list 6"
    hidden={false}
    options={groupedList}
    grouped={true}
    showkey={false}
  />
))
.add("Grouped list, items 3 and 7 checked", () => (
  <MultiSelectDropDown
    label="Dropdown simple list 6"
    hidden={false}
    options={groupedList}
    grouped={true}
    showkey={false}
    initialValues={[3, 7]}
  />
))
.add("Grouped list, both key and value are shown, none selected", () => (
  <MultiSelectDropDown
    label="Dropdown simple list 7"
    hidden={false}
    options={groupedList}
    grouped={true}
    showkey={true}
  />
))
.add("Grouped list, both key and value are shown, items 3 and 7 checked", () => (
  <MultiSelectDropDown
    label="Dropdown simple list 6"
    hidden={false}
    options={groupedList}
    grouped={true}
    showkey={true}
    initialValues={[3, 7]}
  />
));