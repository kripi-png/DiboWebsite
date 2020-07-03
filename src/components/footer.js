import React from 'react'

export default class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.props = props;
  }

  render() {
    return (
      <footer {...this.props }>
        <div className="content">
          <div className="footerItem">
            <h1 className="title">Dibo</h1>
            <p className="copyright">© 2020 kripi__. All rights reserved</p>
            <p className="credits">Nav burger made by <a href="https://www.flaticon.com/authors/bqlqn" title="bqlqn" target="_blank" rel="noopener noreferrer">bqlqn</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noopener noreferrer">www.flaticon.com</a></p>
          </div>
        </div>
      </footer>
    );
  }
}
