import React from 'react';
import './index.css';

export default class Navbar extends React.Component {
  render() {
    return <ul className="navbar">
            <li className="navItem title"><a href="/#"><span>Dibo</span></a></li>
            <li className="navItem"><a href="/commands.html">Commands</a></li>
            <li className="navItem"><a href="/#">Dibo's Home <span className="heart">&#60;3</span></a></li>
            <li className="navItem inviteButton">Invite to Server</li>
          </ul>;
  }
}
