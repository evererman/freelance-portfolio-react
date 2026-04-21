import BtnGitHub from "../components/btnGithub/BtnGitHub";
import img from "./../img/projects/02-big.jpg"
import { useParams } from "react-router-dom";
import { projects } from "../components/helpers/projectList";
import mainStyle from "../styles/main.module.css"

const SingleProject = () => {
    
const {id} = useParams();

const project = projects[id]

    return (
        <main className={mainStyle.section}>
            <div className={mainStyle.container}>
                <div className={mainStyle["project-details"]}>

                    <h1 className={mainStyle["title-1"]}>{project.title}</h1>

                    <img src={project.imgBig} alt={project.title} className={mainStyle["project-details__cover"]} />

                        <div className={mainStyle["project-details__desc"]}>
                            <p>{project.skills}</p>
                        </div>

                       <BtnGitHub link={"http://github.com"}/> 

                </div>
            </div>
        </main>
    );
}

export default SingleProject;