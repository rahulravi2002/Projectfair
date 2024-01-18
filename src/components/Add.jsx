import { useState } from "react"
import { Button, Modal } from "react-bootstrap"
import img6 from '../assets/img6.png'
function Add() {
  const[show,setShow]=useState(false)
  const handleShow=()=>setShow(true)
  const handleClose=()=>setShow(false)
  return (
    <>

    <button onClick={handleShow} style={{textDecoration:'none'}}className="btn btn-link text-success d-flex align-item fw-bolder mt-2" ><i style={{height:'35px'}} className="fa-solid fa-arrow-up fa-2x me-2"></i>Add Project</button>

    <Modal size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Do not even try to press
          escape key.
        </Modal.Body>
        <div className="row">
          <div className="col-lg-4">
            <label className="w-100 d-flex align-item-center flec-colum justify-content-center">
              <input type="file" style={{display:'none'}} />
              <img height={'200px'} width={'200px'} className="mt-5" src={img6} alt="" />
            </label>
          </div>
          <div className="col-lg-8">
            <div className="mb-3">
            <input className="border rounded p-2 w-100" type="text" placeholder="Project Title" />
            </div>

            <div className="mb-3">
            <input className="border rounded p-2 w-100" type="text" placeholder="Language Used" />
            </div>

            <div className="mb-3">
            <input className="border rounded p-2 w-100" type="text" placeholder="Project Github link" />
            </div>

            <div className="mb-3">
            <input className="border rounded p-2 w-100" type="text" placeholder="Project Website link" />
            </div>
            
            <div className="mb-3">
            <input className="border rounded p-2 w-100" type="text" placeholder="Project Over view" />
            </div>
          </div>
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success">Save</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Add