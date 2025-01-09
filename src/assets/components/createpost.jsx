import React, { useState } from 'react';

const CreatePost = () => {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        author: '',
        date: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:3000/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        if (response.ok) {
            window.location.href = '/';
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="create-post">
            <form className="create-post__form" onSubmit={handleSubmit}>
                <input 
                    name="title"
                    className="create-post__input" 
                    type="text" 
                    placeholder="Title"
                    onChange={handleChange}
                />
                <textarea 
                    name="content"
                    className="create-post__textarea" 
                    placeholder="Content"
                    onChange={handleChange}
                ></textarea>
                <input 
                    name="author"
                    className="create-post__input" 
                    type="text" 
                    placeholder="Author"
                    onChange={handleChange}
                />
                <input 
                    name="date"
                    className="create-post__input" 
                    type="date"
                    onChange={handleChange}
                />
                <button type='submit'>Create Post</button>
            </form>
        </div>
    );
};

export default CreatePost;