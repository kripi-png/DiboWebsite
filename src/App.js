import React from 'react'
import Navbar from './navbar'
import CommandBox from './commandBox'
import Footer from './footer'

const gameCommands = {
  title:'Game Commands',
  elements: [
    {title: 'Rainbow 6: Siege', subtitle: 'user stats, map / operator info'},
    {title: 'Minecraft', subtitle: 'user info, server status'},
    {title: 'CSGO', subtitle: 'user stats, more'},
    {title: 'Valorant', question: true},
    {title: 'League of Legends', question: true},
    {title: 'more', question: true}
  ]
};

const normalCommands = {
  title:'Useful and Fun commands',
  elements: [
    {title: 'user / server info'},
    {title: 'avatar'},
    {title: 'animal pics & facts'},
    {title: 'random num. gen. / coin flip'},
    {title: 'more'}
  ]
};

function App() {
  return (
    <div id="App">
      <div id="navbarHolder"><Navbar/></div>
      <h1 className="botTitle">Multi-purpose <span> Discord Bot</span></h1>
      <div className="boxHolder">
        <CommandBox data={gameCommands}/>
        <CommandBox data={normalCommands}/>
      </div>
      <div id="footerHolder"><Footer/></div>
    </div>
  );
}

export default App;
