import React from 'react';
import './Pager.css';

export default class Pager extends React.Component {
  render() {
    const handleNext = this.props.onNext ||function(){};
    const handlePrevious = this.props.onPrevious || function(){};
    const pageNumber = Math.ceil(this.props.total / this.props.take);
    const currentPage = (this.props.skip / this.props.take) + 1;

    let nextButton;
    if (this.props.skip + 10 < this.props.total) {
      nextButton = <span className="pager-button" onClick={handleNext}>next</span>
    }

    let previousButton;
    if (this.props.skip > 0) {
      previousButton = <span className="pager-button" onClick={handlePrevious}>previous</span>
    }

    return (
      <div className="pager">
        {previousButton}
        <span>{currentPage} of {pageNumber}</span>
        {nextButton}
      </div>
    );
  }
}
