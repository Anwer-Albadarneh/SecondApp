
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function Cardcomp(props){
  let [show, setShow] = useState(false);

  function handleShow(){
    setShow(!show)
  }

    return(
      <>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Button variant="primary" onClick={handleShow}>Show Details</Button>
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.description} <br /> <h3><b>{props.price}</b></h3></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleShow}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>  
        </>  

    )


}
export default Cardcomp;
