import React, { useState } from 'react';

import Posts from '../Posts/Posts';
import './Blog.css';

const Blog = () => {
    const [selectedPostId, setSelectedPostId] = useState(null);

    const postSelectedHandler = (id) => {
        setSelectedPostId(id);
    };

    return (
        <div>
            <header className="Blog">
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/new-post">New Post</a></li>
                    </ul>
                </nav>
            </header>
            <Posts postSelectedHandler={postSelectedHandler} />
        </div>
    );
};

export default Blog;