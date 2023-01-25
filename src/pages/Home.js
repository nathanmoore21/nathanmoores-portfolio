import { useState } from "react";
import projectsJSON from "../assets/data/projects.json";
import ProjectCard from "../components/ProjectCard";
import Grid from "@mui/material/Grid";

const Home = () => {
  const [projects] = useState(projectsJSON);

  const projectList = projects.map((project, i) => {
    return <ProjectCard key={i} project={project} />;
  });

  return (
    <>
      <h3>College Projects</h3>
      <Grid container spacing={2} columns={12}>
        {projectList}
      </Grid>
    </>
  );
};

export default Home;
