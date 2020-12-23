//Components
import ResumeHeader from '../Resume/ResumeHeader';  
import ResumeHeading from '../Resume/ResumeHeading';
import Experience from '../Resume/Experience';
import Education from '../Resume/Education';
import Certifiation from '../Resume/Certification';

//CSS Styling
import styles from './Resume.module.css';

//React-Icons
import {FaLinkedinIn, 
        FaFacebook,
        FaGithub
        } from 'react-icons/fa';

import {IoIosMail} from 'react-icons/io'

//Resources - Images
import capmImg from '../../Resources/Images/PMI-badge.jpeg'


//Resources - Data
import JobData from '../../Resources/data/JobData';
import EducationData from '../../Resources/data/EducationData';
import SkillColumns from '../../Resources/data/SkillData';
import SkillTable from '../Resume/SkillTable';
import Contact from '../Resume/Contact';

const Resume = (props) => {



    return(
            <div className={styles.resumeMain}>
                <div className={styles.resumeContainer}>
                    <ResumeHeader/>

                    <section id="experience">

                        <ResumeHeading heading="Experience"/>
                        <Experience 
                            timeStamp="2019 - 2020"
                            positionTitle={JobData.job[0].title}
                            employer={JobData.job[0].employer}
                            jobDuties={JobData.job[0].duties} />
                        <Experience 
                            timeStamp="2018 - 2019"
                            positionTitle={JobData.job[1].title}
                            employer={JobData.job[1].employer}
                            jobDuties={JobData.job[1].duties} />
                        <Experience 
                            timeStamp="2018 - 2018"
                            positionTitle={JobData.job[2].title}
                            employer={JobData.job[2].employer}
                            jobDuties={JobData.job[2].duties} />
                        <Experience 
                            timeStamp="2017-2018"
                            positionTitle={JobData.job[3].title}
                            employer={JobData.job[3].employer}
                            jobDuties={JobData.job[3].duties} />

                    </section>

                    <section id="education">
                        
                        <ResumeHeading heading="Education"/>
                        <Education 
                            name={EducationData.institution[0].name}
                            degreeLevel={EducationData.institution[0].degreeLevel}
                            fieldOfStudy={EducationData.institution[0].fieldOfStudy}
                            studyFrom={EducationData.institution[0].studyFrom}
                            studyTo={EducationData.institution[0].studyTo}
                            knowledgeList={EducationData.institution[0].knowledgeList} />

                        <Education 
                            name={EducationData.institution[1].name}
                            degreeLevel={EducationData.institution[1].degreeLevel}
                            fieldOfStudy={EducationData.institution[1].fieldOfStudy}
                            studyFrom={EducationData.institution[1].studyFrom}
                            studyTo={EducationData.institution[1].studyTo}
                            knowledgeList={EducationData.institution[1].knowledgeList} />

                    </section>

                    <section id="certificationLicenses">
                        <ResumeHeading heading="Certifiations & Licenses"/>
                        <Certifiation
                            certImg={capmImg}
                            certName={"PMI - Certified Associate in Project Management"}
                            certFrom={2020}
                            certTo={2025}/>
                    </section>

                    <section id="skills">
                        <ResumeHeading heading="Skills"/>
                     
                        <SkillTable 
                            skillColumns={SkillColumns.column}
                        />
                    </section>

                    <section id="contact-info">
                        
                    <ResumeHeading heading="Contact Info"/>
                            <Contact 
                                desc="E-mail"
                                link="example4@gmail.com"
                                icon={<IoIosMail color="darkblue" size={24}/>}/>

                            <Contact 
                                desc="Facebook"
                                link="facebook.com/robert.s.wright.52"
                                icon={<FaFacebook color="darkblue" size={24}/>}/>
                            
                            <Contact 
                                desc="LinkedIn"
                                link="linkedin.com/in/rswright94"
                                icon={<FaLinkedinIn color="darkblue" size={24}/>}/>
                                
                            <Contact 
                                desc="Github"
                                link="github.com/rwright1994/PublicWork"
                                icon={<FaGithub color="darkblue" size={24}/>}/>
                    </section>
                </div>
            </div>
            
    );

}

export default Resume;