import me from '../imgs/IMG_20210323_160446_338_Original.jpg'

const About = () => {
    
    return (
        <section id="about" className="about-container">
            <div className="about-content">
                <h2 className="about-header">A little bit <span className="about-me">About Me...</span></h2>
                <p className="about-text">
                    I am 24 years old from Nashville, Tennessee, and the middle child of seven. I love being active, going to the gym, sports, as well as playing video games.
                    I also have a fascination of nature and space.
                    <br/>
                    <br/>
                    My coding career sparked when I took a computer science class my senior year in high school where we coded in python.
                    In my junior year of college I found my passion for creating websites and apps and began self-teaching myself frontend skills and tools.
                    My education at UCF has only strengthened and broadened my skills in the field and has taught me to think more critically.
                </p>
            </div>
            <div className="about-img">
                <img src={me} alt="me (Colin Billingsley)" width='400px' height='auto'/>
            </div>
        </section>
    )
}

export default About
