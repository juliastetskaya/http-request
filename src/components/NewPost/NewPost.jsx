import React, { useState } from 'react';
import axios from 'axios';

import './NewPost.css';

const NewPost = () => {
    const [post, setPost] = useState({
        title: '',
        content: '',
        author: 'Max'
    });

    const addPostHandler = () => {
        axios.post('http://jsonplaceholder.typicode.com/posts', post)
            .then(response => console.log(response));
    };

    return (
        <div className="NewPost">
            <h1>Add a Post</h1>
            <label>Title</label>
            <input type="text" value={post.title} onChange={(event) => setPost({ ...post, title: event.target.value})} />
            <label>Content</label>
            <textarea rows="4" value={post.content} onChange={(event) => setPost({ ...post, content: event.target.value})} />
            <label>Author</label>
            <select value={post.author} onChange={(event) => setPost({ ...post, author: event.target.value})}>
                <option value="Max">Max</option>
                <option value="Manu">Manu</option>
            </select>
            <button onClick={addPostHandler}>Add Post</button>
        </div>
    );
}

export default NewPost;