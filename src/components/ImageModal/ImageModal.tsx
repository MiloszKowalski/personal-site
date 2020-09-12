import React, { useContext } from 'react';
import { ImageModalContext } from 'contexts/ImageModalContext';
import { ReactComponent as CloseIcon } from 'components/svg/icons/CloseIcon.svg';
import { ReactComponent as ArrowIcon } from 'components/svg/icons/ArrowIcon.svg';
import './../Modal/Modal.scss';
import './ImageModal.scss';

const Modal: React.FC = () => {
  const { isVisible, currentImageUri, images,
    setCurrentImage, closeImageModal } = useContext(ImageModalContext);

  const getCurrentIndex = () => {
    return images.findIndex(x => x === currentImageUri) || 0;
  }

  const getNextIndex = () => {
    return (getCurrentIndex() + 1) % images.length;
  }

  const getPreviousIndex = () => {
    return (getCurrentIndex() - 1 + images.length) % images.length;
  }

  return (
    <div onClick={ closeImageModal }
      className={ `modal-wrapper image-modal-wrapper ${isVisible ? 'visible' : ''}` }>
      <div onClick={(e) => e.stopPropagation()} className="image-modal-background">
        <div className="image-modal" style={{ backgroundImage: `url(${currentImageUri})` }}>
          <CloseIcon onClick={ closeImageModal } />
          <div onClick={ () => setCurrentImage(images[getPreviousIndex()]) }
            className="slider-arrow modal-arrow left"><ArrowIcon /></div>
          <div onClick={ () => setCurrentImage(images[getNextIndex()]) }
            className="slider-arrow modal-arrow right"><ArrowIcon /></div>
        </div>
      </div>
    </div>
  );
}

export default Modal;