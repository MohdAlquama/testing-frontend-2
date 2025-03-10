import React from 'react';
import Header from './header'
function Home() {


const su= ()=>{
    console.log("alquama");
    
}

  return (
    <div>
        <Header name="dbjnbnfkbfkbngfbkgbnkgfbi"/>
      <h1 class ="text-red-300">Home</h1>
      
        <button class="bg-gray-500" onClick={su}>Submit</button>
    </div>
  )
}

export default Home
