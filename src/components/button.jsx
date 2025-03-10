import React from 'react'

function Button({
    name , colour 
}) {
  return (
    <div className="bg-blue-600">
      {name}
      {colour}
    </div>
  )
}

export default Button
