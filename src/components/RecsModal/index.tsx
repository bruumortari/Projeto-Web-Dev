import Modal from 'react-modal';
import closeImg from '../../assets/x.svg';
import { Container } from './styles';
import livro1Img from '../../assets/Livro1.svg'
import livro2Img from '../../assets/Livro2.svg'
import livro3Img from '../../assets/Livro3.svg'

interface RecsModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function RecsModal({ isOpen, onRequestClose }: RecsModalProps) {
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
            <div>
                <h2>Recomendações baseadas nas suas leituras recentes</h2>
            </div>
            <div>
                <img src={livro1Img} alt="Livro 1" />
            </div>
            <div>
                <img src={livro2Img} alt="Livro 2" />
            </div>
            <div>
                <img src={livro3Img} alt="Livro 3" />
            </div>
        </Container>
    </Modal>
    );
}