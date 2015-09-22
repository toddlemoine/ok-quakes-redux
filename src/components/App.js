import React, {Component, PropTypes} from 'react';
import {RouteHandler} from 'react-router';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import {loadQuakeData} from '../actions/app';

import "../styles/App.css";

class App extends Component {

  propTypes: {
    pathname: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(loadQuakeData());
  }

  render() {
    const {pathname} = this.props;

    return (
      <main style={{height: '700px', width: '700px', margin: '0 auto'}}>
        <Sidebar />
        <RouteHandler {...this.props} key={pathname} />
      </main>
    );
  }
};

function mapStateToProps(state) {
  return {
    results: state.appReducer.results,
    dateRange: state.appReducer.dateRange,
    tweets: state.appReducer.tweets,
    date: state.appReducer.date
  };
}

export default connect(mapStateToProps)(App);


