import styles from './Footer.module.css'
import MainHeading from '../UI/MainHeading'
const Footer =() =>{
    return (
        <footer id={styles.footer} className="d-flex justify-content-center align-items-center flex-column">
            <MainHeading className='text-warning'>Get In Touch?</MainHeading>
            <p className='col-11 col-md-8 col-lg-6 text-center text-light fs-4'>Currently, I welcome any new opportunities, especially the <span className='text-info fw-bold'>co-op opportunities during summer</span> and <span className='text-warning fw-bold'>any part-time position</span> during my 4th semester. Thus my inbox is always open. Whether you have any question or you may just want to reach out to me, I'll try my best to get back to you! <i className="fa-solid fa-face-smile-wink fs-2 text-info"></i></p>
            <a href = "mailto: lelinhnguyen2109@example.com" className='btn btn-warning fs-4 mt-3'>Contact me</a>
        </footer>
    )

}

export default Footer