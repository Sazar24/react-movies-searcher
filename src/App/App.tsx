import * as React from 'react';
import './App.css';

import NavigationBar from './navigation-bar/navigation-bar.component';
import { BrowserRouter as Router } from "react-router-dom";
import MainContent from './main-content/main-content.component';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavigationBar />
          <MainContent />
        </div>
      </Router>
    );
  }
}

export default App;
