import React from 'react'
import Navbar, { BurgerNavbarTablet, BurgerNavbarPhone } from '../components/navbar'
import MenuDrawer, { MenuDrawerPhone } from '../components/menuDrawer.js'
import Footer from '../components/footer'
import Main from '../components/main'
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
        <Breakpoint><Main className="page-wrapper"></Main></Breakpoint>
        <TabletBreakpoint><Main className="page-wrapper page-wrapper-tablet"></Main></TabletBreakpoint>
        <PhoneBreakpoint><Main className="page-wrapper page-wrapper-phone"></Main></PhoneBreakpoint>
        {/* footer */}
        <Breakpoint><Footer className="footer"/></Breakpoint>
        <TabletBreakpoint><Footer className="footer footer-tablet"/></TabletBreakpoint>
        <PhoneBreakpoint><Footer className="footer footer-phone"/></PhoneBreakpoint>
      </div>
    );
  }
}
