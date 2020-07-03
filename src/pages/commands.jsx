import React from 'react'
import Navbar, { BurgerNavbarTablet, BurgerNavbarPhone } from '../components/navbar'
import MenuDrawer, { MenuDrawerPhone } from '../components/menuDrawer.js'
import Footer from '../components/footer'
import CommandListHolder from '../components/commandListHolder'
import messages from '../helpMessages.json'
import Breakpoint from
  '../components/responsive_utilities/breakpoint'
import TabletBreakpoint from
  '../components/responsive_utilities/breakpoint_tablet'
import PhoneBreakpoint from
  '../components/responsive_utilities/breakpoint_phone'

class CommandsPage extends React.Component {
  componentDidMount(){
    document.title = "Commands - Dibo"

    loadCommandList( "Fun Commands" );
  }

  render() {
    return (
      <div id="CommandsPage">
        {/* navbar */}
        <div id="navbarHolder">
          <Breakpoint><Navbar/></Breakpoint>
          <TabletBreakpoint><BurgerNavbarTablet/><MenuDrawer/></TabletBreakpoint>
          <PhoneBreakpoint><BurgerNavbarPhone/><MenuDrawerPhone/></PhoneBreakpoint>
        </div>
        {/* main */}
        <Breakpoint><CommandListHolder className="page-wrapper"/></Breakpoint>
        <TabletBreakpoint><CommandListHolder className="page-wrapper page-wrapper-tablet"/></TabletBreakpoint>
        <PhoneBreakpoint><CommandListHolder className="page-wrapper page-wrapper-phone"/></PhoneBreakpoint>
        {/* footer */}
        <Breakpoint><Footer className="footer"/></Breakpoint>
        <TabletBreakpoint><Footer className="footer footer-tablet"/></TabletBreakpoint>
        <PhoneBreakpoint><Footer className="footer footer-phone"/></PhoneBreakpoint>
      </div>
    );
  }
}

export function loadCommandList( type ) {
  const data = messages.messages.filter( msg => msg.type === type );
  const listElement = document.querySelector('#commandList');
  let list = '';
  data.forEach( cmd => {
    const regex = /`/ig;
    let usage = cmd.usage
      .replace(regex, '')
      .replace(/</gi,'&lt;')
      .replace(/>/gi,'&gt;')
      .replace(/\n/gi, '<br/>')
      .replace(/.db/gm, '<span>.db</span>');

    list += `
      <tr>
        <td>${cmd.name}</td>
        <td>${cmd.description}</td>
        <td>${usage}</td>
      </tr>
            `;
  });
  listElement.children[0].children[1].innerHTML = list;

  // set active tab
  activeTab( type );
}

function activeTab ( type ) {
  type = type.replace(' Commands', '');
  const menu = document.querySelector('#commandMenu').children[0];
  const oldElement = [...menu.children].find( elem => elem.classList.contains( 'active' ));
  if ( oldElement ) oldElement.classList.remove( 'active' );
  const element = [...menu.children].find( elem => elem.innerHTML === `<p>${type}</p>`);
  element.classList.add('active');
}

export default CommandsPage;
