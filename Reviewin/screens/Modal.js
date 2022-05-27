import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import "./Modal.css";
import { AntDesign } from '@expo/vector-icons';

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        SUBMIT
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Berhasil Meng Ripiu</h2>
            <AntDesign name="checkcircle" size={75} color="black"/>
            <br></br>
            <br></br>
            <button 
            className='kembali-modal'
            onClick={toggleModal}>
              Kembali ke Home
            </button>
          </div>
        </div>
      )}
          </>
  );
}
