// import React from 'react'
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import EmailIcon from '@mui/icons-material/Email';
// import CallIcon from '@mui/icons-material/Call';

// function Footer() {
//   return (
//     <div className=' flex gap-100 mt-15'>
//         <div className='ml-25 text-lg'>
//           <h1><EmailIcon/> avinashreddy5142@gmail.com</h1>
//           <h1><CallIcon/> +91 9959363408</h1>
//         </div>

//         <div className='flex justify-center gap-7 text-2xl'>
//             <a href="" target='_blank' className=' text-indigo-600 rounded-xl   hover:text-red-800'><InstagramIcon/></a>
//             <a href="https://www.linkedin.com/in/a-avinash-reddy-7600b025a/" target='_blank' className=' text-indigo-600 rounded-xl   hover:text-red-800'><LinkedInIcon/></a>
//             <a href="https://github.com/Avinash3003" target='_blank' className=' text-indigo-600 rounded-xl   hover:text-red-800'><GitHubIcon/></a>

//         </div>

//     </div>
//   )
// }

// export default Footer




import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

function Footer() {
  return (
    <div className='flex flex-col md:flex-row gap-5 md:gap-100 mt-7 mb-5 md:mt-15'>
      <div className='ml- md:ml-25 text-lg text-center md:text-left'>
        <h1><EmailIcon /> avinashreddy5142@gmail.com</h1>
        <h1><CallIcon /> +91 9959363408</h1>
      </div>

      <div className='flex justify-center gap-7 mb-5 text-2xl'>
        <a href="" target='_blank' className='text-indigo-600 rounded-xl hover:text-red-800'><InstagramIcon /></a>
        <a href="https://www.linkedin.com/in/a-avinash-reddy-7600b025a/" target='_blank' className='text-indigo-600 rounded-xl hover:text-red-800'><LinkedInIcon /></a>
        <a href="https://github.com/Avinash3003" target='_blank' className='text-indigo-600 rounded-xl hover:text-red-800'><GitHubIcon /></a>
      </div>
    </div>
  );
}

export default Footer;
