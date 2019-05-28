import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
// import Home from './components/Pages/Home';
// import Explore from './components/Pages/Explore';
// import Likes from './components/Pages/Likes';
// import User from './components/Pages/User';

function App() {
  return (
    <Router>
      <div className="App">
        <SearchBar />
        <PostContainer />

        {/* Takes us to Home */}
        <Route exact path="/" component={PostContainer} />

        {/* Takes us to Explore */}
        {/* <Route path="/explore" component={Explore} /> */}

        {/* Takes us to Likes */}
        {/* <Route path="/likes" component={Likes} /> */}

        {/* Takes us to User */}
        {/* <Route path="/user" component={User} /> */}
      </div>
    </Router>
  );
}

export default App;
