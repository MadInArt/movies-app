import React, { Component } from 'react';

import { connect } from 'react-redux';

import SearchForm from './SearchForm';
import MovieContainer from './MovieContainer';
import Spinner from '../layout/Spinner';

export class Home extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        <SearchForm />
        {loading ? <Spinner /> : <MovieContainer />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading
});

export default connect(mapStateToProps)(Home);