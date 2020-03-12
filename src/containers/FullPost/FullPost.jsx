import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import './FullPost.css';

const FullPost = ({ match }) => {
    const [loadedPost, setLoadedPost] = useState(null);
    const getFullPost = useCallback(() => {
        if (match.params.id) {
            axios.get(`/posts/${match.params.id}`)
                .then(response => setLoadedPost(response.data));
        }
    }, [match.params.id]);

    useEffect(() => {
        getFullPost();
    }, [getFullPost]);

    const deletePostHandler = () => {
        axios.delete(`/posts/${match.params.id}`)
            .then(response => console.log(response));
    };

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