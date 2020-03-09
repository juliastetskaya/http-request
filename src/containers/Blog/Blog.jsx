import React, { useEffect, useState, useCallback } from 'react';
import axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(false);
    const [selectedPostId, setSelectedPostId] = useState(null);
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
        setSelectedPostId(id);
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
            <section>
                <FullPost id={selectedPostId} />
            </section>
            <section>
                <NewPost />
            </section>
        </div>
    )
};

export default Blog;