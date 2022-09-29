import React from 'react'
import {Link , Outlet} from "react-router-dom"


function Home() {
  return (
    <div>
       <div className='addBar' >
         <p>  {props.info.phoneno}</p>   
      </div> <hr className='hr'/>
      <div className='NavBar'>
        <h1> <a href="">{props.info.sitename}</a> </h1>
        <ul className='menu'>
            <li> <Link to = '/' >{props.info.page1} </Link></li>
            <li> <Link to= './Services' >{props.info.page2}</Link></li>
            <li>< Link to='./Contact'>{props.info.page3}</Link></li>
        </ul>
      </div>  
      <Link className='btn' to= './Services' >view Portfolio</Link>
      <Outlet/>
    </div>
    
  )
}

export default Home
