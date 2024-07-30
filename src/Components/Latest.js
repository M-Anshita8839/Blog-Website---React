import React from 'react'

const Latest = () => {

    const latest=[
        {
          url:'https://images.unsplash.com/photo-1640890654285-a6e97fbaafb6?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title:'Historical Places of India',
        },
    
        {
            url:'https://images.unsplash.com/photo-1646483303353-d36732f903cf?q=80&w=2784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title:'Street Food of India',
        },
    
        {
          url:'https://plus.unsplash.com/premium_photo-1675018587778-67888c112bd8?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title:'Trending Technology in the World',
        } ,
        {
        url:'https://images.unsplash.com/photo-1672215251935-0edbeec181ce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGthc2htaXIlMjB2YWxsZXl8ZW58MHx8MHx8fDA%3D',
        title:'Paradise on the Earth',
        },
    
      ];
  return (
    <div>
        <div className='latest-blogs'>
        <div className='container-fluid'>
            <h1 className='headline'>Latest-Blogs</h1>
            <div className='row'>
                {latest.map((card,index)=>(
                    <div className='col-md-6 mg-4' key={index}>
                        <div className='latest-post'>
                        <div className='latest-img'><img src={card.url}/></div>
                        <div className='latest-title'>{card.title}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>


    </div>
  )
}

export default Latest