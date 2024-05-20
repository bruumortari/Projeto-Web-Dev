import Modal from 'react-modal';
import closeImg from '../../assets/x.svg';
import { Container } from './styles';

interface UserModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function UserModal({ isOpen, onRequestClose }: UserModalProps) {
    return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
    >

        <button type="button"
        onClick={onRequestClose}
        className='react-modal-close'
        >
            <img src={closeImg} alt="Fechar"></img>
        </button>

        <Container>
            <h2 className='logIn'>Log in</h2>
            <input
            placeholder="Usuário"
            />
            <input
            placeholder="Senha"
            />
            <button type="submit">
                Entrar
            </button>
            <h2 className='cadastrar'>Ainda não tem uma conta?</h2>
            <h3>Cadastre-se aqui</h3>
            <button>
                Fazer cadastro
            </button>
        </Container>
    </Modal>
    );
}