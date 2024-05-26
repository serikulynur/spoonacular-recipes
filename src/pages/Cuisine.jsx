import Category from "../components/Category";
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "../components/Search";

export default function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    const params = useParams();
    useEffect(() => {
        fetchAPI(params.type);
        console.log(params);
    }, [params.type])

    const fetchAPI = async name => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&cuisine=${name}`);
        const data = await api.json();
        setCuisine(data.results);
    }

    return (
        <>
        <Search />
        <Category />
        <Grid>
            {cuisine.map(item => {
                return (
                    <Card key={item.id}>
                        <Link>
                            <img src={item.image} alt="" />
                            <h4>{item.title}</h4>
                        </Link>
                    </Card>
                )
            })}
        </Grid>
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