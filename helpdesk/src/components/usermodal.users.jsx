import React from "react";
import { Modal } from "react-bootstrap";

export default function UserModal({ show, onHide, user }) {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    User Details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4 className="mb-3">{user.name}</h4>
                <p>
                    <strong>Position: </strong>
                    {user.position}
                </p>
                <p>
                    <strong>Phone Number: </strong>
                    {user.number}
                </p>
                <p>
                    <strong>Favorite Shoe: </strong>
                    {user.favshoe}
                </p>
                <p>
                    <strong>Shoe Size: </strong>
                    {user.size}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={onHide}>Close</button>
            </Modal.Footer>
        </Modal>
    );
}