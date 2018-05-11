import React from 'react';
import InfractionDisplayTable from './../components/InfractionDisplayTable';

export default class InfractionsPage extends React.Component {

  state = {
    apiResult: {
      infractions: []
    }
  }

  componentDidMount() {
    fetch('https://cpsc-api.herokuapp.com/api/violation/' + this.props.match.params.id)
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          apiResult: data
        });
      });
  }

  render() {
    return (
      <div>

        <h2>{this.state.apiResult.violation}</h2>

        <InfractionDisplayTable infractions={this.state.apiResult.infractions} />

      </div>
    );
  }
}
