import Project from '../components/project/Project';

import projects1 from './../helpers/projectsList'

const Projects = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">

                    {projects1.map((projects1) => {
                        return <Project title={projects1.title} img={projects1.img} />
                    })}
                </ul>
            </div>
        </main>
    );
}

export default Projects;