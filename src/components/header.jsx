import React from 'react';
import Button from './button';

function Header({ name }) {  
  return (
    <div>
      <h1>Header {name}</h1>
      <Button 
        name="add" 
        colour="red"  
      />
    </div>
  );
}

export default Header;

