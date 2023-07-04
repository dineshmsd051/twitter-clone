import React from 'react'

function SideBarOption({ text, Icon }) {
  return (
    <div className='sideBarOption'>
        <Icon />
        <h2>{text}</h2>
    </div>
  )
}

export default SideBarOption