import githubIcon from './gitHub-black.svg';


const BtnGitHub = () => {
    return (
        <a href="#!" className="btn-outline">
            <img src={githubIcon} alt="" />
            GitHub repo
        </a>
    );
}

export default BtnGitHub;