import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {GiKnifeFork} from "react-icons/gi";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork/>
          <Logo to={"/"} >Recipe App</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
text-decoration: none;
font-size: 1.5rem;
font-weight: 400;
font-family: 'Lobster', cursive;
`;

const Nav = styled.nav`
display: flex;
padding: 4rem 0rem;
justify-content: flex-start;
align-items: center;
 svg {
    font-size: 2rem;
 }  
`;



export default App;
