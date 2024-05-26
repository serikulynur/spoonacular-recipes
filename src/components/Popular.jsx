import { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "../assets/css/Popular.css";
import {Link} from 'react-router-dom';

export default function Popular() {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        fetchAPI();
    }, []);

    const fetchAPI = async () => {
        const LocalStorage = localStorage.getItem("popular");

        if (LocalStorage) {
            setPopular(JSON.parse(LocalStorage)); //converting json into js object and setting it into popular using setPopular
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&number=9`);
            const data = await api.json(); //converting responce into json and then storing it in data variable
            localStorage.setItem("popular", JSON.stringify(data.recipes));
            setPopular(data.recipes);
            console.log(data.recipes);
        }
    }
    return (
        <div className="Wrapper">
            <h3>Popular Picks</h3>
            <Splide
            options={{
                perPage: 4,
                gap: '1rem',
                pagination: false,
                arrows: false,
                drag: 'free',
            }}
            >
            {popular.map((recipe) => (
                <SplideSlide key={recipe.id}>
                    <div className="Card">
                        <Link to={'/recipe/' + recipe.id}>
                            <p>{recipe.title}</p>
                            <img src={recipe.image} alt={recipe.title} />
                        </Link>
                    </div>
                </SplideSlide>
            ))}
            </Splide>
        </div>
    );
}