import { Col, Row } from 'react-bootstrap'


function Footer() {
  return (
    <div  className='text-white  ' style={{marginTop:'80px',backgroundColor:'#90ee90'}}>
        <Row>
            <Col className='p-4'>
           
           <h1> <i className="fa-solid fa-group-arrows-rotate fa-xl fa-spin me-2"></i> Project Fair</h1><br />
           <p className='text-dark'><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rem iure eligendi maxime amet facis enim!</b></p>
            </Col>
            <Col>
            <h5 className='mt-5'>Links</h5>
            <a href="/" style={{textDecoration:'none', color:'black'}}>Home</a><br />
            <a href="/cart" style={{textDecoration:'none', color:'black'}}>Cart</a><br />
            <a href="/wishlist" style={{textDecoration:'none', color:'black'}}>Wishlist</a><br />
            </Col>
            <Col>
            <h5 className='mt-5'>Guides</h5>
            <p className='text-dark'>React</p>
            <p className='text-dark'>React Bootstrap</p>
            <p className='text-dark'>Routing</p>
            </Col>
            <Col>
            <h5 className='mt-5'><span>Contact us</span></h5>
            <input style={{width:"125px"}} type="text" placeholder='enter email'/>
            <button type='button' className=' mt-1 text-primary rounded p-1 border-0 ' style={{ backgroundColor:'transparent'}}><i className="fa-regular fa-paper-plane"></i></button> <br />
            <i className="fa-brands fa-instagram ps-3 text-dark"></i>  <i className="fa-brands fa-facebook ps-3 text-dark"></i>
            <i className="fa-brands fa-twitter ps-3 text-dark"></i> <i className="fa-brands fa-github ps-3 text-dark"></i>
            </Col>
        </Row>
    </div>
  )
}

export default Footer