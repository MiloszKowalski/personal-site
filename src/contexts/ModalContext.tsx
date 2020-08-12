import React, { Component, createContext } from 'react';
import { Modal, experienceInfo, techStackInfo } from './ResumeModalInfo';
import { ReactComponent as FrontendIcon } from 'views/Resume/svg/FrontendIcon.svg';

type modalContext = {
  isVisible: boolean,
  currentModal: Modal,
  experienceInfo: Modal[],
  techStackInfo: Modal[],
  openModal: (name: string) => void,
  closeModal: () => void
}

const initialModal = {
  title: '',
  icon: FrontendIcon,
  description: ''
}

const initialState = {
  isVisible: false,
  currentModal: initialModal,
  experienceInfo,
  techStackInfo
}

export const ModalContext = createContext<modalContext>({
  ...initialState,
  openModal: () => { },
  closeModal: () => { }
});

class ModalContextProvider extends Component {
  state = initialState;

  openModal = (value: string) => {
    let modal = this.state.techStackInfo.find(x => x.title === value);
    if (modal === undefined) modal = this.state.experienceInfo.find(x => x.title === value);
    if (modal === undefined) return;
    setTimeout(() => this.setState({ ...this.state, currentModal: modal, isVisible: true }));
  }

  closeModal = () => {
    this.setState({ ...this.state, isVisible: false });
  }

  render() {
    return (
      <ModalContext.Provider value={{
        ...this.state,
        currentModal: this.state.currentModal,
        openModal: this.openModal,
        closeModal: this.closeModal
      }}>
        { this.props.children }
      </ModalContext.Provider>
    );
  }
}

export default ModalContextProvider;