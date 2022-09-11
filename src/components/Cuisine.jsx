import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=12`
    );
    const data = await response.json();
    setCuisine(data.results);
  };
  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);
  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
        {cuisine.map((recipe) => {
            return (
                <Card key={recipe.id}>
                    <Link to={`/recipe/${recipe.id}`}>
                    <img src={recipe.image} alt={recipe.title} />
                    <h4> {recipe.title} </h4>
                    </Link>
                </Card>
            )
        })}
    </Grid>

    );
}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    padding: 1rem;
    margin: 1rem;
`;
const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Cuisine;
