import React from 'react'
import styles from './Skills.module.css'
import MainHeading from '../UI/MainHeading'
import Breaker from '../UI/Breaker'
import Skill from './Skill'

function Skills() {
    const skills =[
        {
            id:0,
            skill: "Javascript",
            level: [1,-1]
        },
        {
            id:1,
            skill: "Bootstrap",
            level: [1,-1]
        },
        {
            id:2,
            skill: "React",
            level: [1,-1]
        },
        {
            id:3,
            skill: "SQL server",
            level: [1,-1]
        },
        {
            id:4,
            skill: "HTML",
            level: 1
        },
        {
            id:5,
            skill: "CSS",
            level: 1
        },
        {
            id:6,
            skill: "C/C++",
            level: 1
        },
        {
            id:7,
            skill: "Visual Studio",
            level: 1
        },
        {
            id:8,
            skill: "Visual Studio Code",
            level: 1
        },
        {
            id:9,
            skill: "MS office",
            level: 1
        },
        {
            id:10,
            skill: "DotNetNuke",
            level: 1
        },
        {
            id:11,
            skill: "API",
            level: [1,-1]
        },
        {
            id:12,
            skill: "Express.js",
            level: 0
        },
        {
            id:13,
            skill: "C#",
            level: 1
        },
        {
            id:14,
            skill: "Application design",
            level: 0
        },
        {
            id:15,
            skill: "OracleDB",
            level: 1
        },
        {
            id:16,
            skill: "Atom",
            level: 0
        },
        {
            id:17,
            skill: "Linux/Unix",
            level: 0
        },
        {
            id:18,
            skill: "Tailwind.css",
            level: 0
        },
        {
            id:19,
            skill: "ASP.NET",
            level: 0
        },
        {
            id:20,
            skill: "GitHub",
            level: [0,-1]
        },
        {
            id:21,
            skill: "Azure",
            level: 0
        },
        {
            id:22,
            skill: "MongoDB",
            level: 0
        },
        {
            id:23,
            skill: "Object Oriented Programming",
            level: 1
        },
        {
            id:24,
            skill: "jQuery",
            level: [1,-1]
        }
    ];
    const filteredSkills = (level) =>{
        return skills.filter(skill => {
            if(skill.level.constructor === Array){
                return skill.level.find(lv => lv === level);
            }
            else{
                return skill.level === level;
            }
        })
    }
  return (
    <section id="skills" className={`${styles.section} container-fluid bg-secondary pb-4 text-warning pt-3`}>
        <MainHeading>Skills</MainHeading>
        <Breaker className = 'w-75 mx-auto'/>
        <div id={styles.comfortable} className='pb-4 text-light col-md-9 col mt-4'>
            <h3 className='text-center mt-3 fs-2'>I'm quite comfortable with...</h3>
            <div className='container pt-2'>
                {
                    filteredSkills(1).map(skill => <Skill key={skill.id} level="1" ability = {skill}/>)
                }
            </div>
        </div>
        <div id={styles.experience} className=' text-light pb-4 col-md-6 col ms-auto me-2 mt-4'>
            <h3 className='text-center mt-3 fs-2'>I have experience with...</h3>
            <div className='container pt-2'>
                {
                    filteredSkills(0).map(skill => <Skill key={skill.id} level="0" ability = {skill}/>)
                }
            </div>
        </div>
        <div id={styles.learning} className='bg-light border border-dark border-4 pb-4 col-md-6 col-9 mx-auto rounded-4 mt-4 text-dark'>
            <h3 className='text-center mt-3 fs-2'>Currently, I'm learning/improving...</h3>
            <div className='container pt-2'>
                {
                    filteredSkills(-1).map(skill => <Skill key={skill.id} level="-1" ability = {skill}/>)
                }
            </div>
        </div>
    </section>
  )
}

export default Skills