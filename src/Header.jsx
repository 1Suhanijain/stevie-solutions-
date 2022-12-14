
import React from 'react'
import {Link , Outlet} from "react-router-dom"


function Header(props) {
  console.log(props.images.Home)


  let background = {
    position : "absolute",
    width : "100%"
    
  }


  return (
    <div style={background}>
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

      <div className="component2">
        <div className="iconbox"></div><div className="box">ndwhiojoi;joi;lkdopjjpjopqk</div>
        <div className="iconbox"></div> <div className="box">higyugougo</div>
         <div className="iconbox"></div><div className="box">jigoygiuhiu</div>
      </div>
      <Outlet/>
    </div>
    
  )
}

export default Header
