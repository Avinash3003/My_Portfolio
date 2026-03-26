
import React from 'react';
import Nav from './Nav';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    return (
        <div className='w-full flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-6 md:gap-8 mb-6 sm:mb-10'>
            <Nav onclick={() => navigate('/')} name="HOME" />
            <Nav onclick={() => navigate('/about')} name="ABOUT ME" />
            <Nav onclick={() => navigate('/projects')} name="PROJECTS" />
            <Nav onclick={() => navigate('/experience')} name="EXPERIENCE" />
        </div>
    );
}

export default Header;
