
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import LinkIcon from '@mui/icons-material/Link';

function ProjectsChild({ data }) {
  return (
    <div className="h-full">
      <div className="flex flex-col justify-between bg-gray-100 hover:bg-gradient-to-tr from-gray-400 via-white to-gray-400 ring-1 rounded-3xl shadow-xl h-full min-h-[500px] md:min-h-[530px]">
        <img
          className="px-3 pt-3 w-full h-60 rounded-3xl"
          src={`project_images/${data.img_name}.png`}
          alt="Nothing Yet"
        />

        <div className="px-4 md:px-6 py-2">
          <div className="font-bold text-xl mb-2">{data.name}</div>
          <p className="text-gray-900 text-base">{data.describe}</p>
        </div>

        <div className="px-4 md:px-6 pb-2 flex flex-wrap">
          {data.skills_used.map((item, index) => (
            <span
              key={index}
              className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="font-semibold text-end pr-6 md:pr-10 pb-3">

          {
            (data.live_link) && (
            <a className='mr-5' href={data.live_link} target='_blank'>
              Live<LinkIcon className="text-red-600"/>
            </a>
          )
          }

          <a className="" target="_blank" href={data.github_link} >
            <GitHubIcon className="text-red-600" />
            Git
            <LaunchIcon className="text-red-600" />
          </a>

        </div>
      </div>
    </div>
  );
}

export default ProjectsChild;
