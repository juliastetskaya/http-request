import React from 'react';
import { Route } from 'react-router-dom';

import Posts from '../Posts/Posts';
import './Blog.css';

const Blog = () => (
    <div>
        <header className="Blog">
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/new-post">New Post</a></li>
                </ul>
            </nav>
        </header>
        <Route path="/" exact component={Posts} />
    </div>
);

export default Blog;