import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

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
        <Switch>
            <Route path="/" exact component={Posts} />
            <Route path="/new-post" component={NewPost} />
            <Route path="/:id" exact component={FullPost} />
        </Switch>
    </div>
);

export default Blog;