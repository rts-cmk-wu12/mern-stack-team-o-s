import React from 'react';

const CreatePost = () => {
    return (
   <div className="create-post">
    <form className="create-post__form">
        <input className="create-post__input" type="text" placeholder="Title" />
        <textarea className="create-post__textarea" placeholder="Content"></textarea>
        <input className="create-post__input" type="text" placeholder="Author" />
        <input className="create-post__input" type="date" />
        <button type='submit'></button>
    </form>
   </div>
    );
};

export default CreatePost;