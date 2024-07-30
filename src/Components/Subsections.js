import React from 'react'

function Subsections({headline,img,desc,}) {
  return (
    <div>
      <div className='food-description'>
        <div className='container-fluid'>
                    <h1 className='hedline don'>{headline}</h1>
              <div className='row md-4'>
                
                <div className='col-md-6 md-4'>
                  <div className='f-img'>
                    <img src={img}/>
                  </div>
                  </div>
                  <div className='col-md-6 md-4'>
                  <div className='f-desc'> {desc}  </div>
                </div>

              </div>
          </div>

      </div>
    </div>
  )
}

export default Subsections