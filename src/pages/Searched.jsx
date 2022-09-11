import React, { useEffect, useState } from "react";
import { useParams , Link} from "react-router-dom";
import styled from "styled-components";

function Searched() {
  const [searched, setSearched] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=12`
    );
    const data = await response.json();
    setSearched(data.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <Grid>
      {searched.map((recipe) => {
        return (
          <Card key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
            <img src={recipe.image} alt={recipe.title} />
            <h4> {recipe.title} </h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}
const Grid = styled.div`
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

export default Searched;
