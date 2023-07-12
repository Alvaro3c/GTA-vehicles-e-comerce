import React from "react";
import { shallow } from "enzyme";
import SearchVehicle from "./SearchVehicle";

describe("SearchVehicle", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SearchVehicle />);
    expect(wrapper).toMatchSnapshot();
  });
});
