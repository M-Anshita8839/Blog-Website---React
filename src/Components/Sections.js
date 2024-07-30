import React from 'react'
import { Link } from 'react-router-dom'

function Sections({ img, title, description, link }) {
  return (
    <div>

      <div className='sections'>
        <div className='blog-img'>
          <img href='#' src={img} />
        </div>
        <div className='description'>
          <h1>{title}</h1>
          <p>{description}</p>

          <button>

            <Link to={link}>
              Read More
            </Link>
          </button>
        </div>
      </div>

      <div className='food-section'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-4'>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Sections