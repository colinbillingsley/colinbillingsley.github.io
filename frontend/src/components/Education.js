const Education = () => {
    return (
        <section id="education" className="education-container">
            <h2 className="education-header">My Education</h2>
            <p className="education-subtext">Here are the colleges I've attended and relevant courses taken that apply to the field.</p>
            <ul className="education-lists-container">
                <li className="lssc-list">
                    <span className="education-school">Lake-Sumter State College (LSSC):</span>
                    <ul className="lssc-sublist">
                        <li>I started my college education at LSSC in spring of 2020. I graduated at LSSC in the summer of 2021, where I earned my AA in CS.</li>
                    </ul>
                </li>
                <li className="ucf-list">
                    <span className="education-school">University of Central Florida (UCF):</span>
                    <ul className="ucf-sublist">
                        <li>I began my education at UCF in the fall of 2021. I plan on graduating with my BS in CS at the end of this year, December 2024.</li>
                    </ul>
                </li>
                <li className="relevant-courses-list">
                    <span className="education-courses">Relevant Course Work:</span>
                    <ul className="relevant-courses-sublist">
                        <li>Concepts of Computer Science
                            <p>Python</p>
                        </li>
                        <li>Introduction to C
                            <p>C</p>
                        </li>
                        <li>Computer Science 1
                            <p>C</p>
                        </li>
                        <li>Computer Science 2
                            <p>Java</p>
                        </li>
                        <li>Object-Oriented Programming
                            <p>Java</p>
                        </li>
                        <li>Processes of Object-Oriented Development (Jr. Senior Design)
                            <p>HTML, CSS, JavaScript, React, Express, Node.js, MongoDB, MySQL</p>
                        </li>
                        <li>Systems Software
                            <p>C</p>
                        </li>
                        <li>Programming Languages
                            <p>Haskell, TypeScript/JavaScript, C++, C#</p>
                        </li>
                        <li>Database Systems
                            <p>React, CSS, Express, Node.js, MySQL</p>
                        </li>
                        <li>Web-Based Information Technology
                            <p>HTML, CSS, Bootstrap, PHP, JQuery, React</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    )
}

export default Education
