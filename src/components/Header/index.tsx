import logoImg from '../../assets/logo-inverted.png'

import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header ({ onOpenNewTransactionModal }: HeaderProps) {

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="TC Money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Novo Equipamento
                </button>

            </Content>
        </Container>
    )
}