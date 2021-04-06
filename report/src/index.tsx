// import "./wdyr";
import * as React from "react";
import { render } from "react-dom";
import "@patternfly/react-core/dist/styles/base.css";
import { ExpandableDataList } from "./app/DataList";
// @ts-ignore
import results from "@coverage/results.json";
import "./styles.css";

render(
  <ExpandableDataList report={results} />,
  document.getElementById("root")
);
