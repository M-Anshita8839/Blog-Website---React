import React from 'react';
import Latest from '../Components/Latest';
export default function Home() {
  return (
    <div>

      {/*-------------- blog page------------- */}
        <div className='container fluid banner'>
            <div className='row'>
                
                <div className='bannersection'>
                    <img href ='#' src='https://images.unsplash.com/photo-1542728928-ee495082a3c6?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                    <div className='banner-caption'>
                        Blogs 
                    </div>  
                </div>
            </div>
        </div>
      {/* ----------Latest blog---------------- */}
      <Latest/>


      {/* --------------all category section---------------- */}
      <div className='all-sections md-4'>
      <div className='container fluid'>
          <h1 className='trending'>Trending Topics</h1>

        <div className='row'>
          

            <div className='col-md-4 '>
                        <div className='sections'>
                        <div className='blog-img'>
                        <img href='#' src='https://plus.unsplash.com/premium_photo-1673580742890-4af144293960?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/> 
                        </div>
                        <div className='description'>
                          <h1>Food</h1>
                        <p>
                        India's streets are a bustling carnival of colors, sounds, 
                        and, most importantly, flavors. The country's street food 
                        culture is as diverse.
                        </p>
                        <a href='/Food'> 
                          <button>Read More</button>
                        </a>
                        </div>
                        </div>
            </div>

            <div className='col-md-4 '>
                        <div className='sections'>
                        <div className='blog-img'>
                        <img href='#' src='https://plus.unsplash.com/premium_photo-1676634832558-6654a134e920?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/> 
                        </div>
                        <div className='description'>
                          <h1>Sports</h1>
                        <p>
                        India's streets are a bustling carnival of colors, sounds, 
                        and, most importantly, flavors. The country's street food 
                        culture is as diverse.
                        </p>
                        <a href='/sports'> 
                          <button>Read More</button>
                        </a>
                        </div>
                        </div>
            </div>

            <div className='col-md-4 '>
                        <div className='sections'>
                        <div className='blog-img'>
                        <img href='#' src='https://plus.unsplash.com/premium_photo-1677343210638-5d3ce6ddbf85?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/> 
                        </div>
                        <div className='description'>
                          <h1>Travel</h1>
                        <p>
                        India's streets are a bustling carnival of colors, sounds, 
                        and, most importantly, flavors. The country's street food 
                        culture is as diverse.
                        </p>
                        <a href='/travel'> 
                          <button>Read More</button>
                        </a>
                        </div>
                        </div>
            </div>
            
            <div className='col-md-4 '>
                        <div className='sections'>
                        <div className='blog-img'>
                        <img href='#' src='https://plus.unsplash.com/premium_photo-1683141498413-cdfc0feccdb3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/> 
                        </div>
                        <div className='description'>
                          <h1>Politics</h1>
                        <p>
                        India's streets are a bustling carnival of colors, sounds, 
                        and, most importantly, flavors. The country's street food 
                        culture is as diverse.
                        </p>
                        <a href='/politics'>  
                          <button>Read More</button>
                        </a>
                        </div>
                        </div>
            </div>


            <div className='col-md-4 '>
                        <div className='sections'>
                        <div className='blog-img'>
                        <img href='#' src='https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/> 
                        </div>
                        <div className='description'>
                          <h1>Technology</h1>
                        <p>
                        India's streets are a bustling carnival of colors, sounds, 
                        and, most importantly, flavors. The country's street food 
                        culture is as diverse.
                        </p>
                        <a href='/technology'> 
                          <button>Read More</button>
                        </a>
                        </div>
                        </div>
            </div>
            <div className='col-md-4 '>
                        <div className='sections'>
                        <div className='blog-img'>
                        <img href='#' src='https://images.unsplash.com/photo-1534777367038-9404f45b869a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/> 
                        </div>
                        <div className='description'>
                          <h1>Culture</h1>
                        <p>
                        India's streets are a bustling carnival of colors, sounds, 
                        and, most importantly, flavors. The country's street food 
                        culture is as diverse.
                        </p>
                        <a href='/travel'> 
                          <button>Read More</button>
                        </a>
                        </div>
                        </div>
            </div>
            

            
            
        </div>
      </div>
      </div>


      {/* -----------------about us---------------------- */}
     

    </div>
  )
}
