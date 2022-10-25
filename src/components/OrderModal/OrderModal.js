import { useState } from "react"
import { Alert, Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { createOrder } from "../../utils/orders"
import './OrderModal.css'


const OrderModal = ({ showModal, onClose, cart, total, clear }) => {
    const [formName, setFormName] = useState()
    const [formPhone, setFormPhone] = useState()
    const [formEmail, setFormEmail] = useState()
    const [orderId, setOrderId] = useState();

    const handleBuy = async () => {
        const newBuyer = {
            name: formName,
            phone: formPhone,
            email: formEmail
        }
        const newOrder = {
            buyer: newBuyer,
            items: cart,
            total
        };
        const newOrderId = await createOrder(newOrder);
        setOrderId(newOrderId);
        clear()
    }

    return (
        <Modal show={showModal} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Finalizar compra</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control onChange={ev => setFormName(ev.target.value)} type="text" placeholder="Ingrese su nombre" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control onChange={ev => setFormPhone(ev.target.value)} type="number" placeholder="Ingrese su telefono" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={ev => setFormEmail(ev.target.value)} type="email" placeholder="Ingrese su email" />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                {!orderId && formName&&formPhone&&formEmail&& (
                    <>
                        <Button variant="danger" onClick={onClose}>
                            Cerrar
                        </Button>
                        <Button variant="success" onClick={handleBuy}>
                            Comprar
                        </Button>
                    </>
                )}
                {orderId && (
                    <div className="footerSuccess">
                        <Alert key='success' variant='success'>
                            Su numero de orden es {orderId}, guardelo para hacer el seguimiento en la seccion de compras
                        </Alert>
                        <Link to='/'>
                            <Button variant="success">
                                Seguir comprando
                            </Button>
                        </Link>
                    </div>
                )}
            </Modal.Footer>
        </Modal>
    )
}

export default OrderModal;