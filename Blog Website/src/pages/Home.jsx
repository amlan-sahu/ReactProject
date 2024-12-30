import React, { useEffect, useState } from 'react';
import service from "../appwrite/config";
import { Container, PostCard } from '../components';
import { useSelector } from "react-redux";

function Home() {
    const [posts, setPosts] = useState([]);
    const authStatus = useSelector((state) => state.auth.status);

    useEffect(() => {
        service.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    return (
        <div className='w-full py-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 dark:bg-gray-900 min-h-screen'>
            <Container>
                <h1 className='text-3xl font-bold text-center text-white mb-6'>
                    {authStatus ? "All Posts" : "Explore Our Posts"}
                </h1>
                <div className='flex flex-wrap -mx-2'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transform transition duration-300 hover:scale-105'>
                            <div className='bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden'>
                                <img
                                    src={service.getFilePreview(post.featuredImage)}
                                    alt={post.title}
                                    className='w-full h-48 object-cover'
                                />
                                {!authStatus && (
                                    <div className='p-4'>
                                        <h2 className='text-lg font-bold text-gray-900 dark:text-white'>
                                            {post.title}
                                        </h2>
                                        <p className='text-sm text-gray-600 dark:text-gray-400'>
                                            Sign up or log in to read more!
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;

