import React from 'react';
import './Header.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import Typical from 'react-typical';
import { FaFacebookF, FaLinkedin, FaTwitter, FaGithub,FaDownload } from "react-icons/fa";

const Header = () => {
    return (
        <header> 
            <div  className="header container">
                <div  className="row banner " >
                    <div className="banner-text"  >
                        <h1 className="headline text-center">
                             I'M{''}
                            <span className="animated-text" > 
                             <Typical
                             loop={Infinity}
                             wraper=''
                             steps={[
                                'Md Nadim Mahmud',
                                1000,
                                'a Software Developer 💻',
                                1000,
                                'a Frontend Engineer 💻',
                                1000,
                                'a Django Developer ❤️',
                                1000,
                                'a Full-Stack Web Developer 📱',
                                1000,
                             ]}
                             />
                             </span>
                        </h1>
                        <div className="status"><ul> <li> Web Developer</li> <li> Crazy React & ASP.Net Lover </li></ul></div>
                        <h3><span> React || ASP.Net Developer && Web Developer.</span> Strong engineering professional graduated in CSE with deep interest in javascript,React & ASP.Net.  </h3>
                        
                        <div className="social">
                            <a href="https://github.com/nadimmahmud25"> <GitHubIcon/> </a>
                            <a href="https://www.linkedin.com/in/nadimmahmud25/"> <LinkedInIcon/> </a>
                            <a href="https://www.facebook.com/nadimmahmud25"> <FacebookIcon/>  </a>
                            <a href="https://www.instagram.com/nadimmahmud25/"> <InstagramIcon/> </a>
                        </div>
                        <div className="header-buttons">
                                    <button type="button" class="btn btn-outline-warning "><a className="text-decoration-none text-light" href="https://drive.google.com/file/d/1Wy5mwphuqc7TjlIiTTIfTj1TUiuPUAt7/view?usp=sharing" target="_blank" rel="noopener noreferrer"><FaDownload></FaDownload> DOWNLOAD RESUME</a>
                                    </button>
                                </div>
                    </div>
                   
                </div>
            </div>
        </header>
    );
};

export default Header;