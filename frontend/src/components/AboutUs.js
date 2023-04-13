import React, { useState, useEffect } from "react";
import profile_adunia from '../profileImages/profile_adunia.jpg';
import profile_gabriel from '../profileImages/profile_gabriel.jpg';
import profile_josef from '../profileImages/profile_josef.jpg';
import profile_thomas from '../profileImages/profile_thomas.jpg';
import profile_zach from '../profileImages/profile_zach.jpg';
import linkedIn from '../profileImages/linkedIn.png';


export default function AboutUs () {
const [viewAboutUs, setViewAboutUs] = useState(false);

    if (viewAboutUs == true){
        return (
            <div>
                <button className="linksButton" onClick={() => setViewAboutUs(false)}> Hide </button>
                <div id="profilePage">

                    {/* Display information for Adunia */}
                    <figure>
                        <img src={profile_adunia} className="profile" />
                        <figcaption>
                            CHES certified with a Bachelor of Arts in Public Health Education.
                            I have a solid working knowledge of basic coding languages, including Java and HTML5.
                            I am committed to ongoing professional development that furthers my knowledge.
                        </figcaption>
                        <a href="https://www.linkedin.com/in/aduniatsehaie/" target="_blank">
                            <img src={linkedIn} className="linkedIn" />
                        </a>
                    </figure>

                    {/* Display information for Gabriel */}
                    <figure>
                        <img src={profile_gabriel} className="profile" />
                        <figcaption>
                            Passionate, diligent and team orientated.
                            Born in Argentina, and emigrated to the States in 2019.
                            Currently developing my knowledge in Software Development.
                        </figcaption>
                        <a href="https://www.linkedin.com/in/gabriel-gingins-483b57264/" target="_blank">
                            <img src={linkedIn} className="linkedIn" />
                        </a>
                    </figure>

                    {/* Display information for Josef */}
                    <figure>
                        <img src={profile_josef} className="profile" />
                        <figcaption>
                            Disciplined problem-solver seeking opportunities to improve business operations
                            through the application of data, analytics, and information technology.
                            Exceptional collaborator with a team-first and customer service mindset.
                        </figcaption>
                        <a href="https://www.linkedin.com/in/josef-pohlmann-b20b72213/" target="_blank">
                            <img src={linkedIn} className="linkedIn" />
                        </a>
                    </figure>

                    {/* Display information for Thomas */}
                    <figure>
                        <img src={profile_thomas} className="profile" />
                        <figcaption>
                            Motivated military professional and junior Java software developer with experience in Java and Spring Boot programming languages.
                            I have five years of highly diverse technical training and experience, including leading and mentoring team members, troubleshooting
                            multiple complex technologies, organizational and logistics planning, and attention to detail.
                        </figcaption>
                        <a href="https://www.linkedin.com/in/thomasaxlemartin/" target="_blank">
                            <img src={linkedIn} className="linkedIn" />
                        </a>
                    </figure>

                    {/* Display information for Zach */}
                    <figure>
                        <img src={profile_zach} className="profile" />
                        <figcaption>
                            Bodily Injury Claims Adjuster transitioning into a Software Development role. Graduated from an intensive coding bootcamp with a Certificate of Software Development.
                            Built front-end and back-end web applications using Java, JavaScript, HTML, CSS, React, Spring Boot and other frameworks.
                        </figcaption>
                        <a href="https://www.linkedin.com/in/zachmoore223/" target="_blank">
                            <img src={linkedIn} className="linkedIn" />
                        </a>
                    </figure>

                </div>
            </div>

     ); }

else {
 return (<button className="linksButton" onClick={() => setViewAboutUs(true)}> About The Creators </button>);
}
}




