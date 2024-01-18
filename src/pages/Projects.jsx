import { Row,Col } from "react-bootstrap"
import Header from "../components/Header"
import ProjectCard from "../components/ProjectCard"

function Projects() {
  return (
    <>
      <Header />
      <div style={{ marginTop: '100px' }} className="container-fluid">
        <div className="text-center">
          <h1>All Projects</h1>
        </div>
        <div className="text-center"><i className="fa-solid fa-magnifying-glass me-2"></i><input type="text" style={{ width: '300px' }} className="rounded p-1" placeholder="Search project Here!!!" />
        </div>
        <Row className='mt-5'>
        <Col sm={12} md={6} lg={4}>
        <ProjectCard/>
        </Col>
       </Row>
      </div>

    </>

  )
}

export default Projects