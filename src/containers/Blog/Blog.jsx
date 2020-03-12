import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';
import FullPost from '../FullPost/FullPost';
import './Blog.css';

const Blog = () => (
    <div>
        <header className="Blog">
            <nav>
                <ul>
                    <li><NavLink to="/" exact>Home</NavLink></li>
                    <li><NavLink to="/new-post">New Post</NavLink></li>
                </ul>
            </nav>
        </header>
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
        <Route path="/:id" component={FullPost} />
    </div>
);

export default Blog;