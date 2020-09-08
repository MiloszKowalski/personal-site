import React, { useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalContext } from 'contexts/ModalContext';
import { ReactComponent as CloseIcon } from 'components/svg/icons/CloseIcon.svg';
import './Modal.scss';

const Modal: React.FC = () => {
  const { isVisible, currentModal, closeModal } = useContext(ModalContext);
  const { t } = useTranslation();

  useEffect(() => {
    if(isVisible) {
      // Prevent glitchy jumping appearance when hiding the scrollbar
      document.body.style.marginRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = 'unset';
      document.body.style.marginRight = '0';
    }
  }, [isVisible]);

  return (
    <div onClick={closeModal} className={`modal-wrapper ${isVisible ? 'visible' : ''}`}>
      <div onClick={(e) => e.stopPropagation()} className="modal">
        <header className="modal-header">
          <div className="modal-icon-wrapper">
            <currentModal.icon />
          </div>
          <div className="modal-title">
            <h1>{ currentModal?.title }</h1>
          </div>
          <div className="modal-close-icon" onClick={ () => closeModal() }>
            <CloseIcon />
          </div>
        </header>
        <section className="modal-content">
          { currentModal.position !== undefined ? (<h3>{ currentModal.position }</h3>) : ''}
          { t(currentModal.description) }
          <ul className="modal-item-list">
          { currentModal.items?.map(x => (
            <li className="modal-item" key={x.title}>
              <div className="resume-icon-wrapper modal-item-icon-wrapper">
                <img src={ x.iconPath } alt="" />
              </div>
              <div className="modal-item-description">
                <h3>{ x.title }</h3>
                <p>{ t(x.description) }</p>
              </div>
            </li>
          ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Modal;