import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Search from '../components/Search';

export default function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();
    useEffect(() => {
        fetchAPI(params.search )
    }, [params.search ])

    const fetchAPI = async name => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&query=${name}`);
        const data = await api.json();
        setSearchedRecipes(data.results);
    }
      
    return (
        <>
            <Search /> 
            <Grid>
                {searchedRecipes.map(item => {
                    return (
                        <Card key={item.id}>
                            <img src={item.image} alt="" />
                            <h4>{item.title}</h4>
                        </Card>
                    );
                })}
            </Grid >
        </>
    );
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: calc((15 / 16) * 1rem);
`;

const Card = styled.div`
    background-color: var(--White);
    border-radius: calc((12 / 16) * 1rem);
    text-align: center;
    position: relative;

    img {
        width: 100%;
        height: auto;
        border-radius: calc((12 / 16) * 1rem);
    }

    h4 {
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%);
        color: var(--Rose-White);
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`; 