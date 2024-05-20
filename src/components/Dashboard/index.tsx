import { Description } from '../Estante';
import { Summary } from '../Top5';
import { Container } from './styles'

export function Dashboard() {
    return(
        <Container>
            <Summary />
            <Description />
        </Container>
    );
}