import React from "react";

// Assets
import Placeholder from "../../Assets/img/placeholder.png";

// styles
import "./IngredientPicture.scss";

function IngredientPicture({ image }) {
  return (
    <div>
      <img src={image ?? Placeholder} className="image" />;
    </div>
  );
}

export default IngredientPicture;
