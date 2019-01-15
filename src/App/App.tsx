import * as React from 'react';
import './App.css';

import NavigationBar from './navigation-bar/navigation-bar.component';
import { BrowserRouter as Router } from "react-router-dom";
import RouterContent from './main-content/router-content.component';

class App extends React.Component {
  render() {
    return (
      <Router basename="/react-movies-searcher">
        <div className="App">
          <NavigationBar />
          <RouterContent />
        </div>
      </Router>
    );
  }
}

export default App;
