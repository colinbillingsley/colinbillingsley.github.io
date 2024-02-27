import html from '../icons/html.png'
import css from '../icons/css-3.png'
import javascript from '../icons/js.png'
import react from '../icons/physics.png'
import github from '../icons/github.png'
import python from '../icons/python.png'
import c from '../icons/letter-c.png'
import c_plus_plus from '../icons/c-.png'
import java from '../icons/java.png'

const Skills = () => {
    return (
        <section id="skills" className="skills-container">
            <h2 className='skill-header'>Skills</h2>
            <ul className="skills-list">
                <li className='skill-item'>
                    {/* <a href="https://www.flaticon.com/free-icons/html" title="html icons">Html icons created by Freepik - Flaticon</a> */}
                    <img src={html} alt="html" width="70px" height="auto"/>
                </li>
                <li className='skill-item'>
                    {/* <a href="https://www.flaticon.com/free-icons/css" title="css icons">Css icons created by Pixel perfect - Flaticon</a> */}
                    <img src={css} alt="css" width="70px" height="auto"/>
                </li>
                <li className='skill-item'>
                    {/* <a href="https://www.flaticon.com/free-icons/javascript" title="javascript icons">Javascript icons created by Freepik - Flaticon</a> */}
                    <img src={javascript} alt="javascript" width="70px" height="auto"/>
                </li>
                <li className='skill-item'>
                    {/* <a href="https://www.flaticon.com/free-icons/react" title="react icons">React icons created by Kiranshastry - Flaticon</a> */}
                    <img src={react} alt="react" width="70px" height="auto"/>
                </li>
                <li className='skill-item'>
                    {/* <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Freepik - Flaticon</a> */}
                    <img className='github' src={github} alt="github" width="70px" height="auto"/>
                </li>
                <li className='skill-item'>
                    {/* <a href="https://www.flaticon.com/free-icons/python" title="python icons">Python icons created by Freepik - Flaticon</a> */}
                    <img src={python} alt="python" width="70px" height="auto"/>
                </li>
                <li className='skill-item'>
                    {/* <a href="https://www.flaticon.com/free-icons/letter-c" title="letter c icons">Letter c icons created by Hight Quality Icons - Flaticon</a> */}
                    <img src={c} alt="c" width="70px" height="auto"/>
                </li>
                <li className='skill-item'>
                    {/* <a href="https://www.flaticon.com/free-icons/coding" title="coding icons">Coding icons created by Freepik - Flaticon</a> */}
                    <img src={c_plus_plus} alt="c++" width="70px" height="auto"/>
                </li>
                <li className='skill-item'>
                    {/* <a href="https://www.flaticon.com/free-icons/java" title="java icons">Java icons created by Freepik - Flaticon</a> */}
                    <img src={java} alt="java" width="70px" height="auto"/>
                </li>
            </ul>
        </section>
    )
}

export default Skills
