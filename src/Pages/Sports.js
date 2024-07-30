import React from 'react'
import Sections from '../Components/Sections'

export default function Sports() {
  return (
    <div>
      <div className='sports-section'>
      <div className='container-fluid'>
        <h1 className='hedline'> Sports</h1>
        <div className='row'>
        <div className='col-md-4 '>

        <Sections
                    
                    img = "https://plus.unsplash.com/premium_photo-1676634832558-6654a134e920?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="Basketball"
                    description= "  Explore the iconic skyline of New York City, punctuated by skyscrapers and historic landmarks.Experience the cultural melting pot of New York City, where every neighborhood tells a different story."
                    link='/basketball'
                    /> 
       </div>


            <div className='col-md-4 '>

            <Sections
           
                    img='https://images.unsplash.com/photo-1593013820725-ca0b6076576f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    title="Football"
                    description= "  Explore the iconic skyline of New York City, punctuated by skyscrapers and historic landmarks.Experience the cultural melting pot of New York City, where every neighborhood tells a different story."
                    link='/football'
                    /> 


            </div>


            <div className='col-md-4 '>

                <Sections
              
              img='https://images.unsplash.com/photo-1593766787879-e8c78e09cbbe?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              title="Cricket"
              description= "  Explore the iconic skyline of New York City, punctuated by skyscrapers and historic landmarks.Experience the cultural melting pot of New York City, where every neighborhood tells a different story."
              link='/cricket'
              /> 
              
                        
            </div>



            <div className='col-md-4 '>

                <Sections
              
              img='https://images.unsplash.com/photo-1622599476652-949701db25a4?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              title="Boxing"
              description= "  Explore the iconic skyline of New York City, punctuated by skyscrapers and historic landmarks.Experience the cultural melting pot of New York City, where every neighborhood tells a different story."
              link='/boxing'
              /> 
                        
            </div>


            <div className='col-md-4 '>

                <Sections
              
              img='https://images.unsplash.com/photo-1579156618917-b734365d4a7b?q=80&w=2964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              title="Racing"
              description= "  Explore the iconic skyline of New York City, punctuated by skyscrapers and historic landmarks.Experience the cultural melting pot of New York City, where every neighborhood tells a different story."
              link='/racing'
              /> 


                        
            </div>


            <div className='col-md-4 '>

                  <Sections
                
                img='https://plus.unsplash.com/premium_photo-1684820878202-52781d8e0ea9?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                title="Cycling"
                description= "  Explore the iconic skyline of New York City, punctuated by skyscrapers and historic landmarks.Experience the cultural melting pot of New York City, where every neighborhood tells a different story."
                link='/cycling'
                /> 

                    
            </div>



            
        </div>
      </div>
      </div>
    </div>
  )
}
