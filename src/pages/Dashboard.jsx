import Header from "../components/Header"
import MyProject from "../components/MyProject"
import Profile from "../components/Profile"


function Dashboard() {
  return (
    <>
    
      <Header insideDashboard></Header>
    <div style={{marginTop:'100px'}} className='container-fluid'>
      <h3>Welcome  <span className="text-info"><i className="fa-regular fa-user"></i>  USER</span></h3>
      <div className="row">
        <div className="col-lg-8">
          <MyProject></MyProject>

        </div>
        <div className="col-lg-4"> 
          <Profile></Profile>
        </div>
      </div>
    </div>

    </>
    
  )
}

export default Dashboard