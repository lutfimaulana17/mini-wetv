import React from "react";
import { shallow, mount } from "enzyme";
import { Detail } from "../pages";

describe("rendering components detail", () => {
    it("renders Detail component without crashing", () => {
        shallow(<Detail />);
    })
})