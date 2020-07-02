import React from 'react'
import Navbar from './navbar'
import CommandBox from './commandBox'
import Footer from './footer'

const gameCommands = {
  title:'Game Commands',
  elements: [
    {title: 'Rainbow 6: Siege', info: 'user stats, map / operator info'},
    {title: 'Minecraft', info: 'user info, server status'},
    {title: 'CSGO', info: 'user stats, more'},
    {title: 'Valorant', subtitle: '?'},
    {title: 'League of Legends', subtitle: '?'},
    {title: 'more', subtitle: '?'}
  ]
};

const normalCommands = {
  title:'Useful and Fun commands',
  elements: [
    {title: 'user / server info'},
    {title: 'avatar'},
    {title: 'animal pics & facts', subtitle: 'aww'},
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
