import React from 'react';
import TopMenu from 'components/TopMenu/TopMenu';
import TopMenuContextProvider from 'contexts/TopMenuContext';
import Modal from 'components/Modal/Modal';
import ModalContextProvider from 'contexts/ModalContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'views/Home/Home';
import Resume from 'views/Resume/Resume';

function App() {
  return (
    <TopMenuContextProvider>
      <ModalContextProvider>
        <Router>
          <div className="App">
            <TopMenu />
            <Modal />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/resume">
                <Resume />
              </Route>
            </Switch>
          </div>
        </Router>
      </ModalContextProvider>
    </TopMenuContextProvider>
  );
}

export default App;
