import { Summary } from "../Summary";
import { TransectionsTable } from "../TransectionsTable";
import { Container } from "./styles";

export function Dashboard() {
    return (
        <Container>
            <TransectionsTable />
        </Container>
    );
}