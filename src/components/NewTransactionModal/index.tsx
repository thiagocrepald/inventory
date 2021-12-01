import { useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/btnclose.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal ({isOpen, onRequestClose }: NewTransactionModalProps){
    const [type, setType] = useState('deposit');

    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
        <button 
            type="button" 
            onClick={onRequestClose} 
            className="react-modal-close"
        >
            <img src={closeImg} alt="Fechar modal" />
        </button>

        <Container>
            <h2>Novo Equipamento</h2>

            <input 
                placeholder="Notebook"
            />

            <input 
                placeholder="ASUS"
            />

            <input 
                placeholder="8 GB"
            />

            <input 
                placeholder="SSD 250"
            />

            <input 
                placeholder="Artur"
            />

            <input 
                placeholder="22 / 11 / 2021"
            />

            <button type="submit">
                Cadastrar
            </button>
        </Container>
        </Modal>
    );
}