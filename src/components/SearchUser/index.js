import React from 'react';
import './style.css';
const SearchUser = () => {
    
    const handleFormSubmit = (e) => {
        e.preventDefault()
        window.location.assign('/repo');
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text"></input>
            <input type="submit"></input>
        </form>

    ); 
}
 
export default SearchUser;