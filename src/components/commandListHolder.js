import React from 'react'
import CommandMenu from './commandMenu'
import CommandList from './commandList'

class commandListHolder extends React.Component {
  constructor( props ) {
    super( props );
    this.props = props;
  }

  render() {
    return (
      <div {...this.props }>
        <h2 className="pageTitle"><span>Commands</span></h2>
        <div className="commandHolder">
          <CommandMenu/>
          <CommandList/>
        </div>
      </div>
    );
  }
}

export default commandListHolder;
