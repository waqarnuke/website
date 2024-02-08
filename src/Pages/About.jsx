import React from 'react'
import Common from '../Component/Common';
import web from '../Images/hero-img.gif';

const About = () => {
  return (
   <>
      <Common 
      name='Welcome to About us page' 
      imgsrc={web} 
      visit='/Contact'
      btnname="Contact Now" />
   </>
  )
}

export default About