import React, { useContext } from "react";
import ReactStringReplace from "react-string-replace";
import { AppCtxStore } from "../../App.context";

const About = (): JSX.Element | null => {
  const appCtx = useContext(AppCtxStore);
  if (!appCtx) return null;
  const { vocabulary } = appCtx;

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src="https://media.licdn.com/dms/image/v2/D4D03AQGw6ed2G24Z9A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1691490587520?e=1782345600&v=beta&t=ciX-4xB3CNHfj_EFT91IHwNhnEVmj8E-R-zu-O_nt6s"
            alt="Profile"
          />
        </div>
        <div className="nine columns main-col">
          <h2>{vocabulary.about_me}</h2>
          <p>
            {ReactStringReplace(
              vocabulary.about_me_description,
              /#/g,
              (match, i) => (
                <br key={`break-${i}`} />
              ),
            )}
          </p>
          <div className="row">
            <div className="columns contact-details">
              <h2>{vocabulary.contact_details}</h2>
              <p className="address">
                <span>{vocabulary.contact_address_name}</span>
                <br />
                <span>{vocabulary.contact_address_location}</span>
                <br />
                <span>{vocabulary.contact_address_email}</span>
                <br />
                <span>{vocabulary.contact_address_phone}</span>
                <br />
              </p>
            </div>
            <div className="columns download">
              <p>
                <a
                  href="https://github.com/Nek97/cv/raw/8b84b407f3e5b9ad6b33aaa74d52e3a2bc3c8bcc/Aniello_tortora_cv.pdf"
                  className="button no-print"
                  download
                >
                  <i className="fa fa-download" />
                  {vocabulary.download_resume}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
