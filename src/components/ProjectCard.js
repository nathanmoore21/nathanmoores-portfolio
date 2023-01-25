import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import placeholder from "../assets/images/placeholder.png";

const ProjectCard = ({ project }) => {
  let githubBtn = "";
  let websiteBtn = "";
  let demoBtn = "";

  if (project.website) {
    websiteBtn = (
      <Button href={project.website} target="_blank" size="small">
        Website
      </Button>
    );
  }

  if (project.github) {
    githubBtn = (
      <Button href={project.github} target="_blank" size="small">
        GitHub
      </Button>
    );
  }

  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={
            project.images
              ? `${process.env.PUBLIC_URL}/images/${project.images[0].filename}`
              : placeholder
          }
          alt={project.images ? project.images[0].caption : "placeholder img"}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.description}
          </Typography>
          <Stack style={{ marginTop: "10px" }} direction="row" spacing={1}>
            {project.languages.map((language) => {
              return <Chip label={language} size="small" variant="outlined" />;
            })}
          </Stack>
          <Stack style={{ marginTop: "10px" }} direction="row" spacing={1}>
            {project.tags.map((language) => {
              return <Chip label={language} size="small" variant="outlined" />;
            })}
          </Stack>
        </CardContent>
        <CardActions>{websiteBtn}</CardActions>
        <CardActions>{githubBtn}</CardActions>
        <CardActions>{demoBtn}</CardActions>
      </Card>
    </Grid>
  );
};

export default ProjectCard;
