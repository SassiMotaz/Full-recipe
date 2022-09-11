import React from 'react'
import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'


function Search() {
    const [search, setSearch] = React.useState('')
    const navigate = useNavigate()


   
    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate(`/search/${search}`)
    }
  return (
    <SearchBar onSubmit={handleSubmit}>
        <input type="text" placeholder="Search for a recipe" onChange={(e) => setSearch(e.target.value)} value={search}/>
        <button><FaSearch /></button>
    </SearchBar>
    
  )
}

const SearchBar = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    cursor: pointer;
    input {
        width: 90%;
        height: 100%;
        border: none;
        outline: none;
        font-size: 1.5rem;
        padding: 10px;
        margin: 10px;
    }
    button {
        width: 10%;
        height: 100%;
        border: none;
        outline: none;
        font-size: 1.5rem;
        padding: 10px;
        margin: 10px;
        cursor: pointer;
        background-color: #fff;
        &:hover {
            background-color: #f5f5f5;
            
        }
    }
`



export default Search