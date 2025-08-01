
import React from 'react';
import Nav from './Nav';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    return (
        <div className='h-auto flex flex-wrap justify-end md:pr-30 mt-6 gap-4 md:gap-8'>
            <Nav onclick={() => navigate('/')} name="HOME" />
            <Nav onclick={() => navigate('/about')} name="ABOUT ME" />
            <Nav onclick={() => navigate('/projects')} name="PROJECTS" />
            <Nav onclick={() => navigate('/edu')} name="EDUCATION" />
        </div>
    );
}

export default Header;
