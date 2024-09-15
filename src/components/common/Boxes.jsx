import React from 'react'

const Boxes = ({children, className=""}) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default Boxes