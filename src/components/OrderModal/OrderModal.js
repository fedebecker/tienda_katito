import { useState } from "react"
import { Alert, Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import './OrderModal.css'

const buyerMock = {
    name: 'Federico',
    phone: '1122334455',
    email: 'fede@becker.com'
}

const OrderModal = ({ showModal, onClose, onBuy, orderId }) => {
    return (
        <Modal show={showModal} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Finalizar compra</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su nombre" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTelefon">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="number" placeholder="Ingrese su telefono" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su email" />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                {!orderId && (
                    <>
                        <Button variant="danger" onClick={onClose}>
                            Cerrar
                        </Button>
                        <Button variant="success" onClick={onBuy}>
                            Comprar
                        </Button>
                    </>
                )}
                {orderId && (
                    <div className="footerSuccess">
                        <Alert key='success' variant='success'>
                            {orderId}
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