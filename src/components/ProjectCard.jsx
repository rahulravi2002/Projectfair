import { Card, Row , Col } from "react-bootstrap"
import img3 from "../assets/img3.jpg"
import { useState } from "react"
import Modal from 'react-bootstrap/Modal';


 Card
function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = ()=> setShow(false);
  const handleShow = ()=> setShow(true);

  return (
<>
  
      <Card className="shadow mb-5 btn" style={{ width: '25rem' }} onClick={handleShow} >
      <Card.Img variant="top" src={img3} />
      <Card.Body>
        <Card.Title>Calculator</Card.Title>
        
        
      </Card.Body>
    </Card>


    <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={6}>
              <img className="img-fluid" src={img3} />
            </Col>
            <Col sm={12} md={6} >
              <h2 className="fw-bolder text-waring">Calculator</h2>
              <p>Project OverView:<span className="fw-bolder text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident veritatis nihil itaque. In sunt totam rem voluptas iste corrupti nulla illum a aperiam perferendis maiores hic, inventore voluptate quasi! Ab.</span></p>
              <p>Language Used:<span className="fw-bolder text-danger">HTML,JS,CSS</span></p>

            </Col>
          </Row>
          <div className='mt-3'>
              <a href="" target='_blank' style={{cursor:'pointer',color:'black'}}><i style={{height:'34px'}} className='fa-brands fa-github fa-2x'></i></a>
              <a href="" target='_blank' style={{cursor:'pointer',color:'black'}} className='ms-5'><i style={{height:'34px'}} className='fa-solid fa-link fa-2x'></i></a>

          </div>
        </Modal.Body>
      </Modal>


</>
  )
}

export default ProjectCard