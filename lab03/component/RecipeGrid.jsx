import React, { useEffect, useState } from "react";
import RenderItem from "./RenderItem";

export default function RecipeGrid() {
  const menuItems = ["Save Recipe", "Folders", "Recipes by Genevieve"];
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.mockapi.com/api/v1/users") 
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }
        return response.json();
      })
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <div className="sidebar" style={{ color: "gray" }}>
        <RenderItem array={menuItems} />
      </div>
      <div className="grid-container">
        {loading && <p>Loading recipes...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.image} alt={recipe.name} className="recipe-image" />
              <h3>{recipe.name}</h3>
              <p>{recipe.time} minutes</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
