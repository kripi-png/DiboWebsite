import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import CommandListHolder from '../components/commandListHolder'
import messages from '../helpMessages.json'

class CommandsPage extends React.Component {
  componentDidMount(){
    document.title = "Commands - Dibo"
  }

  render() {
    return (
      <div id="CommandsPage">
        <main>
          <div id="navbarHolder"><Navbar/></div>
          <CommandListHolder/>
        </main>
        <div id="footerHolder"><Footer/></div>
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
    let usage = cmd.usage.replace(regex, '').replace(/\</gi,'&lt;').replace(/\>/gi,'&gt;').replace(/\n/gi, '<br/>');
    if ( cmd.usage.includes('\n') ) { usage = '<span>.db </span>'.concat(usage); }

    list += `
      <tr>
        <td>${cmd.name}</td>
        <td>${cmd.description}</td>
        <td>${usage}</td>
      </tr>
            `;
  });
  listElement.children[0].children[1].innerHTML = list;
}

export default CommandsPage;
