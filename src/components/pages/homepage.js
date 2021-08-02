import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'



function Homepage() {
    return(
        <div className="homepage">
            <img className="avatar" alt="Abrahan Gonzalez" src="https://soe.ukzn.ac.za/wp-content/uploads/2018/04/profile-placeholder.png"/>
            <div className="bio">
            Hello! I'm Abrahan and I'm a FullStack Software Developer.
            I'm looking for opportunities in the MERN web development stack Have a look around
            </div>
            <div className="links-wrapper">
                <a href="https://github.com/Trighhorn" className="link github"><FontAwesomeIcon icon={faGithub} size='8x' alt='github'/></a>
                <a href="https://www.linkedin.com/in/agonzalez-19/" className="link linkedin"><FontAwesomeIcon icon={faLinkedin} size='8x' alt='linkedin'/></a>
                <a href="https://drive.google.com/file/d/1FwxHPkf8tlrvWDtTEeHvIVMbcj_ZgkpF/view?usp=sharing" className="link resume"><FontAwesomeIcon icon={faFile} size='7x' alt='resume'/></a>
            </div>
        </div>
    )
}

export default Homepage
