import React from 'react';
import TopMenu from 'components/TopMenu/TopMenu';
import TopMenuContextProvider from 'contexts/TopMenuContext';
import Modal from 'components/Modal/Modal';
import ImageModal from 'components/ImageModal/ImageModal';
import ModalContextProvider from 'contexts/ModalContext';
import ImageModalContextProvider from 'contexts/ImageModalContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'views/Home/Home';
import Resume from 'views/Resume/Resume';
import Portfolio from 'views/Portfolio/Portfolio';

function App() {
  return (
    <TopMenuContextProvider>
      <ModalContextProvider>
        <ImageModalContextProvider>
          <Router>
            <div className="App">
              <TopMenu />
              <Modal />
              <ImageModal />
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
        </ImageModalContextProvider>
      </ModalContextProvider>
    </TopMenuContextProvider>
  );
}

export default App;
