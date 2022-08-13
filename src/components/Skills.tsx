import { Tag } from "./Tag";

export interface ISkills {
  skills: Array<string>;
}

export const Skill: React.FC<ISkills> = ({ skills }) => {
  return (
    <div className="tag-container">
      {skills.map((skill) => (
        <Tag>{skill}</Tag>
      ))}
    </div>
  );
};
