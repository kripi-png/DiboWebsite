import React from 'react'
import Navbar, { BurgerNavbarTablet, BurgerNavbarPhone } from '../components/navbar'
import MenuDrawer, { MenuDrawerPhone } from '../components/menuDrawer.js'
import Footer from '../components/footer'
import FrontPage from '../components/frontPage'
import Breakpoint from
  '../components/responsive_utilities/breakpoint'
import TabletBreakpoint from
  '../components/responsive_utilities/breakpoint_tablet'
import PhoneBreakpoint from
  '../components/responsive_utilities/breakpoint_phone'

export default class MainPage extends React.Component {
  componentDidMount(){
    document.title = "Home - Dibo"
  }

  render() {
    return (
      <div id="MainPage">
        {/* navbar */}
        <div id="navbarHolder">
          <Breakpoint><Navbar/></Breakpoint>
          <TabletBreakpoint><BurgerNavbarTablet/><MenuDrawer/></TabletBreakpoint>
          <PhoneBreakpoint><BurgerNavbarPhone/><MenuDrawerPhone/></PhoneBreakpoint>
        </div>
        {/* main */}
        <Breakpoint><FrontPage className="page-wrapper"></FrontPage></Breakpoint>
        <TabletBreakpoint><FrontPage className="page-wrapper page-wrapper-tablet"></FrontPage></TabletBreakpoint>
        <PhoneBreakpoint><FrontPage className="page-wrapper page-wrapper-phone"></FrontPage></PhoneBreakpoint>
        {/* footer */}
        <Breakpoint><Footer className="footer"/></Breakpoint>
        <TabletBreakpoint><Footer className="footer footer-tablet"/></TabletBreakpoint>
        <PhoneBreakpoint><Footer className="footer footer-phone"/></PhoneBreakpoint>
      </div>
    );
  }
}
