import React from 'react';

class CommandList extends React.Component {
  render() {
    return (
      <div id="commandList">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    );
  }
}

export default CommandList;
