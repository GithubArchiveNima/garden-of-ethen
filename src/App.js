import React, {useState} from "react";
import ReactDOM from "react-dom";
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#app')

const Plot = ({openModal, plant}) => {
    return (
        <div 
        onClick={() => openModal(plant)}
        style={{
            fontSize: 50,
            margin: 20
        }}>🌱</div>
    )
}

const Garden = ({openModal}) => {
    const plots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    return (
        <div style={{
            display: 'flex',
            width: 500,
            margin: 'auto',
            flexWrap: 'wrap'
        }}>
            {
                plots.map(p => <Plot key={p} plant={p} openModal={openModal} />)
            }
        </div>
    )
}

const App = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [plant, setPlant] = useState(null)

    const openModal = (plant) => {
        setModalIsOpen(true);
        setPlant(plant)
    }
    
    const afterOpenModal = () => {
        // subtitle.style.color = '#f00';
    }
    
    const closeModal = () => {
        setModalIsOpen(false);
    }

    return (
        <div>
            <h1>Garden of Ethen 🌱</h1>
            <hr></hr>
            <Garden openModal={openModal}/>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2>Plant {plant}</h2>
                <button onClick={closeModal}>close</button>
            </Modal>

        </div>
    )
}


export default App