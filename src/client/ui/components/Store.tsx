import { Link } from "react-router-dom"
import React from 'react'

const Store : React.FC = () => {
  
  return (
    <>
    <div className='container-fluid' style={{ backgroundColor: 'darkblue', height : 1200 }}>
      <div className='row '>
          <div className='col-7 offset-5'style={{ height : 600 }}>
          <div>
              <h2 className='text-danger fw-bold mt-5'>Coming Soon!</h2>
                <p>
                  <Link to="/">
                    <button className="btn btn-primary btn-lg mt-5" 
                          style={{ backgroundColor: 'purple' }}>Go to home page
                    </button>
                  </Link>
                </p>
            </div>
          </div>
        </div>
    </div>
    </>
  )
} 

export default Store
