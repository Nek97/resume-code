import React, { useContext } from "react";
import { AppCtxStore } from "../../App.context";

const Resume = (): JSX.Element | null => {
  const appCtx = useContext(AppCtxStore);
  if (!appCtx) return null;
  const { vocabulary } = appCtx;

  return (
    <section id="resume">
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>{vocabulary.work}</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          {vocabulary.work_elements.map((e: any, k: number) => (
            <div className="row item" key={`work-${k}`}>
              <div className="twelve columns">
                <h3>{e.name}</h3>
                <p className="info">
                  {e.role} <span>•</span>{" "}
                  <em className="date">
                    {e.date_start} - {e.date_to}
                  </em>
                </p>
                <p className="break-word">{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>{vocabulary.education}</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          {vocabulary.education_elements.map((e: any, k: number) => (
            <div className="row item" key={`education${k}`}>
              <div className="twelve columns">
                <h3>{e.name}</h3>
                <p className="info">
                  {e.state} <span>•</span> <em className="date">{e.date}</em>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>{vocabulary.skills}</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <p>{vocabulary.skills_description}</p>
          <div className="bars">
            <ul className="skills">
              {vocabulary.skills_list.map((skill: any, index: number) => (
                <li key={`skill-${index}`}>
                  <span className={`bar-expand ${skill.className}`} />
                  <em>{skill.label}</em>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
