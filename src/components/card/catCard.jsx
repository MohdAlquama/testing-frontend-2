import React from "react";
function CatCard({ image }) {
  return (
    <div>
      <img src={image} alt="image" />
      {/* <img src="nike-just-do-it" alt="nike" /> */}
    </div>
  );
}

export default CatCard;
