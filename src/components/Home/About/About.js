import React from 'react';
import './About.css';
import profilePic from '../../../images/Nadim.JPG'
import resumeSrc from '../../../images/NADIM_RESUME.pdf';
import GetAppIcon from '@material-ui/icons/GetApp';

const About = () => {
    return (
        <section className="about" >
            <div className="container-fluid">
                <div className="row px-3 " style={{maxWidth: "1300px",margin: "auto"}}>
                    <div className="col col-md-3 d-flex justify-content-center">
                        <img className="profile mb-4" src={profilePic} alt="" />
                    </div>
                    <div className="col col-md-9 pl-3">
                        <h2> About Me </h2>
                        <p className="text-justify">I am a professional Web Developer with 2+ years of experience. 
                        Experienced Web Developer is skilled in .NET Framework, C#, MSSQL, Asp.Net,React.js, javascript, Nodejs, and Object-Oriented Programming (OOP). 
                        I’m also familiar with the Agile Method, Git, Docker, Stack-overflow, and Trello.I love to write code everyday and solve web based problem. 
                        I can create full-stack web app with React and Node.js.As my profession and career object
                        my goal is to provide 100% hard work and accurate Service.</p>

                        <div className="row">
                            <div className="col-md-6 contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>  Md Nadim Mahmud  </span><br />
                                    <span>
                                    Dhaka, Bangladesh
                                    </span><br />
                                    <span>+880 1311662179</span><br />
                                    <span> nadimmahmudmy@gmail.com </span>
                                </p>
                            </div>
                            <div className=" col col-md-6 col-sm-12 download">
                            <p  className=" download-button ">
                                <a href={resumeSrc}  className="text-white"  download > <GetAppIcon/> Download Resume</a>
                            </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;