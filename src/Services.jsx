import React from 'react'

function Services(props) {
  let background = {
    height: "100vh",
    backgroundImage : `url(${props.images.Services})`,
    backgroundSize : "cover"
  }
  return (
    <div style={background}>
      <div className='addBar' >
         <p>{props.info.phoneno}</p>   
      </div> <hr />
      <div className='NavBar'>
        <h1> <a href="">{props.info.sitename}</a> </h1>
        <ul className='menu'>
            <li><a href="">{props.info.page1}</a></li>
            <li><a href="">{props.info.page2}</a></li>
            <li><a href="">{props.info.page3}</a></li>
        </ul>
      </div>  
    </div>
  )
}

export default Services
