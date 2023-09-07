import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useState } from "react";

function start() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <main className="container">
        <h1>Start Page</h1>
        <div>Cool things will happen here!</div>
        <div>
          <Button variant="primary" onClick={handleShow}>
            Launch static backdrop modal
          </Button>
        </div>
        <div>
          <ProgressBar now={75} />
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            I will not close if you click outside me. Don not even try to press
            escape key.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
      </main>
    </>
  );
}

export default start;
