import React from 'react'
import './interface.css'

function Interface() {
  return (
    <div className="interfacebg">
      <div className="intContent">
        <div className="bios">
          <div className="svgCont">SVG</div>
          <div className="imgCont"><img alt="My pics here"/></div>
        </div>
        <div className="biotext">
          <div className="ola" datatype="main">I Am Olayinka</div>
          <p>My name is Olayinka</p>
        </div>
        <div className="foo">
          <p>Copyright Olayinka</p>
        </div>
      </div>
    </div>
  )
}

export default Interface
