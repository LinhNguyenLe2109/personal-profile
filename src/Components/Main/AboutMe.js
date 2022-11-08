import styles from './AboutMe.module.css'
import MainHeading from '../UI/MainHeading'
import NextOrPreviousButton from '../UI/NextOrPreviousButton'
import profile from '../../images/profile-img.png'
import resume from '../../documents/Linh_Nguyen_Le_resume.pdf'
import Breaker from '../UI/Breaker'

const AboutMe = () =>{
    return (
        <section id={styles['about-me']} className="container-fluid">
            <MainHeading>About Me</MainHeading>
            <Breaker className="w-50 mx-auto" ></Breaker>
            <div id={styles.information} className="container text-light px-3 py-5 mx-auto mb-4 rounded-3 d-lg-flex col-lg-9 justify-content-around align-items-center">
                <p id= {styles.brief} className="col-lg-4 px-lg-0 px-5">Currently I'm studying my 4th semester at Seneca College. Besides school, I also self-learn multiple programming languages. Currently, I'm learning React and some Javascript algorithms during my free time. I love tinkering with code and create small components, from a nav bar to small decoration modules. My goal is to work in an IT environment where I provide my best performance to my workplace</p>
                <div className='col-lg-4 p-lg-0 py-4 col-sm-5 col-8 mx-lg-0 mx-auto'>
                    <img src={profile} className=" img-fluid" alt="Profile introduction"/>
                </div>
                
                <div id='detail' className='col-lg-3 text-lg-start text-center'>
                    <h3 className='fw-bold fs-2'>Detail:</h3>
                    <Breaker className='w-25 mx-auto mx-lg-0'/>
                    <ul className='px-0'>
                        <li><strong>Full Name:</strong><br/>Linh Nguyên Lê</li>
                        <li><strong>Age:</strong><br/>20</li>
                        <li><strong>Phone number:</strong><br/>(647)-562-7948</li>
                        <li><strong>Location:</strong><br/>Near Seneca College, North York, Canada</li>
                        <li><a rel="noreferrer" href='https://www.linkedin.com/in/le-linh-nguyen-21092002/' target={'_blank'} className='btn btn-primary mt-3 d-inline-flex align-items-center'><i className="fa-brands fa-linkedin fs-3 pe-2"></i> Connect with me</a></li>
                        <li><a href={resume} download className='btn btn-success mt-3 d-inline-flex align-items-center'><i className="fa-solid fa-file fs-3 pe-2"></i> Resume</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;