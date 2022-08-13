import React from "react";

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div>
        <a href="https://github.com/AnirudhKumar10">Find me on Github</a>
        <img
          className="icon"
          src={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}
          alt={"..."}
        />
      </div>
      <div>
        <a href="https://www.linkedin.com/in/anirudh-kumar-41354272/">
          Find me on LinkedIn
        </a>
        <img
          className="icon"
          src={"https://cdn-icons-png.flaticon.com/512/174/174857.png"}
          alt={"..."}
        />
      </div>
      <div>
        <a href="https://www.youtube.com/channel/UCJBbF4K_rsoQzZJurhz67OA">
          Find me on YouTube
        </a>
        <img
          className="icon"
          src={"https://cdn-icons-png.flaticon.com/512/174/174883.png"}
          alt={"..."}
        />
      </div>
    </div>
  );
};
