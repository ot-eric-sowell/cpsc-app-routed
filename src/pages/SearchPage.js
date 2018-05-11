import React from 'react';
import InfractionDisplayTable from './../components/InfractionDisplayTable';
import Pager from './../components/Pager';

export default class SearchPage extends React.Component {

  state = {
    apiResult: {
      infractions: [],
      total: 0
    },
    queryValue: '',
    skip: 0,
    take: 10
  }

  search() {
    fetch(`https://cpsc-api.herokuapp.com/api/search?q=${this.state.queryValue}&take=${this.state.take}&skip=${this.state.skip}`)
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          apiResult: data
        });
      });
  }

  handleKeyPress = (evt) => {
    if (evt.charCode === 13) {
      this.search();
    }
  }

  handleChange = (evt) => {
    this.setState({
      queryValue: evt.target.value
    });
  }

  handleNext = () => {
    this.setState({
      skip: this.state.skip + 10
    }, () => this.search());
  }

  handlePrevious = () => {
    this.setState({
      skip: this.state.skip - 10
    }, () => this.search());
  }

  render() {

    let pager;
    if (this.state.apiResult.total > 10) {
      pager = <Pager onNext={this.handleNext} onPrevious={this.handlePrevious} skip={this.state.skip} take={this.state.take} total={this.state.apiResult.total} />
    }

    return (
      <div className="search-page">
        <h2>Search</h2>
        <input onKeyPress={this.handleKeyPress} onChange={this.handleChange} value={this.state.queryValue} />

        <InfractionDisplayTable infractions={this.state.apiResult.infractions} />

        {pager}

      </div>
    );
  }
}
