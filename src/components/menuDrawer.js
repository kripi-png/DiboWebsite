import React from 'react'
import { Link } from 'react-router-dom'

export default class MenuDrawer extends React.Component {
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
