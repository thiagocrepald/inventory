import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransectionsTable() {
    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Modelo</th>
                        <th>Marca</th>
                        <th>Memória</th>
                        <th>SSD</th>
                        <th>Colaborador</th>
                        <th>Entrega</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td>Notebook</td>
                        <td className="deposit">ASUS</td>
                        <td>8 GB</td>
                        <td>Sim</td>
                        <td>Artur</td>
                        <td>20 / 11 /2021</td>
                    </tr>

                </tbody>
            </table>
        </Container>
    );
}