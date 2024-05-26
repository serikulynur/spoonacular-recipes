import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import '../assets/css/Recipe.css';
export default function Recipe() {
    let params = useParams();
    const [recipe, setRecipe] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${import.meta.env.VITE_API_KEY}`);
        const detailData = await data.json();
        setRecipe(detailData);
    };

    useEffect(() => {
        fetchDetails();
    }, [params.name]);

    return (
        <RecipeContainer>
            <RecipeHeader>
                <h2>{recipe.title}</h2>
                <img src={recipe.image} alt={recipe.title || 'Recipe image'} />
            </RecipeHeader>
            <Content>
                <Tabs>
                    <TabButton active={activeTab === 'instructions'} onClick={() => setActiveTab('instructions')}>Instructions</TabButton>
                    <TabButton active={activeTab === 'ingredients'} onClick={() => setActiveTab('ingredients')}>Ingredients</TabButton>
                </Tabs>
                <Panel>
                    {activeTab === 'instructions' ? (
                        <p dangerouslySetInnerHTML={{ __html: recipe.instructions || "No instructions provided." }} />
                    ) : (
                        <ul>
                            {recipe.extendedIngredients?.map(ingredient => (
                                <li key={ingredient.id}>{ingredient.original}</li>
                            ))}
                        </ul>
                    )}
                </Panel>
            </Content>
        </RecipeContainer>
    );
}

const RecipeContainer = styled.div`
    margin: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const RecipeHeader = styled.div`
    text-align: center;
    img {
        max-width: 80%;
        height: auto;
        border-radius: 10px;
    }
`;

const Content = styled.div`
    width: 100%;
    background: #f8f8f8;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const Tabs = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

const TabButton = styled.button`
    padding: 10px 20px;
    border: none;
    background-color: ${({ active }) => active ? '#ccc' : 'white'};
    font-size: 16px;
    cursor: pointer;
    &:hover {
        background-color: #ddd;
    }
    &:focus {
        outline: none;
    }
`;

const Panel = styled.div`
    p, ul {
        padding: 0 20px;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        padding: 5px 0;
        font-size: 16px;
    }
`;