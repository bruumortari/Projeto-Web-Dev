import logoImg from '../../assets/logo.svg'
import { Container, Content, Content2, Content3 } from './styles'

interface HeaderProps {
    onOpenUserModal: () => void;
    onOpenRecsModal: () => void;
}

export function Header({ onOpenUserModal, onOpenRecsModal }: HeaderProps) {

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth' // Rola suavemente para o final da página
        });
    };

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="biblio" />
                <span className='title'>biblio</span>
                <button className='minhaConta' type="button" onClick={onOpenUserModal}>
                    Minha conta
                </button>
            </Content>
            <Content2>
                <button className='recs' type="button" onClick={onOpenRecsModal}>
                    Recomendações
                </button>
            </Content2>
            <Content3>
                <button className='minhaEstante' type="button" onClick={scrollToBottom}>
                    Minha estante
                </button>
            </Content3>
        </Container>
    )
}