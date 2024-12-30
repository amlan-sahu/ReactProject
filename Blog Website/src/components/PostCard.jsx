import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage, className }) {
    return (
        <Link to={`/post/${$id}`} className={`block ${className}`}>
            <div className='w-full bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 hover:shadow-lg'>
                <div className='w-full flex justify-center mb-4'>
                    <img
                        src={appwriteService.getFilePreview(featuredImage)}
                        alt={title}
                        className='rounded-xl object-cover w-full h-48'
                    />
                </div>
                <h2 className='text-xl font-bold text-gray-900 dark:text-white'>
                    {title}
                </h2>
            </div>
        </Link>
    );
}

export default PostCard;
