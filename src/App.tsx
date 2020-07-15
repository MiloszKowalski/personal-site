import React from 'react';
import TopMenu from 'components/TopMenu/TopMenu';
import TopMenuContextProvider from 'contexts/TopMenuContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'views/Home/Home';

function App() {
  return (
    <TopMenuContextProvider>
      <Router>
        <div className="App">
          <TopMenu />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </TopMenuContextProvider>
  );
}

export default App;
