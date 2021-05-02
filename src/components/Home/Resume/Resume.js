import React from 'react';
import './Resume.css';
import resumeData from '../../../fakeData/resumeData'

const Resume = () => {
    const resume = resumeData[0]
    const skillmessage = resume.skillmessage;


    const skills = resume.skills.map(skills => {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return <li key={skills.name}>
            <span style={{width:skills.level}} className={className}></span><em> {skills.name} </em>
        </li>
    })
    return (
        <section id="resume">
           

               

                <div className="row skill pt-5 " style={{maxWidth: "1300px",margin: "auto"}}>
                    <div className="col-md-3 header-col">
                        <h1 className="pb-3"> <span> Skills  </span></h1>
                    </div>

                    <div className="col-md-9 main-col">
                        <p className="text-center pb-3 pt-3">
                            {skillmessage}
                        </p>
                        <div className="bars">
                            <ul className="skills">  {skills} </ul>
                        </div>
                    </div>
                </div>


            
        </section>
    );
};

export default Resume;