import './FamiliarLanguages.css'
import NextOrPreviousButton from '../UI/NextOrPreviousButton'
import MainHeading from '../UI/MainHeading'
const FamiliarLanguages = () =>{
    const languages=[
        {
            name: "Javascript",
            title:"The language that I'm confident with"
        },
        {
            name: "HTML",
            title:"The language that I'm confident with"
        },
        {
            name: "CSS",
            title:"The language that I'm confident with"
        },
        {
            name: "C/C++",
            title:"The language that I know"
        },
        {
            name: "Python",
            title:"The language that I know"
        },
        {
            name: "Bootstrap",
            title:"The library that I have experience with"
        },
        {
            name: "jQuery",
            title:"The library that I have experience with"
        },
        {
            name: "React",
            title:"The library that I have experience with"
        }
    ]
    return (
        <section id="language" className="col-center">
            {/* Dynamically allocate and have an arrow if there is more than 1  */}
            <MainHeading>The languages that I know</MainHeading>
            <div id="lang-list">
                <NextOrPreviousButton value="Back" className="left"/>
                 {/* put stuff here  */}
                <p>I know nothing :(((</p>
                <NextOrPreviousButton value="Next" className="right"/>
            </div>
        </section>
    )
}

export default FamiliarLanguages;