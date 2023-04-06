import { useParams } from "react-router-dom";
import BtnGitHub from '../components/btnGitHub/BtnGitHub';
import projects1 from "./../helpers/projectsList"
import img from './../img/projects/02-big.jpg';


const Project123 = () => {
    const { id } = useParams();
    const project = projects1[id];
    console.log(project);

    return (

        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{project.title}</h1>
                    <img
                        src={img}
                        alt="картинка"
                        className="project-details__cover" />

                    <div className="project-details__desc">
                        <p>Skills: {project.skills}</p>
                    </div>

                    <BtnGitHub link="https://github.com" />

                </div>
            </div>
        </main>
    );
}

export default Project123;