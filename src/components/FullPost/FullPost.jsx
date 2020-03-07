import React from 'react';

import './FullPost.css';

const FullPost = ({ id }) => {
    const text = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
    const post = (
        <div className="FullPost">
            <h1>Title</h1>
            <p>Content</p>
            <div className="Edit">
                <button className="Delete">Delete</button>
            </div>
        </div>
    );

    return id ? post : text;
}

export default FullPost;