import React from 'react';
import './index.css';

export default class Navbar extends React.Component {
  render() {
    return <div className="footer">
              <div className="footerItem title">
                <div className="titleHolder">
                  <p>Dibo</p>
                  <p className="copyright">© 2020 kripi__. All rights reserved</p>
                </div>
              </div>
              <div className="separator"></div>
              <div className="footerItem"></div>
              <div className="separator"></div>
              <div className="footerItem"></div>
          </div>
  }
}
