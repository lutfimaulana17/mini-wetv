import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

import { Home } from "../pages";
import { Provider } from 'react-redux';
import store from '../redux/store';
import { Footer, Header } from "../components";
import { ShallowMock } from './shallow-mock.jsx';

import { ImgLogo } from '../assets'

describe("rendering components home", () => {
    it("renders Home component without crashing", () => {
        shallow(ShallowMock(<Home />, store));
    })

    it("renders Home header without crashing", () => {
        const wrapper = shallow(<Header />)

        const headerLogo = (<img src={ImgLogo} className="header-img" />)
        expect(wrapper.contains(headerLogo)).toEqual(true);

        const headerMenu1 = (<p className="header-menu header-menu-active">Untukmu</p>)
        expect(wrapper.contains(headerMenu1)).toEqual(true);

        const headerMenu2 = (<p className="header-menu">Semua</p>)
        expect(wrapper.contains(headerMenu2)).toEqual(true);

        let defaultLang = wrapper.find('#header-input-lang').props().defaultValue;
        expect(defaultLang).toEqual('1');
    })
})

describe("test logic components home", () => {
    const wrapper = shallow(ShallowMock(<Home />, store));
    
    wrapper.find("#menu-film2").simulate("click");
    it("button menu 2 click - update content", () => {
        const titleSectionContent = wrapper.find(".home-menu-item-text-active").text();
        expect(titleSectionContent).toEqual('Now Playing');
    })

    wrapper.find("#menu-film3").simulate("click");
    it("button menu 3 click - update content", () => {
        const titleSectionContent = wrapper.find(".home-menu-item-text-active").text();
        expect(titleSectionContent).toEqual('Popular');
    })

    wrapper.find("#menu-film4").simulate("click");
    it("button menu 4 click - update content", () => {
        const titleSectionContent = wrapper.find(".home-menu-item-text-active").text();
        expect(titleSectionContent).toEqual('Top Rated');
    })

    wrapper.find("#menu-film5").simulate("click");
    it("button menu 5 click - update content", () => {
        const titleSectionContent = wrapper.find(".home-menu-item-text-active").text();
        expect(titleSectionContent).toEqual('Upcoming');
    })
})

describe("snapshots component Home", () => {
    it("Home snapshots", () => {
      const homeSnap = shallow(ShallowMock(<Home />, store));
      expect(toJson(homeSnap)).toMatchSnapshot()
    })
  
    it("Home Header snapshots", () => {
        const homeHeaderSnap = shallow(<Header />);
        expect(toJson(homeHeaderSnap)).toMatchSnapshot()
    })

    it("Home Footer snapshots", () => {
        const homeFooterSnap = shallow(<Footer />);
        expect(toJson(homeFooterSnap)).toMatchSnapshot()
    })
})

