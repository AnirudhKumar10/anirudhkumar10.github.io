interface ISideBar {
  name?: string;
}

export const SideBar: React.FC<ISideBar> = ({ name }) => {
  return (
    <div className="side-bar">
      <img
        className="dp"
        src={process.env.PUBLIC_URL + "/29033992.jpeg"}
        alt="..."
      ></img>
      {name && <h2>{name}</h2>}
      <div className="links">
        <div>
          <a href="#about">About</a>
        </div>
        <div>
          <a href="#skills">Skill</a>
        </div>
        <div>
          <a href="#projects">Projects</a>
        </div>
        <div>
          <a href="#workexperience">Work Experience</a>
        </div>
        <div>
          <a href="#education">Education</a>
        </div>
        <div>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
};
