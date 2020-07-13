import React from 'react'
import CommandBox from './commandBox'

const gameCommands = {
  title:'Game Commands',
  elements: [
    {title: 'Rainbow 6: Siege', info: 'user stats, map / operator info'},
    {title: 'Minecraft', info: 'user info, server status'},
    {title: 'CSGO', info: 'user stats, more'},
    {title: 'Valorant', subtitle: '?', tooltip: 'may  be implemented later'},
    {title: 'League of Legends', subtitle: '?', tooltip: 'may  be implemented later'},
    {title: 'more', subtitle: '?', tooltip: 'may  be implemented later'}
  ]
};
const normalCommands = {
  title:'Useful and Fun commands',
  elements: [
    {title: 'poll'},
    {title: 'user / server info'},
    {title: 'avatar'},
    {title: 'animal pics and facts', subtitle: 'aww'},
    {title: 'random num.gen.'},
    {title: 'coin flip'},
    {title: 'MyAnimelist commands'},
    {title: 'more'}
  ]
};

export default class FrontPage extends React.Component {
  constructor( props ) {
    super( props );
    this.props = props;
    this.gameCommands = gameCommands;
    this.normalCommands = normalCommands;
  }

  render() {
    return (
      <div {...this.props }>
        <h2 className="pageTitle">Multi-purpose <span>Discord Bot</span></h2>
        <div className="boxHolder">
          <CommandBox data={this.gameCommands}/>
          <CommandBox data={this.normalCommands}/>
        </div>
      </div>
    );
  }
}
