import { Skill } from "./Skills";

export interface IProject {
  title: string;
  time: string;
  descriptions: Array<string>;
  skills: Array<string>;
  link?: string;
}

export interface IProjects {
  projects: Array<IProject>;
}

export const Project: React.FC<IProjects> = ({ projects }) => {
  return (
    <>
      {projects.map(({ title, time, descriptions, skills, link }) => {
        return (
          <div className="info-box" key={title}>
            <h3>{link ? <a href={link}>{`${title}`}</a> : `${title}`}</h3>
            <span>{time}</span>
            <ul>
              {descriptions.map((description, i) => (
                <li key={description[i]}>{description}</li>
              ))}
            </ul>
            <Skill skills={skills} />
          </div>
        );
      })}
    </>
  );
};
