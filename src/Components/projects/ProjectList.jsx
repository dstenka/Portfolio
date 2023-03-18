import React, { useEffect, useState } from 'react';
import ProjectItem from './ProjectItem';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/dstenka/repos')
            .then((response) => response.json())
            .then((data) => {
                setProjects(data);
            });
    }, []);

    return projects.length > 0 ? (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <ProjectItem project={project} />
                ))}
            </div>
        </div>
    ) : (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto text-center">
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                    Es sind noch keine Projekte von Dominik angelegt worden.
                </h1>
            </div>
        </div>
    );
};

export default ProjectList;
