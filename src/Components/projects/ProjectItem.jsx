import React from 'react';

const ProjectItem = ({ project }) => {
    return (
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
            <div className="flex justify-between">
                <p className="text-[#00df9a] font-bold ">{project.name}</p>
                <a
                    className="text-sm text-[#00df9a] font-bold"
                    href={project.html_url}
                    target="_blank"
                    rel="noreferrer"
                >
                    View Project &#8594;
                </a>
            </div>
            <p className="text-sm py-2">{project.description}</p>
        </div>
    );
};

export default ProjectItem;
