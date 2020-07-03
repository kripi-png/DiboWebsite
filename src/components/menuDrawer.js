import React from 'react'
import { Link } from 'react-router-dom'

export default class MenuDrawerTablet extends React.Component {
  render() {
    return (
      <div id="menuDrawer">
        <ul>
          <li className="navItem"><Link to={process.env.PUBLIC_URL + '/'}>Home</Link></li>
          <li className="navItem"><Link to={process.env.PUBLIC_URL + '/commands'}>Commands</Link></li>
          <li className="navItem">
            <a
              href="https://discord.gg/vn3ejPR"
              target="_blank"
              rel="noopener noreferrer">
              Dibo's Home <span className="heart">&#60;3</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export class MenuDrawerPhone extends React.Component {
  render() {
    return (
      <div id="menuDrawer" className="drawer-phone">
        <ul>
          <li className="navItem"><Link to={process.env.PUBLIC_URL + '/'}>Home</Link></li>
          <li className="navItem"><Link to={process.env.PUBLIC_URL + '/commands'}>Commands</Link></li>
          <li className="navItem">
            <a
              href="https://discord.gg/vn3ejPR"
              target="_blank"
              rel="noopener noreferrer">
              Dibo's Home <span className="heart">&#60;3</span>
            </a>
          </li>
          <li className="navItem inviteButton">
            <a
              href="https://discordapp.com/oauth2/authorize?client_id=536500891969388564&scope=bot&permissions=290794542"
              target="_blank"
              rel="noopener noreferrer">
              Invite to Server
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
