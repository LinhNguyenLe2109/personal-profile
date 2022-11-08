import styles from './Introduction.module.css'
import Breaker from '../UI/Breaker'

const Introduction =()=>{
    return (
        <section id={styles['basic-intro']} className={`d-flex flex-column pb-3 container-fluid justify-content-center align-items-center text-light`}>
            <h1 className='w-50 text-center'>
                Hey, I'm <span className='text-info'>Linh Nguyen Le</span> but you can call me <span className='text-warning' title="I promise this is the last time I change my nickname :)">Weiss</span>
            </h1>
            <Breaker className="w-75"/>
            <p className='fs-2 lead w-75 text-center'>
                I love creating web components. My goal is to become a <span title="Yes, I know it's hard :(" className='text-warning fw-bold'>full-stack developer</span>
            </p>
            {/* <div id="intro-text" className='w-auto text-lg-start text-center me-0 me-lg-3 ms-0 ms-lg-4 mt-lg-0 mt-5 text-light'>
                <h1>
                    <span className='text-info'>Linh Nguyen </span>Le
                </h1>
                <p className='fs-3'>
                    Computer programming student at Seneca College
                </p>
            </div> */}
            
        </section>
    )
}

export default Introduction;