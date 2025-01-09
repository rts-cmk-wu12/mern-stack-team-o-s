import React from 'react';
import CreatePost from '../assets/components/createpost';
import '../style.css'
const OpretPost = () => {
    return (
        <div className="opret-post-container">
            <h1>Opret Nyt Indlæg</h1>
            <div className="button-group">
                <button
                    type="button"
                    className="cancel-button" 
                    onClick={() => window.location.href = '/'}>
                    Gå til dine indlæg
                </button>
            </div>
            <CreatePost />
        </div>
    );
};

export default OpretPost;