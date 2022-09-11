import { FaPizzaSlice, FaHamburger, GiBowlOfRice } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

import React from "react";

function Category() {
  return (
    <List>
      <Slink to="/cuisine/Italian">
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Slink>
      <Slink to="/cuisine/American">
        <FaHamburger />
        <h4>Américain</h4>
      </Slink>
      <Slink to="/cuisine/Thai">
        <GiNoodles />
        <h4>Thai</h4>
      </Slink>
      <Slink to="/cuisine/chinese">
        <GiChopsticks />
        <h4>chinois</h4>
      </Slink>
    </List>
  );
}

const List = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    cursor: pointer;   
          
}`;
const Slink = styled(NavLink)`
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    cursor: pointer;
    &:hover {
        background-color: #f5f5f5;
    }
    h4 {
        font-size: 1rem;
        margin: 0;
    }
    svg {
        font-size: 2rem;
    }
    &.active {
        background: linear-gradient(to right, #f27121, #e94057, #8a2387);
        svg  {
            color: #fff;
        }
        h4 {
            color: #fff;
        }
    }
`;





export default Category;
