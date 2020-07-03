import React from 'react'
import CommandMenu from './commandMenu'
import CommandList from './commandList'

class commandListHolder extends React.Component {
  render() {
    return (
      <div className="commandListHolder">
        <CommandMenu/>
        <CommandList/>
      </div>
    );
  }
}

export default commandListHolder;
