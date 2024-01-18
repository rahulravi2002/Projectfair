import { Link } from "react-router-dom"
import img2 from '../assets/img2.png'
import { Form } from "react-bootstrap"

function Auth({insideRegister}) {
  return (
    <div style={{width:'100%' ,height:'100vh'}} className="d-flex justify-content-center align-item-center">
      <div className="container w-75">
        <Link to={'/'} style={{textDecoration:'none'}}><i className="fa-solid fa-arrow-left"></i>Home</Link>
        <div className="card shadow p-5" style={{backgroundColor:'#90ee90'}}>
          <div className="row align-item-center">
            <div className="col lg-6">
              <img className="w-75" src={img2} alt="nop" />
            </div>
            <div className="col-lg-6 mt-5">
              <h1 className="fw-bolder text-light mt-2">
              <i className="fa-solid fa-hands-holding-circle me-2"></i>Project Fair
              </h1>
              <h5 className="fw-bolder text-light mt-2">Sign {insideRegister?'Up':'In'}To Your Account</h5>


              <Form>
                {insideRegister &&
      <Form.Group className="mb-3" controlId="formBasiName">
        <Form.Control type="text" placeholder="Enter Name"/>
        
        </Form.Group>}

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      {
        insideRegister?
        <div>
          <button className="btn btn-light mb-2 text-success">Register</button>
          <p>Already Have Account? Click Here To<Link to={'/login'} className="text-light">Login</Link></p>
        </div>:
        <div>
          <button className="btn btn-light mb-2 text-success">LogIn</button>
          <p>New User? Click Here To <Link to={'/register'} className="text-light">Register</Link></p>
        </div>
      }
      
    </Form>






            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Auth