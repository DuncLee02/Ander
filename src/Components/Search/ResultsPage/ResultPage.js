import './ResultPage.css'
import SearchBar from '../SearchBar/SearchBarTop.js'
import ResultContainer from '../Results/ResultContainer.js'


import React, { Component } from 'react';

class ResultPage extends Component {


  constructor(props) {
    super(props)
    this.state = {

    }
    this.updateResults = this.updateResults.bind(this)
  }

  render() {
    console.log('result page')
    return (
      <div className='resultPageLayout'>
        <div className='topRightSearchBar'>
          <SearchBar updateResults={this.updateResults}/>
        </div>
        <ResultContainer/>

      </div>
    );
  }

  updateResults() {
    this.forceUpdate()
  }

}

export default ResultPage
