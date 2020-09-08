import React, { Component, createContext } from 'react';

type imageModalContext = {
  isVisible: boolean,
  initialImageUri: string,
  currentImageUri: string,
  currentOffset: number,
  images: string[],
  setImageSliderOffset: (offset: number) => void,
  setCurrentImage: (uri: string) => void,
  openImageModal: (uri: string, images: string[]) => void,
  closeImageModal: () => void
}

const initialState = {
  isVisible: false,
  currentImageUri: '',
  currentOffset: 0,
  initialImageUri: '',
  images: ['']
}

export const ImageModalContext = createContext<imageModalContext>({
  ...initialState,
  setImageSliderOffset: () => { },
  setCurrentImage: () => { },
  openImageModal: () => { },
  closeImageModal: () => { }
});

class ImageModalContextProvider extends Component {
  state = initialState;

  openImageModal = (initialImageUri: string, images: string[]) => {
    this.setCurrentImage(initialImageUri);
    this.setState({ ...this.state, initialImageUri: initialImageUri,
      images: images, isVisible: true });
  }

  setCurrentImage = (uri: string) => {
    setTimeout(() => this.setState({ ...this.state, currentImageUri: uri }));
  }

  closeImageModal = () => {
    this.setCurrentImage(this.state.initialImageUri);
    this.setState({ ...this.state, isVisible: false });
  }

  setImageSliderOffset = (offset: number) => {
    this.setState({ ...this.state, currentOffset: offset });
  }

  render() {
    return (
      <ImageModalContext.Provider value={{
        ...this.state,
        currentImageUri: this.state.currentImageUri,
        initialImageUri: this.state.initialImageUri,
        setImageSliderOffset: this.setImageSliderOffset,
        setCurrentImage: this.setCurrentImage,
        openImageModal: this.openImageModal,
        closeImageModal: this.closeImageModal
      }}>
        { this.props.children }
      </ImageModalContext.Provider>
    );
  }
}

export default ImageModalContextProvider;