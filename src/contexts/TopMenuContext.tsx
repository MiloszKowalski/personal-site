import React, { Component, createContext } from 'react';

type topMenuContext = {
  isExpanded: boolean,
  isDocked: boolean,
  scrolledDown: boolean,
  setIsExpanded: (value: boolean) => void,
  setIsDocked: (value: boolean) => void,
  setScrolledDown: (value: boolean) => void
}

const initialState = {
  isExpanded: false,
  isDocked: false,
  scrolledDown: false
}

export const TopMenuContext = createContext<topMenuContext>({
  ...initialState,
  setIsExpanded: () => { },
  setIsDocked: () => { },
  setScrolledDown: () => { }
});

class TopMenuContextProvider extends Component {
  state = initialState;

  setIsExpanded = (value: boolean) => {
    this.setState({ ...this.state, isExpanded: value });
  }

  setIsDocked = (value: boolean) => {
    this.setState({ ...this.state, isDocked: value });
  }

  setScrolledDown = (value: boolean) => {
    this.setState({ ...this.state, scrolledDown: value });
  }

  render() {
    return (
      <TopMenuContext.Provider value={{
        ...this.state,
        setIsExpanded: this.setIsExpanded,
        setIsDocked: this.setIsDocked,
        setScrolledDown: this.setScrolledDown
      }}>
        { this.props.children }
      </TopMenuContext.Provider>
    );
  }
}

export default TopMenuContextProvider;