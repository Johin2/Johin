import React from 'react'

const Boxes = React.forwardRef(({children, className="", id}, ref) => {
  return (
    <div className={className} ref={ref} id={id}>
      {children}
    </div>
  )
})

export default Boxes