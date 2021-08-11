import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./style.css";

const RepoContainer = () => {
    
    const [ repos, setRepos ] = useState([
        {name: "client-lap-3", stars: 0, forks: 5, lastUpdated: "05/05/05", language: "javaScript", owner: {avatar_url: "https://avatars.githubusercontent.com/u/63318601?v=4"}, created_at: "2021-06-17T13:39:27Z"},
        {name: "client-lap-4", stars: 0, forks: 5, lastUpdated: "05/05/05", language: "javaScript"}
    ]);
    const [ errorMessage, setErrorMessage ] = useState('no error');
    const username = localStorage.getItem('username');
    const API = `https://api.github.com/users/${username}/repos`;

    useEffect(()=>{
        const fetchGithubData = async () => {
            try {
                let { data } = await axios.get(API);
                setRepos(data);
            } catch (error) {
                setErrorMessage('There was an error fetching data!');
            }
        }
        fetchGithubData();
    }, [])

    const renderRepos = () => {
        //limit of 10 repos
        let slicedRepos = repos.slice(0, 10);
        return slicedRepos.map(r => {
            return (
                <div className = "repo">
                    <h2 onClick={() => {goToDetails(r.name, r.created_at)}}>{r.name}</h2>
                    <p>Forks: {r.forks}</p>
                    <p>Primary Language: {r.language}</p>
                </div>
            )
        })
    }

    const goToDetails = (name, createdAt) => {
        localStorage.setItem('repoName', name);
        localStorage.setItem('createdAt', createdAt)
        window.location.assign('/repoDetails')
    }
    

    return (
        <>
        {errorMessage !== "no error" ? 
            <h1 class="error">{errorMessage}</h1> : 
            <>     
                <div class="avatar">
                    <img src={repos[0].owner.avatar_url}></img>
                </div>
                <div class="name">
                    <h2 id="username">{username}</h2>
                </div>
                <div class="allRepos">
                    { renderRepos() }
                </div>
            </>
        } 
        
        </>
    );
}
 
export default RepoContainer;