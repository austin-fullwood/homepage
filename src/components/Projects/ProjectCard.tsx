import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, IconButtonProps, styled, Typography } from "@mui/material";
import { Project } from "../../utils/types";
import { useState } from "react";

import CardImage from "../../assets/images/me.jpg";
import { useNavigate } from "react-router-dom";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function ProjectCard(props: { project: Project }) {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleGithubClick = () => {
    navigate("https://www.google.com");
  };

  return (
    <Card sx={{ maxWidth: 500, minWidth: 500 }}>
    <CardHeader
      sx={{backgroundColor: "lightblue"}}
      title={props.project.name}
      subheader={`${props.project.date.toLocaleString('default', { month: 'long' })} ${props.project.date.getDate()}, ${props.project.date.getFullYear()}`}
    />
    <CardMedia
      component="img"
      height="194"
      image={CardImage}
      alt="Paella dish"
    />
    <CardContent sx={{textAlign: "left"}}>
      <Typography variant="body2" color="text.primary">
        Mission
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Most US representatives don't represent their constituents well. If there
        were consequences for not representing your voters, maybe our democracy would be more democratic.
      </Typography>
      <Typography variant="body2" color="text.primary">
        Description
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <ul>
          {/* {props.project.description.map((car) => <Car key={car.id} brand={car.brand} />)} */}
        </ul>
      </Typography>
      <Typography variant="body2" color="text.primary">
        Outcome
      </Typography>
      <Typography variant="body2" color="text.secondary">
        * Learned to lead a team of developers.
        * Got 2nd place in the class for our project.
      </Typography>
      <Typography variant="body2" color="text.primary">
        Skills
      </Typography>
      <Typography variant="body2" color="text.secondary">
        NodeJS, Angular, Python, Swift
      </Typography>
    </CardContent>
    <CardActions sx={{padding: 0}}>
      <Button
        href="https://www.google.com"
        sx={{
          width: "100%"
        }}
      >
        GitHub
      </Button>
    </CardActions>
  </Card>
  );
}

export default ProjectCard;
