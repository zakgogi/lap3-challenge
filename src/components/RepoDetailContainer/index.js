import React from 'react';
import './style.css';

const RepoDetailContainer = () => {

    let createdAt = localStorage.getItem('createdAt').toString();
    let year = createdAt.slice(0, 10);
    let time = createdAt.slice(11,16);

    return ( 
    <div class="info">
        <h1>{localStorage.getItem('repoName')}</h1>
        <h2>Created at: {year}, {time}</h2>
    </div>
    
    
    )
}
 
export default RepoDetailContainer;