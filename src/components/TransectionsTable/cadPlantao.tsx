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

            <p className="title">
                Equipamento: 
                <b>Mouse</b> 
            </p>

            <p className="title">
                Marca: 
                <b>Logitech</b> 
            </p>

            <p className="title">
                Memória: 
                <b> -- </b> 
            </p>

            <p className="title">
                SSD: 
                <b> -- </b> 
            </p>

            <p className="title">
                Colaborador: 
                <b>Plantão</b> 
            </p>

            <p className="title">
                Entregue: 
                <b>20 /12 /2021</b> 
            </p>

        </Container>
    );
}