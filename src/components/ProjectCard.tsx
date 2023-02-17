import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import Project from "../utils/types";

function ProjectCard(props: { project: Project }) {
  return (
    <Card sx={{ minWidth: 275, backgroundColor: "#F6D55C", margin: "15px auto" }}>
      <CardActionArea href="https://google.com">
        <CardContent>
          <Typography variant="h5" component="div">
            { props.project.name }
          </Typography>
          <Typography variant="body2">
            Description: { props.project.description }
            <br />
            Skills: { props.project.skills.join(", ") }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProjectCard;
