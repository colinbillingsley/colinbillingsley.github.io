const Education = () => {
    return (
        <section id="education" className="education-container">
            <h2 className="education-header">My Education</h2>
            <p className="education-subtext">Here are the colleges I've attended and relevant courses taken that apply to the field.</p>
            <ul className="education-lists-container">
                <li className="lssc-list">
                    <span className="education-school">Lake-Sumter State College (LSSC)</span>
                    <ul className="lssc-sublist">
                        <li className="uni-address">9501 US-441, Leesburg, FL 34788</li>
                        <li className="uni-dates">January 2020 - July 2021</li>
                        <li className="uni-gpa"><span>GPA:</span> 3.88</li>
                        <li className="uni-awards"><span>Awards:</span> Dean's List, President's List</li>
                        <li className="uni-degree"><span>Degree earned:</span> AA</li>
                    </ul>
                </li>
                <li className="ucf-list">
                    <span className="education-school">University of Central Florida (UCF):</span>
                    <ul className="ucf-sublist">
                        <li className="uni-address">4000 Central Florida Blvd, Orlando, FL 32816</li>
                        <li className="uni-dates">August 2021 - Present</li>
                        <li className="uni-gpa"><span>GPA:</span> 3.88</li>
                        <li className="uni-awards"><span>Awards:</span> Dean's List, President's List</li>
                        <li className="uni-degree"><span>Degree earned:</span> BS in Computer Science <span>(In Progress)</span></li>
                    </ul>

                    <span className="relevant-courses-title">Relevant Course Work:</span>
                    <ul className="ucf-relevant-courses">
                        <li className="ucf-course">Concepts of Computer Science
                            <p>Python</p>
                        </li>
                        <li className="ucf-course">Introduction to C
                            <p>C</p>
                        </li>
                        <li className="ucf-course">Computer Science 1
                            <p>C</p>
                        </li>
                        <li className="ucf-course">Computer Science 2
                            <p>Java</p>
                        </li>
                        <li className="ucf-course">Object-Oriented Programming
                            <p>Java</p>
                        </li>
                        <li className="ucf-course">Processes of Object-Oriented Development (Jr. Senior Design)
                            <p>HTML, CSS, JavaScript, React, Express, Node.js, MongoDB, MySQL</p>
                        </li>
                        <li className="ucf-course">Systems Software
                            <p>C</p>
                        </li>
                        <li className="ucf-course">Programming Languages
                            <p>Haskell, TypeScript/JavaScript, C++, C#</p>
                        </li>
                        <li className="ucf-course">Database Systems
                            <p>React, CSS, Express, Node.js, MySQL</p>
                        </li>
                        <li className="ucf-course">Web-Based Information Technology
                            <p>HTML, CSS, Bootstrap, PHP, JQuery, React</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    )
}

export default Education
