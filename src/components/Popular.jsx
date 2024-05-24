import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Popular() {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        fetchAPI();
    }, []);

    const fetchAPI = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&number=5`);
        const data = await api.json();
        console.log(data);
        setPopular(data.recipes);
    }
    return (
        <>
            {popular.map(recipe => {
                return (
                    popular.map(recipe => {
                        return (
                            <div className="Wrapper" key={recipe.id}>
                                <p>{recipe.title}</p>
                                <img src="{recipe.image}" alt="{recipe.title}" />
                            </div>
                        )
                    })
                );
            })}
        </>
    );
}