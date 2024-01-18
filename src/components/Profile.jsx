 
import {useState} from 'react'
import { Collapse } from 'react-bootstrap'
import img4 from "../assets/img4.png"

function Profile() {
  const [open, setOpen] = useState(false);
  return (
    <div className='border rounded p-2'>
      <div className='d-flex justify-content-between'>
       <h2>Profile</h2>
       <button onClick={()=>setOpen(!open)} className='btn btn-outline-danger'><i className='fa-solid fa-caret-down'></i></button>
      </div>
      <Collapse in={open}>
        <div id="example-collapse-text" className='text-center'>
          <label>
            <input type="file" style={{display:"none"}} />
            <img width={'200px'} height={'200px'} className='img-fluid rounded-circle' src={img4} alt="upload profile image" />
          </label>
          <form>
          <div className='mb-2'>
            <input type="text" className='rounded w-75 p-1' placeholder='Enter your GitHub Link Here'/>
          </div>
          <div className='mb-2'>
            <input type="text" className='rounded w-75 p-1' placeholder='Enter your LinkedIn Link Here'/>
          </div>
          <div className='mb-3 d-grid w-75 mx-auto'>
            <button className='btn btn-success'>Update</button>
          </div>
         </form>
          
        </div>
      </Collapse>
    </div>
  )
}

export default Profile