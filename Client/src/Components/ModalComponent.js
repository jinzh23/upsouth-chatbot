import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styles from '../Styles/ModalComponent.module.css';
import { SiProbot } from 'react-icons/si';

const CustomStyles = {
  content: {
    position: 'fixed',
    bottom: '20px',
    left: '420px',
    width: '900px',
    height: '700px',
    padding: '0', 
    overflow: 'auto',
    borderRadius: '4px',
    outline: 'none',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 0, 
    backgroundColor: '#E8E8E8',
    zIndex: 10000, 
  },
  overlay: {
    background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
    zIndex: 9999,
  },
};

Modal.setAppElement('#root');

const ModalComponent = ({ isOpen, closeModal, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={CustomStyles}
      contentLabel="Example Modal"
    >
      <div className={styles.modalComponent__modalHeader}>
        <div className={styles.modalComponent__titleContainer}>
          <SiProbot className={styles.modalComponent__robotIcon} />
          <h2 className={styles.modalComponent__modalTitle}>Nesia the chatbot</h2>
        </div>
        <button className={styles.modalComponent__closeBtn} onClick={closeModal}>
          X
        </button>
      </div>
      <div className={styles.modalComponent__modalBody}>
        {children}
      </div>
    </Modal>
  );
};

ModalComponent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default ModalComponent;




