import pokemon from '../imgs/Screen Shot 2024-01-20 at 10.09.53 AM.png'
import tot from '../imgs/Screen Shot 2024-01-20 at 10.41.05 AM.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Projects = () => {
    return (
        <section id="projects" className="projects-container">
            <h2>Projects</h2>
            <ul className="projects-list">
                <li className='project-card'>
                    <img src={pokemon} alt="pokemon manager" width="400px" height="auto" className='project-img'/>
                    <div className="project-info">
                        <p className='project-title'>Pokemon Manager (frontend)</p>
                        <p className="project-description">
                            Pokemon Manager is a contact manager inspired by, you guessed it, Pokemon.
                            It is a full LAMP stack application that allows users to create a profile, login, update their profile information or contacts information,
                            add contacts, search contacts, and delete contacts. I worked on the fronted of the project, and another student worked on the backend. 
                            The site should still be up and you can visit it at <a href="https://www.pokemonmanager.com/" target='_blank' rel='noreferrer'>https://www.pokemonmanager.com/</a>
                        </p>
                        <ul className="project-tools">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>PHP</li>
                            <li>MySQL</li>
                        </ul>
                        <a className='github-link' href="https://github.com/colinbillingsley/LAMP-Project-SLP01" target='_blank' rel='noreferrer'>
                        <i><FontAwesomeIcon icon={faGithub} size='xl' style={{ color: "black",}} /></i>
                        </a>
                    </div>
                </li>
                <li className='project-card'>
                    <img src={tot} alt="tears of thanksgiving" width="400px" height="auto" className='project-img'/>
                    <div className="project-info">
                        <p className='project-title'>Tears of Thanksgiving Recipe Creator (backend/frontend/database)</p>
                        <p className="project-description">
                            Tears of Thanksgiving is a recipe creator that is inspired by the game Tears of the Kingdom.
                            It is a full MERN stack application that allows users to create an account and login, as well as create, favorite, and delete recipes.
                            For this project I mainly worked on the backend where I implemented the server, APIs, connection to the database, and email verification.
                        </p>
                        <ul className="project-tools">
                            <li>React</li>
                            <li>CSS</li>
                            <li>Express</li>
                            <li>Node.js</li>
                            <li>MongoDB</li>
                        </ul>
                        <a className='github-link' href="https://github.com/colinbillingsley/POOSD-MERN-Project" target='_blank' rel='noreferrer'>
                            <i><FontAwesomeIcon icon={faGithub} size='xl' style={{color: "black",}} /></i>
                        </a>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Projects
