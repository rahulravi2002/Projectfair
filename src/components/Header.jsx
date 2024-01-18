import { Navbar,Container } from "react-bootstrap"

 
function Header(insideDashboard) {
  return (
<>
      <Navbar className='text-light' style={{backgroundColor:'#90ee90', color:"white", position:'fixed',top:'0px',zIndex:5,width:"100%"}}>
      <Container>
        <Navbar.Brand href="/" className="text-light " style={{width:'800px'}}><i className="fa-solid fa-hands-holding-circle fa-2xl me-2"></i> Project Fair</Navbar.Brand>
      
    {
      insideDashboard &&
      <div className="ms-auto">
        <button style={{textDecoration:'none'}} className="btn btn-link text-primary fw-bolder"> <i className="fa-solid fa-right-from-bracket fa-xl fa-fade text-danger"></i> LOGOUT</button>

      </div>
    }
    </Container>
    </Navbar>
</>
  )
}

export default Header