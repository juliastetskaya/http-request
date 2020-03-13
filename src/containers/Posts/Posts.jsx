import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import './Posts.css';

const Posts = ({ history }) => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(false);
    
    const getPosts = useCallback(() => {
        axios.get('/posts')
            .then(response => {
                setPosts(response.data.slice(0, 4).map(post => ({
                    ...post,
                    author: 'Max',
                })));
            })
            .catch(() => {
                setError(true);
            })
    }, [setPosts]);

    useEffect(() => {
        getPosts();
    }, [getPosts]);

    const postSelectedHandler = (id) => {
        history.push({ pathname: `/${id}` });
    };

    return (
        <section className="Posts">
            {!error ? posts.map(({ id, title, author }) =>
                <Post
                    key={id}
                    title={title}
                    author={author}
                    clickHandler={() => postSelectedHandler(id)}
                />)
            : <p style={{ textAlign: 'center', color: 'red'}}>Something went wrong!</p>}
        </section>
    );
};

export default Posts;
