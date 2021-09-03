import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

import { Home } from "../pages";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import { Footer, Header, ItemMovie } from "../components";

import { ImgLogo } from '../assets'

describe("rendering components home", () => {
    it("renders Home component without crashing", () => {
        shallow(<Provider store={store}>
                    <Router>
                        <Home />
                    </Router>
                </Provider>);
    })

    it("renders Home header without crashing", () => {
        const wrapper = mount(<Router><Header /></Router>)

        const headerLogo = (<img src={ImgLogo} className="header-img" />)
        expect(wrapper.contains(headerLogo)).toEqual(true);

        const headerMenu1 = (<p className="header-menu header-menu-active">Untukmu</p>)
        expect(wrapper.contains(headerMenu1)).toEqual(true);

        const headerMenu2 = (<p className="header-menu">Semua</p>)
        expect(wrapper.contains(headerMenu2)).toEqual(true);
        let defaultLang = wrapper.find('#header-input-lang').props().defaultValue;
        
        expect(defaultLang).toEqual('1');
    })

    it("renders Home item movie without crashing", () => {
        const wrapper = mount(<Router><ItemMovie id="1" title="Testing" poster_path="/iXbWpCkIauBMStSTUT9v4GXvdgH.jpg" /></Router>)

        const title = wrapper.find('.home-main-section-content-item-title').text()
        expect(title).toEqual("Testing")
        expect(wrapper.props().children.props.id).toEqual("1");
        expect(wrapper.props().children.props.poster_path).toEqual("/iXbWpCkIauBMStSTUT9v4GXvdgH.jpg");
        // console.log(wrapper.html())
        // console.log(wrapper.debug())
    })

    it("renders Home footer without crashing", () => {
        const wrapper = mount(<Footer />)

        const textCopyRight = wrapper.find('#text-copyright').text()
        expect(textCopyRight).toEqual('Copyright © 1998-2021 Image Future Investment (HK) Limited.');
    })
})

describe("test logic components home", () => {
    const wrapper = mount(
        <Provider store = {store}>
            <Router>
                <Home  />
            </Router>
        </Provider>
    );
    
    it("button category all click - update content", () => {
        wrapper.find("#menu-film1").simulate("click");
        const titleSectionContent = wrapper.find(".home-menu-item-text-active").text();
        expect(titleSectionContent).toEqual('Semua');
    })

    it("button category now playing click - update content", () => {
        wrapper.find("#menu-film2").simulate("click");
        const titleSectionContent = wrapper.find(".home-menu-item-text-active").text();
        expect(titleSectionContent).toEqual('Now Playing');
    })

    it("button category popular click - update content", () => {
        wrapper.find("#menu-film3").simulate("click");
        const titleSectionContent = wrapper.find(".home-menu-item-text-active").text();
        expect(titleSectionContent).toEqual('Popular');
    })
    
    it("button category top rated click - update content", () => {
        wrapper.find("#menu-film4").simulate("click");
        const titleSectionContent = wrapper.find(".home-menu-item-text-active").text();
        expect(titleSectionContent).toEqual('Top Rated');
    })

    it("button category upcoming click - update content", () => {
        wrapper.find("#menu-film5").simulate("click");
        const titleSectionContent = wrapper.find(".home-menu-item-text-active").text();
        expect(titleSectionContent).toEqual('Upcoming');
    })
})

describe("snapshots component Home", () => {
    it("Home snapshots", () => {
      const homeSnap = shallow(<Provider store={store}><Home /></Provider>);
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

