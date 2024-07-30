import React from 'react'
import Sections from '../Components/Sections'
export default function Food() {
  return (
    <div>
                      
      <div className='food-section'>
      <div className='container-fluid'>
        <h1 className='hedline'> Food-Blogs</h1>
        <div className='row'>
        <div className='col-md-4 '>
           <Sections
                    
                    img = "https://plus.unsplash.com/premium_photo-1695297516676-04a259917c03?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://images.unsplash.com/photo-1608039783021-6116a558f0c5?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title= "Samosa"
                    description= " Crispy on the outside, savory on the inside  a samosa is a delightful bite of flavor and texture. A symphony of spices encased in a golden, crunchy pastry  that's the magic of a samosa."
                    link='/samosa-detail'
                    />             
          </div>

          <div className='col-md-4 '>

          <Sections
                    
                    img = "https://images.unsplash.com/photo-1582293041079-7814c2f12063?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title= "Donuts"
                    description= " A sweet circle of happiness in every bite.Indulge in the delightful, fluffy perfection of a freshly made donut.   From classic glazed to creative flavors, there's a donut for every craving.."
                    link='/donut-detail'
                    />             
                        
            </div>

            <div className='col-md-4 '>

            <Sections
                    
                    img = "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title= "Cup-Cakes"
                    description= " A sweet circle of happiness in every bite.Indulge in the delightful, fluffy perfection of a freshly made donut.   From classic glazed to creative flavors, there's a donut for every craving.."
                    link='/cake-detail'
            />     
              
            </div>

            <div className='col-md-4 '>

            <Sections
                    
                    img = "https://images.unsplash.com/photo-1495570689269-d883b1224443?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title= "Strawberry"
                    description= "    Strawberries a vibrant red delight that's as beautiful as it is delicious.Packed with vitamins and antioxidants, strawberries are a treat that's as healthy as it is tasty."
                    link='/strawberry-detail'
            />  

            </div>
            
            
            <div className='col-md-4 '>

            <Sections
                    
                    img = "https://images.unsplash.com/photo-1498603821686-38df172a18bb?q=80&w=2795&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title= "Pastry"
                    description= "A bite of our pastry cake is a journey through sweet, buttery perfection.Experience the    magic of expertly crafted pastry cakes, where every layer tells a story.    a symphony of textures and tastes in every decadent slice"
                    link='/pastry-detail'
            />  
                        
            </div>
            <div className='col-md-4 '>

            <Sections
                    
                    img = "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title= "Papdi-Chat"
                    description= "A bite of our pastry cake is a journey through sweet, buttery perfection.Experience the    magic of expertly crafted pastry cakes, where every layer tells a story.    a symphony of textures and tastes in every decadent slice"
                    link='/papdi-chat'
            />  

                      
            </div>

          



        </div>
      </div>
      </div>




    </div>
  )
}
