import { Link, useNavigate } from "react-router-dom"
import ProjectCard from "../components/ProjectCard"
import img1 from '../assets/img1.png'
function Home() {
    const Navigate=useNavigate()
    const handleNavigate=()=>{
        Navigate('/Projects')
    }
  return (
  <>
    <div style={{height:'100vh',backgroundColor:'#90ee90'}} className='w-100 d-flex justify-content-center align-items-center'>
     <div className='container'>
      <div className='row align-items-center'>
        <div className='col-lg-6'>
        <h1 style={{fontSize:'80px'}} className='fw-bolder text-light mb-3'><i className="fa-solid fa-hands-holding-circle"></i> Project Fair</h1>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas velit unde cum magni odio adipisci accusantium esse consequatur officia sapiente. Repellendus, ea veritatis? Magnam possimus illo enim consectetur assumenda minus.</p>
        <Link className='btn btn-info mt-3' to={'/login'}>Start to Explore
        <i className='fa-solid fa-arrow-right'></i></Link>
        </div>
        <div className='col-lg-1'></div>
        <div className='col-lg-4'>
            <img style={{width:'100%', height:'100%'}} src={img1} alt="" className='img-fluid'/>
        </div>
      </div>
     </div>
    </div>
<div className='mt-5'>
<h1 className='text-center mb-5'>Explore Our Projects</h1>
<marquee>
    <div className='d-flex'>
        <div className='Project me-5'>
            <ProjectCard/>
        </div>
    </div>
</marquee>
<div className='text-center'>
    <button className="btn btn-link " onClick={handleNavigate}>View More Works </button>
</div>
</div>
</>
  )
}

export default Home