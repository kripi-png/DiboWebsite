import React from 'react';
import CommandMenuItem from './commandMenuItem'

class CommandMenu extends React.Component {
  render() {
    return (
      <div id="commandMenu">
        <h1>Commands</h1>
        <ul>
          <CommandMenuItem text={"Fun"}/>
          <CommandMenuItem text={"Misc"}/>
          <CommandMenuItem text={"Game"}/>
          <CommandMenuItem text={"Anime"}/>
        </ul>
      </div>
    );
  }
}

export default CommandMenu;
