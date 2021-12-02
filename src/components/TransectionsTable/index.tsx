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
                Modelo: 
                <b>Notebook</b> 
            </p>

            <p className="title">
                Marca: 
                <b>ASUS</b> 
            </p>

            <p className="title">
                Memória: 
                <b>8 GB</b> 
            </p>

            <p className="title">
                SSD: 
                <b>Sim - 250 GB</b> 
            </p>

            <p className="title">
                Colaborador: 
                <b>Artur</b> 
            </p>

            <p className="title">
                Entregue: 
                <b>20 /11 /2021</b> 
            </p>

        </Container>
    );
}