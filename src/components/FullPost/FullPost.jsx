import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import './FullPost.css';

const FullPost = ({ id }) => {
    const [loadedPost, setLoadedPost] = useState(null);
    const getFullPost = useCallback(() => {
        if (id) {
            axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
                .then(response => setLoadedPost(response.data));
        }
    }, [id]);

    useEffect(() => {
        getFullPost();
    }, [getFullPost]);

    const deletePostHandler = () => {
        axios.delete(`http://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => console.log(response));
    }

    return loadedPost
        ? (
            <div className="FullPost">
                <h1>{loadedPost.title}</h1>
                <p>{loadedPost.body}</p>
                <div className="Edit">
                    <button className="Delete" onClick={deletePostHandler}>Delete</button>
                </div>
            </div>
        )
        : <p style={{textAlign: 'center'}}>Please select a Post!</p>;
}

export default FullPost;