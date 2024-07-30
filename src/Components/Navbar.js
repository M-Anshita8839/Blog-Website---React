import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-2 nav-item'>
                    <Link to='/'>Home</Link>
                </div>
                <div className='col-md-10'>
                    <div className='items'>
                        <div className='navbar-nav-ml-auto'>
                            <ul className='nav justify-content-end'>
                                <li className='nav-item'>
                                    <Link to= '/Food'>Food</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to= '/Travel'>Travel</Link>
                                </li> 
                                <li className='nav-item'>
                                    <Link to= '/Sports'>Sports</Link>
                                </li> 
                                <li className='nav-item'>
                                    <Link to= '/Politics'>Politics</Link>
                                </li> 
                                <li className='nav-item'>
                                    <Link to= '/Technology'>Technology</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </nav>
  )
}

export default Navbar