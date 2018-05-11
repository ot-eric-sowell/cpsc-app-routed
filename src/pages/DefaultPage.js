import React from 'react';

export default class DefaultPage extends React.Component {

  componentDidMount() {
    fetch('https://cpsc-api.herokuapp.com/api/violations')
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          apiResult: data
        });
      });
  }

  render() {

    let list;
    if (this.state !== null && this.state.apiResult !== undefined) {
      list = (
        <ul>
          {this.state.apiResult.violations.map((x) => {
            const link = '/violation/' + x.id;
            return <li key={x.id}><a href={link}>{x.violation} ({x.total})</a></li>
          })}
        </ul>
      );
    }

    return (
      <div className="violations-list-page">
        <h2>Violations</h2>
        {list}
      </div>
    );
  }
}
