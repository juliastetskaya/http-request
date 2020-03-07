import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPostId, setSelectedPostId] = useState(null);
    const getPosts = useCallback(() => {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data.slice(0, 4).map(post => ({
                    ...post,
                    author: 'Max',
                })));
            })
    }, [setPosts]);

    useEffect(() => {
        getPosts();
    }, [getPosts]);

    const postSelectedHandler = (id) => {
        setSelectedPostId(id);
    };

    console.log('selectedPostId', selectedPostId);

    return (
        <div>
            <section className="Posts">
                {posts.map(({ id, title, author }) =>
                    <Post
                        key={id}
                        title={title}
                        author={author}
                        clickHandler={() => postSelectedHandler(id)}
                    />)}
            </section>
            <section>
                <FullPost id={selectedPostId} />
            </section>
            <section>
                <NewPost />
            </section>
        </div>
    );
};

export default Blog;