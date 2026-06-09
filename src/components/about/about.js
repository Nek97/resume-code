import React, { useContext } from 'react'
import ReactStringReplace from 'react-string-replace'
import { AppCtxStore } from '../../App.context'

const About = () => {
  const { vocabulary } = useContext(AppCtxStore)

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src="images/profilepic.jpg" alt="Profile" />
        </div>
        <div className="nine columns main-col">
          <h2>{vocabulary.about_me}</h2>
          <p>
            {ReactStringReplace(vocabulary.about_me_description, /#/g, () => (
              <br />
            ))}
          </p>
          <div className="row">
            <div className="columns contact-details">
              <h2>{vocabulary.contact_details}</h2>
              <p className="address">
                <span>Aniello Tortora</span>
                <br />
                <span>Nocera Inferiore, SA 84014 IT</span>
                <br />
                <span>tortora.aniello.ta@gmail.com</span>
                <br />
                <span>+39 3457086780</span>
                <br />
              </p>
            </div>
            <div className="columns download">
              <p>
                {/* eslint-disable-next-line*/}
                <a href={vocabulary.download_resume_link} className="button no-print" download>
                  <i className="fa fa-download" />{vocabulary.download_resume}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
