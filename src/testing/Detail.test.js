import React from "react";
import { shallow, mount } from "enzyme";
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import toJson from "enzyme-to-json";
import moment from 'moment';

import { Detail } from "../pages";
import store from '../redux/store';

const changeFormatDate = (date) => {
    return moment(date).format('LL')
} 

describe("rendering components detail", () => {
    it("renders Detail component without crashing", () => {
        shallow(<Provider store={store}>
                    <Router>
                        <Detail />
                    </Router>
                </Provider>);
    })
})

describe("test function components detail", () => {
    const date = changeFormatDate('2021-08-25');
    expect(date).toEqual('August 25, 2021');
})

describe("snapshots component detail", () => {
    it("Detail snapshots", () => {
      const detailSnap = shallow(<Provider store={store}><Router><Detail /></Router></Provider>);
      expect(toJson(detailSnap)).toMatchSnapshot()
    })
})