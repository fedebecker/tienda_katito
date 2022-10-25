import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap"
import { Link } from "react-router-dom";
import { getOrders } from '../../utils/orders'

const Checkout = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getOrders()
            .then((data) => setOrders(data))
            .catch((error) => console.warn(error))
    }, []);

    const showTable = orders.length > 0;

    return (
        <Container>
            <h1>Resumen de la compra</h1>
            {showTable && (
                <>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Nro de Orden</th>
                                <th>Nombre comprador</th>
                                <th>Monto total</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) =>
                                <tr key={order.id}>
                                    <td>{order.id}</td>
                                    <td>{order.buyer.name}</td>
                                    <td>${order.total}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                    <Link to='/'>
                        <Button variant="success">
                            Seguir comprando
                        </Button>
                    </Link>
                </>
            )}
            {!showTable && (
                <>
                    <h3>No haz realizado ninguna compra!</h3>
                    <Link to='/'>
                        <Button variant="success">
                            Ver Productos
                        </Button>
                    </Link>
                </>
            )}
        </Container>
    )
}

export default Checkout