// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, text } from "@storybook/addon-knobs";
import styles from "@sambego/storybook-styles/dist/index";

import { SIZE_OPTIONS, NAMES } from "./consts";
import SPACINGS_AFTER from "../common/getSpacingToken/consts";

import Illustration from "./index";

storiesOf("Illustration", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .add("Playground", () => {
    const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.MEDIUM);
    const name = select("Name", Object.values(NAMES), "Accommodation");
    const dataTest = text("dataTest", "test");
    const spaceAfter = select("spaceAfter", [undefined, ...Object.values(SPACINGS_AFTER)]);
    return <Illustration size={size} name={name} dataTest={dataTest} spaceAfter={spaceAfter} />;
  });
