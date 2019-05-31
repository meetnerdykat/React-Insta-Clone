import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';

class SearchBar extends Component {
  render() {
    return <Navbar filterPosts={this.props.filterPosts} />;
  }
}

export default SearchBar;
