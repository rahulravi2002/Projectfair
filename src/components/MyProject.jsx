import Edit from './Edit'
import Add from './Add'
function MyProject() {
  return (
    <div className="border roundede p-2">
      <div className="d-flex justify-content-between">
        <h2 className='text-warning'>My Projects</h2>
        <Add />
      </div>
      <div className='mt-4'>
        <div className='border rounded d-flex justify-content-between mb-3 p-2'>
          <h2>Title</h2>
          <div className='icon d-flex align-item-center'>
            <Edit />
            <a href='' target='_blank' className='btn btn-link ms-2'><i style={{ height: '35px' }} className='fa-brands fa-github fa-2x text-dark'></i></a>
            <button className='btn btn-link ms-2'><i style={{ height: '35px' }} className='fa-solid fa-trash fa-2x'></i></button>

          </div>
        </div>

      </div>

    </div>
  )
}

export default MyProject