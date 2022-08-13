export interface IExperience {
  title: string;
  company: string;
  time: string;
  descriptions: Array<string>;
}

export interface IExperiences {
  experiences: Array<IExperience>;
}

export const Experiences: React.FC<IExperiences> = ({ experiences }) => {
  return (
    <>
      {experiences.map(({ title, company, time, descriptions }) => {
        return (
          <div className="info-box">
            <h3>{`${title} at ${company}`}</h3>
            <span>{time}</span>
            <ul>
              {descriptions.map((description) => (
                <li>{description}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </>
  );
};
