import React from 'react';
import './InfractionDisplayTable.css';

function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Violation</th>
          <th>Firm</th>
        </tr>
      </thead>
      <tbody>
        {props.infractions.map((x, i) => {
          return (
            <tr key={i}>
              <td>{x.product}</td>
              <td>{x.violation}</td>
              <td>{x.firm}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default class InfractionDisplayTable extends React.Component {

  render() {

    let visual;
    if (this.props.infractions !== undefined && this.props.infractions.length > 0) {
      visual = <Table infractions={this.props.infractions} />
    }
    else {
      visual = <p>No data :(</p>
    }

    return (
      <div className="infractions-display-table">
        {visual}
      </div>
    )
  }

}
