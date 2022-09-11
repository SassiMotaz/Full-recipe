import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchRecipe = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    setRecipe(data);
  };

  useEffect(() => {
    fetchRecipe();
  }, [id]);
  return (
    <DeWarpper>
      <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <Info>
        <Button className={activeTab === "instructions" ? "active" : ""} onClick={() => setActiveTab("instructions")}>
          Instructions
        </Button>
        <Button className={activeTab === "ingredients" ? "active" : ""} onClick={() => setActiveTab("ingredients")}>
          Ingredients
        </Button>
        <div>
          {activeTab === "instructions" && (
            <div dangerouslySetInnerHTML={{ __html: recipe.instructions }}></div>
          )}
          {activeTab === "ingredients" && (
            <ul>
              {recipe.extendedIngredients &&
                recipe.extendedIngredients.map((ingredient) => {
                  return <li key={ingredient.id}>{ingredient.original}</li>;
                })}
            </ul>
          )}
          
        </div>
      </Info>
    </DeWarpper>
  );
}

const DeWarpper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Info = styled.div`
margin-left: 10rem;
display: flex;

} `;

const Button = styled.button`
  padding: 1rem 1rem;
  display: flex;
  color: #313131;
  background-color: #f5f5f5;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 400;
`;

export default Recipe;
