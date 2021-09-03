import React from "react";
import { shallow, mount } from "enzyme";
import App from "../App";

it("renders App component without crashing", () => {
  shallow(<App />);
})