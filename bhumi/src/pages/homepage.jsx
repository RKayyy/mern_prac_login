import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <p>Welcome</p>
      <Link to='/register'>
        <button>
          Register Here
        </button>
      </Link>
      
    </div>
  )
}

export default HomePage
