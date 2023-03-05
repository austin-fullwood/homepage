import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, IconButtonProps, styled, Typography } from "@mui/material";
import { Project } from "../utils/types";
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";

import CardImage from "../assets/images/me.jpg";

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
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, minWidth: 345 }}>
    <CardHeader
      sx={{float: "left", textAlign: "left"}}
      title={props.project.name}
      subheader={`${props.project.date.toLocaleString('default', { month: 'long' })} ${props.project.date.getDate()}, ${props.project.date.getFullYear()}`}
    />
    <CardMedia
      component="img"
      height="194"
      image={CardImage}
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {props.project.description}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <Button sx={{width: "100%", backgroundColor: "black", color: "white"}}>GitHub</Button>
    </CardActions>
  </Card>
  );
}

export default ProjectCard;
