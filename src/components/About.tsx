export interface IAbout {
  descriptions: Array<string>;
}

export const About: React.FC<IAbout> = ({ descriptions }) => {
  return (
    <div className="info-box">
      <p>
        Hi 👋 <br />
      </p>
      {descriptions.map((description, i) =>
        descriptions.indexOf(description) !== descriptions.length - 1 ? (
          <p key={description[i]}>
            {description}
            <br />
          </p>
        ) : (
          <p key={description[i]}>{description}</p>
        )
      )}
    </div>
  );
};
