import React from 'react';
import './About.css';
import profilePic from '../../images/Nadim.JPG'
import Navbar from '../Shared/Navbar';
import Typical from 'react-typical'
import Footer from '../Home/Footer/Footer';

const About = () => {
    return (
        <main id="aboutpage">
            <Navbar />
            <div className="container-fluid about-container" style={{ maxWidth: "1300px", margin: "auto" }}>
                <div className="row px-1">
                    <div className="col-md-6 col-sm-12 ml-3">
                        <img className="profile mb-4" src={profilePic} alt="" />
                        <h3 className=" ">
                            
                            <span className=" animated-text" >
                            Md Nadim Mahmud {" "}
                                <Typical
                                    loop={Infinity}
                                    wraper=''
                                    steps={[
                                       
                                        'A Frontend Engineer 💻',
                                        1000,
                                        'A React Developer 🥰',
                                        1000,
                                        'A MERN Stack Developer 💻',
                                        1000,
                                        'A ASP.Net Developer ❤️',
                                        1000,
                                        'A Full-Stack Developer',
                                        1000,
                                    ]}
                                />
                            </span>
                        </h3>
                        <p className="text-justify aboutpage-text">I am a professional Web Developer with 2+ years of experience. Experienced Web Developer is skilled in .NET Framework, C#, MSSQL, Asp.Net,React.js, javascript, Nodejs, and Object-Oriented Programming (OOP). I’m also familiar with the Agile Method, Git, Docker, Stack-overflow, and Trello.I love to write code everyday and solve web based problem. I can create full-stack web app with React and Node.js.</p>

                        <div className="contact-details">
                            <h2>Contact Details</h2>
                            <p className="address aboutpage-text">
                                <span>  Md. Nadim Mahmud </span><br />
                                <span>
                                    Dhaka, Bangladesh
                                    </span><br />
                                <span>+880 1311662179</span><br />
                                <span> nadimmahmudmy@gmail.com </span>
                            </p>
                        </div>

                    </div>
                    <div className="col-md-5 col-sm-12 ml-3 mt-4">

                        <h4> <span>TECHNICAL SKILLS </span></h4>
                        <div className="skills">
                           
                            <div className="language">
                                <h5> <span className="language-headline"> Expertise </span></h5>
                                <div className="language-skills my-2 pb-3">
                                    <span> React.js </span>
                                    <span> JavaScript </span>
                                    <span> ES6 </span>

                                    <span> Material-ui </span>
                                    <span> Bootstrap4 </span>
                                    <span> React-Bootstrap </span>
                                    <span> React Router  </span>
                                    <span> HTML </span>
                                    <span> CSS</span>
                                    <span> Git </span>
                                    <span> Github </span>
                                    <span> VS Code </span>
                                    <span> Firebase Hosting </span>
                                    <span> Heroku </span>
                                    <span> Netlify </span>
                                    <span> Python </span>
                                    <span> Django </span>

                                </div>


                            </div>

                            <div className="framework">
                                <h5> <span className="framework-headline"> Comfortable </span> </h5>
                                <div className="framework-skills my-2 pb-3">
                                    <span> Node.js</span>
                                    <span> Express.jS </span>
                                    <span> MongoDB </span>
                                    <span> Redux </span>
                                    <span> Google Map </span>
                                    <span> Stripe </span>
                                    <span> MySQL</span>
                                    <span> PostgreSQL </span>
                                    <span> Linux Shared Hosting </span>
                                    <span> Chrome Dev Tool </span>
                                    <span> WordPress </span>

                                </div>


                            </div>

                        

                            <div className="os">
                                <h5> <span className="os-headline"> OS Platforms </span> </h5>
                                <div className="os-skills my-2 pb-3">
                                    <span> Windows </span>
                                    <span> Kali Linux </span>
                                </div>
                            </div>

                            
                        

                            <div className="familiar">
                                <h5> <span className="familiar-headline"> FAMILIAR </span> </h5>

                                <div className="familiar-skills my-2 pb-3">
                                    <span> Data Structure </span>
                                    <span> Algorithm  </span>
                                    <span> Sass  </span>
                                    <span> React Native  </span>
                                    <span> JQuery  </span>
                                    <span> ASP.Net Core </span>
                                    <span> REST API </span>
                                    <span> GraphQL </span>
                                    <span> Docker  </span>
                                </div>


                            </div>

                        </div>


                    </div>
                </div>
            </div>
            <Footer/>
        </main>
    );
};




export default About;


