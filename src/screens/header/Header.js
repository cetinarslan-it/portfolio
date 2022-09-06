import React from 'react'
import Typed from 'react-typed'
import './header.css'

function Header() {
  return (
    <div className= "header-container" >
        <h1 className= "header-question">
            Who am I?
        </h1>
        <Typed
            strings={[
                '',
                'System Engineer',
                'Automation Tester',
                'Fullstack .Net Developer',
                ''  
            ]}
            typeSpeed={100}
            backSpeed={80}
            loop    
        />
    </div>
  )
}

export default Header