import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const getPosts = useCallback(() => {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data);
            })
    }, [setPosts]);

    useEffect(() => {
        getPosts();
    }, [getPosts]);

    return (
        <div>
            <section className="Posts">
                {posts.map(post => <Post key={post.id} title={post.title} />)}
            </section>
            <section>
                <FullPost />
            </section>
            <section>
                <NewPost />
            </section>
        </div>
    );
};

export default Blog;