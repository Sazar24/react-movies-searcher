import * as React from 'react';
import './App.css';

import NavigationBar from './navigation-bar/navigation-bar.component';
import { BrowserRouter as Router } from "react-router-dom";
import RouterContent from './main-content/router-content.component';

const thisRepoGithubNameAsUrl = "/react-movies-searcher";

class App extends React.Component {
  render() {
    return (
      <Router basename={thisRepoGithubNameAsUrl}>
        <div className="App">
          <NavigationBar />
          <RouterContent />
        </div>
      </Router>
    );
  }
}

export default App;
