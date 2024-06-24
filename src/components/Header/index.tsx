import logoImg from '../../assets/logo.svg'
import { Container, Content, Content2, Content3, Content4 } from './styles'

interface HeaderProps {
    onOpenUserModal: () => void;
    onOpenRecsModal: () => void;
    onOpenBuscaModal: () => void;
}

export function Header({ onOpenUserModal, onOpenRecsModal, onOpenBuscaModal }: HeaderProps) {

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth' // Rola suavemente para o final da página
        });
    };

    return (
        <Container>
            <div className="header-container">
                <div className="logo">    
                    <img src={logoImg} alt="biblio" />
                    <span className='title'>biblio</span>
                </div>
                <div className="menu">
                    <Content>
                        <button className='minhaConta button' type="button" onClick={onOpenUserModal}>
                            Minha conta
                        </button>
                    </Content>
                    <Content2>
                        <button className='recs button' type="button" onClick={onOpenRecsModal}>
                            Recomendações
                        </button>
                    </Content2>
                    <Content3>
                        <button className='minhaEstante button' type="button" onClick={scrollToBottom}>
                            Minha estante
                        </button>
                    </Content3>
                    <Content4>
                        <button className='busca button' type="button" onClick={onOpenBuscaModal}>
                            Buscar
                        </button>
                    </Content4>
                </div>
            </div>
        </Container>
    )
}