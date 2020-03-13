import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import Post from '../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import './Posts.css';

const Posts = ({ history, match }) => {
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
        history.push({ pathname: `/posts/${id}` });
    };

    return (
        <div>
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
            <Route path={`${match.url}/:id`} exact component={FullPost} />
        </div>
    );
};

export default Posts;
