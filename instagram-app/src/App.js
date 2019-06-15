import React, { Component } from 'react';
import './App.css';
import 'moment-timezone';
import { posts } from './dummy-data';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      thePosts: posts
    };
  }

  filterPosts = username => {
    this.setState({
      // update the state by
      thePosts: posts.filter(post => post.username === username)
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <SearchBar filterPosts={this.filterPosts} />

          <div className="post-container">
            {this.state.thePosts.map(post => (
              <PostContainer
                key={post.id}
                username={post.username}
                thumbnailUrl={post.thumbnailUrl}
                imageUrl={post.imageUrl}
                likes={post.likes}
                comments={post.comments}
              />
            ))}
          </div>

          {/* Takes us to Home */}
          <Route exact path="/" component={PostContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
