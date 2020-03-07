import React from 'react';

import './Post.css';

const Post = ({ title, author, clickHandler }) => (
    <article className="Post" onClick={clickHandler}>
        <h1>{title}</h1>
        <div className="Info">
            <div className="Author">{author}</div>
        </div>
    </article>
);

export default Post;