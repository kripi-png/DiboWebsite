import React from 'react';
import './index.css';

export default class Navbar extends React.Component {
  render() {
    return <ul className="navbar">
            <li className="navItem title"><a href="/#"><span>Dibo</span></a></li>
            <li className="navItem"><a href="/commands.html">Commands<span>&trade;</span></a></li>
            <li className="navItem"><a href="https://discord.gg/vn3ejPR" target="_blank">Dibo's Home <span className="heart">&#60;3</span></a></li>
            <li className="navItem inviteButton">
              <a
                href="https://discordapp.com/oauth2/authorize?client_id=536500891969388564&scope=bot&permissions=290794542"
                target="_blank"
              >Invite to Server</a>
            </li>
          </ul>;
  }
}
