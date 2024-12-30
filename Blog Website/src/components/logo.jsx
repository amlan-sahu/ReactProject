import React from 'react';

function Logo({ width = '100px' }) {
    return (
        <img src="/logo_blog.png" alt="Blog Logo" style={{ width }} />
    );
}

export default Logo;
