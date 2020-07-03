import React from 'react'
import Navbar, { BurgerNavbarTablet, BurgerNavbarPhone } from '../components/navbar'
import MenuDrawer, { MenuDrawerPhone } from '../components/menuDrawer.js'
import Footer from '../components/footer'
import Breakpoint from
  '../components/responsive_utilities/breakpoint'
import TabletBreakpoint from
  '../components/responsive_utilities/breakpoint_tablet'
import PhoneBreakpoint from
  '../components/responsive_utilities/breakpoint_phone'

class NotFoundPage extends React.Component {
  componentDidMount(){
    document.title = "Page Not Found - Dibo"
  }

  render() {
    return (
      <div id="NotFoundPage">
        {/* navbar */}
        <div id="navbarHolder">
          <Breakpoint><Navbar/></Breakpoint>
          <TabletBreakpoint><BurgerNavbarTablet/><MenuDrawer/></TabletBreakpoint>
          <PhoneBreakpoint><BurgerNavbarPhone/><MenuDrawerPhone/></PhoneBreakpoint>
        </div>


        <main>
          <div className="notFoundBox">
            <p class="notfound">404</p>
            <p>Page was not found! Go back to the front page by clicking the button below.</p>
            <p class="backButton"><a href="/">Back to the<br></br>Front Page</a></p>
          </div>
        </main>
        {/* footer */}
        <Breakpoint><Footer className="footer"/></Breakpoint>
        <TabletBreakpoint><Footer className="footer footer-tablet"/></TabletBreakpoint>
        <PhoneBreakpoint><Footer className="footer footer-phone"/></PhoneBreakpoint>
      </div>
    );
  }
}

export default NotFoundPage;
