import React from 'react';
import { Container, PostForm } from '../components';

function AddPost() {
    return (
        <div className='py-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x min-h-screen'>
            <Container>
                <h1 className='text-3xl font-bold text-center text-white mb-6'>
                    Add New Post
                </h1>
                <PostForm />
            </Container>
        </div>
    );
}

export default AddPost;
