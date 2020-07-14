import React from 'react'
import {Link} from 'react-router-dom'

function Header(props) {

  return(
    <div id='header'>
      <Link to='/'>Home</Link>
      <h1>Welcome to My Fake React Blog!</h1>
    </div>
  )
}

export default Header
