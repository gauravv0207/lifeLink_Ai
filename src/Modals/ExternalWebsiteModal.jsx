// ExternalWebsiteModal.js
import React from "react";
import Modal from "react-modal";

const ExternalWebsiteModal = ({ isOpen, onRequestClose, websiteUrl }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="External Website Modal">
      <iframe src={websiteUrl} title="External Website" />
    </Modal>
  );
};

export default ExternalWebsiteModal;
