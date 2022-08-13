import React from "react";
import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Educations } from "./components/Education";
import { Experiences } from "./components/Experience";
import { Project } from "./components/Project";
import { Skill } from "./components/Skills";
import { AddHeading } from "./components/AddHeading";
import data from "./portfolio.json";
import { SideBar } from "./components/Sidebar";
import { Footer } from "./components/Footer";

const Banner: React.FC = () => {
  const {
    about: { descriptions },
    skills,
    experiences,
    educations,
    projects,
  } = data;
  return (
    <div className="banner">
      <AddHeading
        heading="About"
        topic={<About descriptions={descriptions} />}
      />

      <AddHeading heading="Skills" topic={<Skill skills={skills} />} />

      <AddHeading heading="Projects" topic={<Project projects={projects} />} />

      <AddHeading
        heading="Work Experience"
        topic={<Experiences experiences={experiences} />}
      />

      <AddHeading
        heading="Education"
        topic={<Educations educations={educations} />}
      />

      <AddHeading heading="Contact" topic={<Contact />} />

      <AddHeading topic={<Footer />} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <>
      <div className="container">
        <SideBar name={data.unpopulated.name} />
        <Banner />
      </div>
    </>
  );
};

export default App;
