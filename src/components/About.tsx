export interface IAbout {
  descriptions: Array<string>;
}

export const About: React.FC<IAbout> = ({ descriptions }) => {
  return (
    <div className="info-box">
      Hi 👋 <br />
      {descriptions.map((description) =>
        descriptions.indexOf(description) !== descriptions.length - 1 ? (
          <>
            {description}
            <br />
          </>
        ) : (
          <>{description}</>
        )
      )}
    </div>
  );
};
