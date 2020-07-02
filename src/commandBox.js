import React from 'react';
import './index.css';

export default class CommandBox extends React.Component {
  renderElement( elem, i ) {
    let classes; if ( elem.question ) classes = "commandItem question"
    else classes = "commandItem";

    let subtitle; if (elem.subtitle ) subtitle= <ul><li>{elem.subtitle}</li></ul>
    else subtitle = null;

    return (
      <li className={classes} key={i}><span>{elem.title}</span>
        {subtitle || ''}
      </li>
    )
  }

  render() {
    const data = this.props.data;
    return <ul className="commandBox">
              <li className="commandItem title">{data.title}</li>
              {data.elements.map( (elem, i ) => {
                return ( this.renderElement( elem, i ) )
              })}
          </ul> ;
  }
}

// {this.props.data}
// <li className="commandItem title">Game Commands</li>
//
// <li className="commandItem"><span>Rainbow 6: Siege</span>
//   <ul>
//     <li>user stats, map / operator info</li>
//   </ul>
// </li>
// <li className="commandItem"><span>Minecraft</span>
//   <ul>
//     <li>user info, server status</li>
//   </ul>
// </li>
// <li className="commandItem"><span>CSGO</span>
//   <ul>
//     <li>user stats, more</li>
//   </ul>
// </li>
// <li className="commandItem question"><span>Valorant</span></li>
// <li className="commandItem question"><span>League of Legends</span></li>
// <li className="commandItem question"><span>more</span></li>
