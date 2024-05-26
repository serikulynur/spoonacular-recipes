import { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; 
import "../assets/css/Popular.css";
import { Link } from 'react-router-dom';


export default function Veggie() {
    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        fetchAPI();
    }, []);

    const fetchAPI = async () => {
        const LocalStorage = localStorage.getItem("veggie");

        if (LocalStorage) {
            setVeggie(JSON.parse(LocalStorage)); //converting json into js object and setting it into popular using setPopular
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&number=9&tags=vegetarian`);
            const data = await api.json(); //converting responce into json and then storing it in data variable
            localStorage.setItem("veggie", JSON.stringify(data.recipes));
            setVeggie(data.recipes);
            console.log(data.recipes);
        }
    }

    return (
        <div className="Wrapper">
            <h3>Our Vegetarian Picks</h3> 
            <Splide
            options={{
                perPage: 3,
                gap: '1rem',
                pagination: false,
                arrows: false,
                drag: 'free',
            }}
            >
            {veggie .map((recipe) => (
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