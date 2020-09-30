import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ImageModal from 'components/ImageModal';
import ImageModalContextProvider from 'contexts/ImageModalContext';

import Modal from 'components/Modal/Modal';
import ModalContextProvider from 'contexts/ModalContext';

import TopMenu from 'components/TopMenu';
import TopMenuContextProvider from 'contexts/TopMenuContext';

import About from 'views/About';
import Home from 'views/Home';
import Portfolio from 'views/Portfolio';
import Resume from 'views/Resume';

import ScrollToTop from 'components/ScrollToTop/ScrollToTop';
import 'styles/animate-svg.scss';

function App() {
  return (
    <TopMenuContextProvider>
      <ModalContextProvider>
        <ImageModalContextProvider>
          <Router>
            <div className="App">
              <ScrollToTop />
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
                <Route path="/portfolio">
                  <Portfolio />
                </Route>
                <Route path="/about">
                  <About />
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
