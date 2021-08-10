import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RepoContainer = () => {
    
    // const [ repos, setRepos ] = useState([]);

    // const API = "-u your_username https://api.github.com/zen";
    const API = "https://www.boredapi.com/api/activity?participants=1";

    useEffect(()=>{
        const fetchGithubData = async () => {
            try {
                let { data } = await axios.get(API);
                // setRepos(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchGithubData();
    })

    return ( 
        <div>

        </div> 
    );
}
 
export default RepoContainer;