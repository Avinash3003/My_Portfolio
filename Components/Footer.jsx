




import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import CopyrightIcon from '@mui/icons-material/Copyright';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SvgIcon from '@mui/material/SvgIcon';

function LeetCodeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.536-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-7.015 0l-4.32 4.38C3.264 11.47 3 12.502 3 13.565c0 1.064.264 2.096.764 3.03l4.332 4.362A5.048 5.048 0 0 0 11.583 23c1.373 0 2.66-.54 3.633-1.52l2.609-2.636c.514-.515.496-1.366-.039-1.901-.535-.535-1.386-.553-1.901-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
    </SvgIcon>
  );
}

function Footer() {
  return (
    <div>
      <div className='flex flex-col md:flex-row gap-8 justify-between items-center md:items-start md:px-10 lg:px-20 mt-10 mb-8 max-w-7xl mx-auto'>
        <div className='text-base md:text-lg text-center md:text-left flex flex-col gap-2'>
          <h1><EmailIcon className="mr-2 text-indigo-700"/> avinashreddy5142@gmail.com</h1>
          <h1><CallIcon className="mr-2 text-indigo-700"/> +91 9959363408</h1>
          <a href="https://drive.google.com/file/d/1XwecGhoSfn8fwbtM_yFzMrcR0iVN6U10/view?usp=sharing" 
          target="_blank" rel="noreferrer" className="flex items-center justify-center md:justify-start hover:text-indigo-600 transition-colors mt-2">
             <PictureAsPdfIcon className="mr-2 text-red-600"/> View <strong className="ml-1">Resume</strong> <OpenInNewIcon fontSize="small" className="ml-1"/>
          </a>
        </div>

        <div className='flex justify-center items-center gap-6 mt-4 md:mt-0'>
          <a href="https://leetcode.com/u/Avinash3003/" target='_blank' rel="noreferrer" className='text-indigo-600 hover:text-amber-500 hover:-translate-y-1 transition-all duration-300 drop-shadow-sm'>
            <LeetCodeIcon sx={{ fontSize: 44 }} />
          </a>
          <a href="https://www.linkedin.com/in/a-avinash-reddy-7600b025a/" target='_blank' rel="noreferrer" className='text-indigo-600 hover:text-blue-600 hover:-translate-y-1 transition-all duration-300 drop-shadow-sm'>
            <LinkedInIcon sx={{ fontSize: 44 }} />
          </a>
          <a href="https://github.com/Avinash3003" target='_blank' rel="noreferrer" className='text-indigo-600 hover:text-gray-900 hover:-translate-y-1 transition-all duration-300 drop-shadow-sm'>
            <GitHubIcon sx={{ fontSize: 44 }} />
          </a>
        </div>

      </div>

      <div className='text-center mt-14 mb-5 text-gray-500 text-sm'>
        <h1><CopyrightIcon fontSize="small" className="mr-1 mb-1"/>Copyright 2025, Built with ReactJS</h1>
      </div>
    </div>
  );
}

export default Footer;
