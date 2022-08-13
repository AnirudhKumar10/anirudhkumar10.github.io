import { Skill } from "./Skills";

export interface IProject {
  title: string;
  time: string;
  descriptions: Array<string>;
  skills: Array<string>;
}

export interface IProjects {
  projects: Array<IProject>;
}

export const Project: React.FC<IProjects> = ({ projects }) => {
  return (
    <>
      {projects.map(({ title, time, descriptions, skills }) => {
        return (
          <div className="info-box">
            <h3>{`${title}`}</h3>
            <span>{time}</span>
            <ul>
              {descriptions.map((description) => (
                <li>{description}</li>
              ))}
            </ul>
            <Skill skills={skills} />
          </div>
        );
      })}
    </>
  );
};
