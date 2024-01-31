import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import resume from '../resume/colin-billingsley_resume.pdf'

const Contact = () => {
    return (
        <section id="contact" className="contact-container">
            <h2 className="contact-header">Want more info?</h2>
            <div className="info-resume-container">
                <div className="my-info-container">
                    <h3>Some contact information</h3>
                    <ul className="my-contact-list">
                        <li className="contact-item">
                            <i><FontAwesomeIcon icon={faEnvelope} /></i>
                            <a href="mailto:colinebillingsley@gmail.com">colinebillingsley@gmail.com</a>
                        </li>
                        <li className="contact-item">
                            <i><FontAwesomeIcon icon={faLinkedin} /></i>
                            <a href="https://www.linkedin.com/in/colin-billingsley-507a56160/">linkedin.com/in/colin-billingsley-507a56160/</a>
                        </li>
                    </ul>
                </div>
                <div className="resume-container">
                    <h3>Check out my Resume</h3>
                    <a className="resume-button" href={resume} target='_blank' rel='noreferrer'>Resume</a>
                </div>
            </div>
        </section>
    )
}

export default Contact
