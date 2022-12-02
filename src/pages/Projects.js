import Project from '../components/project/Project';

import projects1 from './../helpers/projectsList'

const Projects = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">

                    {console.log(projects1[0])}

                    <Project title="Super project" />


                </ul>
            </div>
        </main>
    );
}

export default Projects;