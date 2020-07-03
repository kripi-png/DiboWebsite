import React from 'react'
import Navbar, { NavbarTablet } from '../components/navbar'
import MenuDrawer from '../components/menuDrawer.js'
import Footer, { FooterTablet } from '../components/footer'
import Main from '../components/main'
import Breakpoint from
  '../components/responsive_utilities/breakpoint'

export default class MainPage extends React.Component {
  componentDidMount(){
    document.title = "Home - Dibo"
  }

  render() {
    return (
      <div id="MainPage">
        <div id="navbarHolder">
          <Breakpoint><Navbar/></Breakpoint>
          <Breakpoint name="tablet"><NavbarTablet/><MenuDrawer/></Breakpoint>
        </div>
        <Breakpoint><Main className="page-wrapper"></Main></Breakpoint>
        <Breakpoint name="tablet">
          <Main className="page-wrapper page-wrapper-tablet"></Main>
        </Breakpoint>
        <Breakpoint><Footer/></Breakpoint>
        <Breakpoint name="tablet"><FooterTablet/></Breakpoint>
      </div>
    );
  }
}
