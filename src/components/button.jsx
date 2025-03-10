import React from 'react'

function Button({
    name , colour 
}) {
  return (
    <div class="bg-blue-600">
      {name}
      {colour}
    </div>
  )
}

export default Button
