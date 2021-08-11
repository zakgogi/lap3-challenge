import React from 'react';
import './style.css';
const SearchUser = () => {
    
    const handleFormSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('username', e.target[0].value);
        window.location.assign('/repo');
    }

    return (
        <div class="userForm">
            <h1>Enter your github username:</h1>
            <form onSubmit={handleFormSubmit}>
                <input id="username" type="text"></input>
                <input type="submit"></input>
            </form>
        </div>

    ); 
}
 
export default SearchUser;