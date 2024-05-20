import { Container } from "./styles";

export function Description() {
    return (
        <Container>
            <h2>Minha estante</h2>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Data do empréstimo</th>
                        <th>Data de entrega</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Trono de Vidro</td>
                        <td>Sarah J. Maas</td>
                        <td>15/03/2024</td>
                        <td>30/03/2024</td>
                    </tr>
                    <tr>
                        <td>É Assim que Acaba</td>
                        <td>Colleen Hoover</td>
                        <td>23/03/2024</td>
                        <td>07/04/2024</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}