import Project from "../components/project/Project";
import mainStyle from "../styles/main.module.css"
import { projects } from "../components/helpers/projectList";

const Projects = () => {
    return (
        <main className={mainStyle.section}>
            <div className={mainStyle.container}>
                <h2 className={mainStyle["title-1"]}>Projects</h2>
                <ul className={mainStyle.projects}>
                    {projects.map((project, index) => {
                        return (
                            <Project key={index} title={project.title} img={project.img} index={index}/>
                        )
                    })}        
                </ul>
            </div>
        </main>
    );
}

export default Projects;