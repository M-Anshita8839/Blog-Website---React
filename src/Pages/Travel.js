import React from 'react'
import { Link } from 'react-router-dom'
import Sections from '../Components/Sections'

export default function Travel() {
  return (
    <div>
      <div className='Travel-section'>
        <div className='container-fluid'>
          <h1 className='hedline'>Travelling-BLogs</h1>
          <div className='row'>
            <div className='col-md-4 '>

            <Sections
                    
                    img = "https://images.unsplash.com/photo-1532664189809-02133fee698d?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title= "India"
                    description= " Crispy on the outside, savory on the inside  a samosa is a delightful bite of flavor and texture. A symphony of spices encased in a golden, crunchy pastry  that's the magic of a samosa."
                    link='/india'
                    /> 
              
            </div>

            <div className='col-md-4 '>

              
            <Sections
                    
                    img = "https://plus.unsplash.com/premium_photo-1666432045848-3fdbb2c74531?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title= "Maldives"
                    description= "  Explore the iconic skyline of New York City, punctuated by skyscrapers and historic landmarks.Experience the cultural melting pot of New York City, where every neighborhood tells a different story."
                    link='/maldives'
                    /> 

            </div>


            <div className='col-md-4 '>


            <Sections
                    
                    img = "https://plus.unsplash.com/premium_photo-1672082110907-6d4106ee9e4d?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title= "Newyork"
                    description= "  Explore the iconic skyline of New York City, punctuated by skyscrapers and historic landmarks.Experience the cultural melting pot of New York City, where every neighborhood tells a different story."
                    link='/newyork'
                    /> 

            </div>



            <div className='col-md-4 '>

              
            <Sections
                    
                    img = "https://images.unsplash.com/photo-1548603613-53d4508a85f8?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title= "US"
                    description= "  Explore the iconic skyline of New York City, punctuated by skyscrapers and historic landmarks.Experience the cultural melting pot of New York City, where every neighborhood tells a different story."
                    link='/us'
                    /> 

            </div>


            <div className='col-md-4 '>

                 
            <Sections
                    
                    img = "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="Dubai"
                    description= "  Explore the iconic skyline of New York City, punctuated by skyscrapers and historic landmarks.Experience the cultural melting pot of New York City, where every neighborhood tells a different story."
                    link='/us'
                    /> 
              
            </div>



            <div className='col-md-4 '>

            <Sections
                    
                    img = "https://images.unsplash.com/photo-1477271706509-fecda7438b68?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="Switzerland"
                    description= "  Explore the iconic skyline of New York City, punctuated by skyscrapers and historic landmarks.Experience the cultural melting pot of New York City, where every neighborhood tells a different story."
                    link='/switzerland'
                    /> 
              
            </div>



          </div>
        </div>
      </div>
    </div>
  )
}
