import React from 'react'

export default class CommandBox extends React.Component {
  renderElement( elem, i ) {
    let info; if (elem.info ) info= <ul><li>{elem.info}</li></ul>
    else info = null;

    let subtitle = elem.subtitle || '';
    let tooltip = elem.tooltip;

    return (
      <li className="commandItem tooltip" key={i}><span data-subtitle={subtitle}>{elem.title}<this.tooltipRender tooltipText={tooltip} /></span>
        {info || ''}
      </li>
    )
  }

  tooltipRender(props) {
    const tooltipText = props.tooltipText;
    if ( tooltipText ) {
      return <div className="tooltip-text">{tooltipText}</div>
    }
    return '';
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
