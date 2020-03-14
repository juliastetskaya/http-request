import React from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';
import './Blog.css';

const Blog = () => (
    <div>
        <header className="Blog">
            <nav>
                <ul>
                    <li><NavLink to="/posts/" exact>Posts</NavLink></li>
                    <li><NavLink to="/new-post">New Post</NavLink></li>
                </ul>
            </nav>
        </header>
        <Switch>
            <Route path="/posts/" component={Posts} />
            <Route path="/new-post" component={NewPost} />
            <Route render={() => <h1 style={{ textAlign: 'center'}}>The page wasn't found!</h1>} />
            {/* <Redirect from="/" to="/posts" /> */}
        </Switch>
    </div>
);

export default Blog;