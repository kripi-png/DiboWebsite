import React from 'react'
import { loadCommandList } from '../pages/commands'

class commandMenuItem extends React.Component {
  constructor( props ) {
    super( props );
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    loadCommandList( this.props.text + ' Commands' );
  }

  render() {
    return (
      <li onClick={this.handleClick}><p>{this.props.text}</p></li>
    );
  }
}

export default commandMenuItem;
