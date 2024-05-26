 import styled from 'styled-components';
 import { useState } from 'react';
 import { useNavigate} from 'react-router-dom'
 import { FaSearch } from 'react-icons/fa';

 
 export default function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input )
    };
     
    return (
        <FormStyle onSubmit={submitHandler}>
            <FaSearch />
            <input type="text" placeholder='Search For Recipe' value={input} onChange={(e) => setInput(e.target.value)}/>
        </FormStyle>
    );
 }

const FormStyle = styled.form`
    margin: calc((30 / 16) * 1rem) auto; // Center the form on the page horizontally
    position: relative;
    width: 50%; // Adjust the width as needed
    max-width: 800px; // Prevents the form from becoming too wide on larger screens

    input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem; // Padding to the left and right of the text
        border-radius: 1rem;
        outline: none;
        width: 100%; // Ensures the input fills the form element
    }

    svg {
        position: absolute;
        top: 50%;
        left: 1rem; // Position the icon inside the input
        transform: translateY(-50%);
        color: white;
        pointer-events: none; // Make the icon non-interactive
    }
`;

const FaSearchIcon = styled(FaSearch)`
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    color: white;
    pointer-events: none; // This makes the icon non-interactive
    font-size: 1.5rem; // Matches the input font size for consistency
`;