import * as React from 'react';
import './App.css';

import MainPage from './main-page/main-page.component';
import NavigationBar from './navigation-bar/navigation-bar.component';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <MainPage />
      </div>
    );
  }
}

export default App;
