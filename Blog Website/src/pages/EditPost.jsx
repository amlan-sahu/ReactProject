import React, { useEffect, useState } from 'react';
import { Container, PostForm } from '../components';
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPosts] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post);
                }
            });
        } else {
            navigate('/');
        }
    }, [slug, navigate]);

    return post ? (
        <div className='py-8 bg-gray-100 dark:bg-gray-900 min-h-screen'>
            <Container>
                <h1 className='text-3xl font-bold text-center text-gray-900 dark:text-white mb-6'>
                    Edit Post
                </h1>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null;
}

export default EditPost;
